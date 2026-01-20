-- ===========================================
-- Photo Archive - Database Schema
-- ===========================================
--
-- 설정 방법:
-- 1. Supabase 프로젝트 생성
-- 2. SQL Editor에서 이 파일 전체 실행
-- 3. Storage > New bucket > "post-images" 생성 (Public bucket 체크)
-- 4. 아래 admin_key 값을 안전한 비밀번호로 변경하거나,
--    사이트 /admin/settings에서 변경
--
-- ===========================================

-- ===========================================
-- 1. 테이블 생성
-- ===========================================

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

-- 사이트 설정 테이블 (관리자 인증 등)
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===========================================
-- 2. RLS 정책 (Row Level Security)
-- ===========================================

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

-- Comments (누구나 읽기/작성 가능)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "comments_read" ON comments FOR SELECT USING (true);
CREATE POLICY "comments_insert" ON comments FOR INSERT WITH CHECK (true);

-- YouTube Videos
ALTER TABLE youtube_videos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "youtube_videos_read" ON youtube_videos FOR SELECT USING (true);
CREATE POLICY "youtube_videos_insert" ON youtube_videos FOR INSERT WITH CHECK (true);
CREATE POLICY "youtube_videos_update" ON youtube_videos FOR UPDATE USING (true);
CREATE POLICY "youtube_videos_delete" ON youtube_videos FOR DELETE USING (true);

-- Site Settings (읽기만 공개)
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "site_settings_read" ON site_settings FOR SELECT USING (true);

-- ===========================================
-- 3. Storage 정책 (post-images 버킷)
-- ===========================================
-- 주의: 먼저 Storage에서 "post-images" 버킷을 생성해야 합니다!

CREATE POLICY "post_images_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'post-images');

CREATE POLICY "post_images_public_insert" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'post-images');

CREATE POLICY "post_images_public_update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'post-images');

CREATE POLICY "post_images_public_delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'post-images');

-- ===========================================
-- 4. 초기 데이터
-- ===========================================

-- 관리자 키 (반드시 변경하세요!)
INSERT INTO site_settings (key, value) VALUES ('admin_key', 'change_me_to_secure_key')
ON CONFLICT (key) DO NOTHING;
