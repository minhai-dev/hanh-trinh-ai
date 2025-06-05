# Xây dựng hạ tầng cá nhân trên AWS – Chủ động, bảo mật, tối ưu chi phí

## ☁️ Tổng quan
AWS là nền tảng cloud hàng đầu thế giới. Mình sử dụng AWS để triển khai toàn bộ hạ tầng AI cá nhân: từ tự động hóa đến ERP, cơ sở dữ liệu, vector DB và backup.

## 🔧 Dịch vụ đã dùng
- **EC2:** Chạy n8n, Authelia, PostgreSQL, Qdrant
- **S3:** Lưu backup tự động
- **Lambda:** Tự động bật/tắt server theo giờ
- **Route 53:** Quản lý tên miền `hanhtrinhcaidatai.space`

## 🛡️ Bảo mật
- Chỉ mở đúng port (80/443/2222)
- Dùng key SSH riêng, tắt đăng nhập bằng mật khẩu
- Gán IAM riêng cho từng dịch vụ backup

## 💸 Tối ưu chi phí
- EC2 tắt vào ban đêm qua scheduler
- Dùng tier miễn phí S3/Lambda
- Không dùng dịch vụ vượt nhu cầu (ví dụ RDS, ECS)

## 💡 Kết luận
Hạ tầng cá nhân trên AWS giúp mình chủ động 100%, có thể học – triển khai – vận hành như một hệ thống doanh nghiệp nhỏ thực thụ.
