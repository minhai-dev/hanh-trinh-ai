# Tự triển khai Odoo ERP – Quản trị doanh nghiệp toàn diện

## 🧩 Giới thiệu
Odoo là một nền tảng ERP mã nguồn mở mạnh mẽ, tích hợp nhiều mô-đun: bán hàng, kho vận, kế toán, nhân sự… giúp doanh nghiệp quản lý tổng thể từ một nơi.

## 🛠️ Môi trường triển khai
- VPS riêng trên AWS
- Cài đặt bằng Docker và docker-compose
- Phiên bản: Odoo Community 17.0
- Bảo mật port, giới hạn truy cập qua domain

## ⚙️ Tính năng đã triển khai
- Tạo mới cơ sở dữ liệu cho từng môi trường (dev, staging, production)
- Cấu hình email gửi hóa đơn và xác thực
- Gắn module quản lý bán hàng, nhân sự, CRM

## 🔒 Bảo mật
- Tắt đăng ký user công khai
- Quản lý quyền rõ ràng theo nhóm
- Giới hạn truy cập thông qua reverse proxy và bảo mật 2 lớp

## 💡 Kết luận
Odoo rất phù hợp cho doanh nghiệp vừa và nhỏ cần một giải pháp ERP tự chủ, có thể mở rộng và kiểm soát hoàn toàn dữ liệu.
