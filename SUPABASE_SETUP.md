# Supabase 설정 가이드

이 문서는 프로젝트의 Supabase 설정 방법을 설명합니다.

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 로그인
2. "New Project" 클릭
3. 프로젝트 이름, 데이터베이스 비밀번호, 리전 설정 후 생성

## 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin (관리자 로그인 키)
ADMIN_KEY=your-secret-admin-key
```

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 대시보드 → Settings → API → Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase 대시보드 → Settings → API → anon public key

## 3. 데이터베이스 설정

Supabase 대시보드 → SQL Editor에서 `supabase/schema.sql` 파일의 내용을 실행하세요.

또는 아래 SQL을 순서대로 실행:

### 3.1 테이블 생성

```sql
-- 작성자 테이블
CREATE TABLE IF NOT EXISTS authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  instagram TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 포스트 테이블
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID REFERENCES authors(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 포스트 이미지 테이블
CREATE TABLE IF NOT EXISTS post_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  blur_data_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 댓글 테이블
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  nickname TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- YouTube 영상 테이블
CREATE TABLE IF NOT EXISTS youtube_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id TEXT NOT NULL,
  title TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 사이트 설정 테이블
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3.2 RLS (Row Level Security) 정책 설정

```sql
-- Authors
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "authors_read" ON authors FOR SELECT USING (true);
CREATE POLICY "authors_insert" ON authors FOR INSERT WITH CHECK (true);
CREATE POLICY "authors_update" ON authors FOR UPDATE USING (true);
CREATE POLICY "authors_delete" ON authors FOR DELETE USING (true);

-- Posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "posts_read" ON posts FOR SELECT USING (true);
CREATE POLICY "posts_insert" ON posts FOR INSERT WITH CHECK (true);
CREATE POLICY "posts_update" ON posts FOR UPDATE USING (true);
CREATE POLICY "posts_delete" ON posts FOR DELETE USING (true);

-- Post Images
ALTER TABLE post_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "post_images_read" ON post_images FOR SELECT USING (true);
CREATE POLICY "post_images_insert" ON post_images FOR INSERT WITH CHECK (true);
CREATE POLICY "post_images_update" ON post_images FOR UPDATE USING (true);
CREATE POLICY "post_images_delete" ON post_images FOR DELETE USING (true);

-- Comments
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "comments_read" ON comments FOR SELECT USING (true);
CREATE POLICY "comments_insert" ON comments FOR INSERT WITH CHECK (true);

-- YouTube Videos
ALTER TABLE youtube_videos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "youtube_videos_read" ON youtube_videos FOR SELECT USING (true);
CREATE POLICY "youtube_videos_insert" ON youtube_videos FOR INSERT WITH CHECK (true);
CREATE POLICY "youtube_videos_update" ON youtube_videos FOR UPDATE USING (true);
CREATE POLICY "youtube_videos_delete" ON youtube_videos FOR DELETE USING (true);

-- Site Settings
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "site_settings_read" ON site_settings FOR SELECT USING (true);
```

### 3.3 초기 데이터

```sql
-- 관리자 키 (사이트에서 변경 가능)
INSERT INTO site_settings (key, value) VALUES ('admin_key', 'change_me_to_secure_key')
ON CONFLICT (key) DO NOTHING;
```

## 4. Storage 버킷 설정

### 4.1 버킷 생성

Supabase 대시보드 → Storage → New bucket

- **Name**: `post-images`
- **Public bucket**: 체크 (활성화)

### 4.2 Storage 정책 설정

SQL Editor에서 실행:

```sql
CREATE POLICY "post_images_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'post-images');

CREATE POLICY "post_images_public_insert" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'post-images');

CREATE POLICY "post_images_public_update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'post-images');

CREATE POLICY "post_images_public_delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'post-images');
```

## 5. 프로젝트 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

## 6. 관리자 접속

`/admin` 페이지에서 관리자 키로 로그인

- 초기 키: `change_me_to_secure_key` (DB에서 설정)
- 키 변경: `/admin/settings` 페이지에서 변경 가능

## 7. 문제 해결

### 이미지 업로드 실패
- Storage 버킷이 public으로 설정되어 있는지 확인
- Storage 정책이 올바르게 설정되어 있는지 확인

### RLS 정책 에러
- RLS가 활성화되어 있는지 확인
- 적절한 정책이 설정되어 있는지 확인

### 테이블/컬럼 누락 에러
- `supabase/schema.sql` 파일을 다시 실행하세요
