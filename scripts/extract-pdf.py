import fitz  # PyMuPDF
import os

# PDF 파일 경로
pdf_path = "public/김해진영지주택.pdf"
output_dir = "public/pdf-pages"

# 출력 디렉토리 생성
os.makedirs(output_dir, exist_ok=True)

# PDF 열기
doc = fitz.open(pdf_path)

print(f"총 {len(doc)} 페이지를 추출합니다...")

# 각 페이지를 이미지로 저장
for page_num in range(len(doc)):
    page = doc[page_num]

    # 고해상도로 렌더링 (2x 스케일)
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)

    # PNG로 저장
    output_path = os.path.join(output_dir, f"page-{page_num + 1:02d}.png")
    pix.save(output_path)
    print(f"  페이지 {page_num + 1}/{len(doc)} 저장: {output_path}")

doc.close()
print(f"\n완료! {output_dir} 폴더에 이미지가 저장되었습니다.")
