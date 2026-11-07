# Portfolio — Nguyễn Minh Anh

Website portfolio tĩnh, song ngữ Việt/Anh. **Không cần cài đặt, không cần server.**

## Cách mở
Bấm đúp vào `index.html` (hoặc kéo file vào trình duyệt).

## Sửa nội dung (5 phút)
Mọi chữ và số liệu nằm trong **một file duy nhất: `data/content.js`**. Mở bằng TextEdit/VS Code, sửa, lưu, tải lại trang.

| Muốn sửa | Tìm trong `content.js` |
|---|---|
| Tên, chức danh, câu giới thiệu | `profile` |
| **Email / LinkedIn** (đang là dữ liệu giả lập) | `profile.email`, `profile.linkedin` |
| 8 con số nổi bật | `stats` |
| 3 nguyên tắc làm việc | `principles` |
| Dự án (nội dung case study) | `projects` |
| Kinh nghiệm, học vấn, chứng chỉ | `experience`, `education`, `certifications` |
| Kỹ năng | `skills` |
| Nhận xét đồng nghiệp | `testimonials` |
| Chữ trên nút, tiêu đề mục | `ui` |

Mỗi đoạn chữ có hai bản: `{ vi: "...", en: "..." }`. **Bản tiếng Anh do AI dịch — hãy đọc lại trước khi công khai.**

### Thêm một dự án
Copy nguyên một khối trong `projects: [ ... ]`, đổi `id`, nội dung và ảnh. Trang tự tạo thêm thẻ và case study.

### Đổi ảnh
Thay file trong `assets/img/` (giữ nguyên tên, hoặc sửa đường dẫn trong `content.js`). Nên nén ảnh ≤ 250 KB.
- Ảnh chân dung: `assets/img/avatar.jpg`
- Ảnh dự án: `assets/img/project-*.jpg`
- CV tải về: `assets/CV_Nguyen_Minh_Anh.pdf`

## Trước khi công khai
- [ ] Thay email/LinkedIn thật; **không** đưa số điện thoại lên trang công khai.
- [ ] Đọc lại bản tiếng Anh.
- [ ] Nếu dùng tên công ty/đồng nghiệp thật: xóa ghi chú "dữ liệu giả lập" (`ui.footerNote`, `ui.voicesNote`) và xin phép người được trích dẫn.
- [ ] Ảnh dự án hiện là hình minh họa (có chú thích "Hình minh họa"); thay bằng ảnh thật nếu được phép.
- [ ] Ảnh xem trước khi chia sẻ link (Open Graph) cần địa chỉ đầy đủ: sau khi có URL thật, sửa `og:image` trong `index.html` thành `https://tên-miền-của-bạn/assets/img/og.jpg`.

## Đưa lên mạng (tùy chọn)
Kéo cả thư mục `portfolio-site` vào Netlify Drop (app.netlify.com/drop) hoặc đẩy lên GitHub Pages. Không cần bước build.

## Ghi chú kỹ thuật
- Font (Be Vietnam Pro, Fraunces) tải từ Google Fonts khi có mạng; khi offline trang tự dùng font hệ thống.
- Ngôn ngữ đã chọn được nhớ trong trình duyệt (`localStorage`); nếu bị chặn thì trang vẫn chạy bình thường.
- Nội dung nằm trong `content.js` (không dùng `fetch` JSON) để mở trực tiếp bằng `file://` không bị trình duyệt chặn.
- In trang (Ctrl/Cmd + P) có bố cục in riêng.

## Cấu trúc
```
index.html
css/styles.css
js/app.js          # dựng trang từ content.js, đổi ngôn ngữ, case study
data/content.js    # ← file duy nhất cần sửa
assets/            # ảnh + CV PDF
```
