# Quản lý PostgreSQL – Cơ sở dữ liệu vững chắc và linh hoạt

## 💾 Giới thiệu
PostgreSQL là hệ quản trị cơ sở dữ liệu mã nguồn mở nổi bật với tính ổn định, mở rộng linh hoạt và hỗ trợ tốt cho các hệ thống AI, ERP, automation.

## 🛠️ Môi trường triển khai
- VPS riêng trên AWS Lightsail
- Cài đặt PostgreSQL 15
- Tách biệt cơ sở dữ liệu dùng cho n8n và Odoo

## 🔐 Bảo mật
- Chỉ mở port 5432 cho IP nội bộ
- Đổi user mặc định, bật xác thực bằng mật khẩu mạnh
- Cronjob backup tự động hàng ngày lưu lên S3

## 🧪 Công cụ đi kèm
- pgAdmin để quản lý giao diện
- pg_dump / pg_restore để backup và khôi phục
- Log chi tiết giúp theo dõi truy vấn bất thường

## 💡 Kết luận
PostgreSQL là nền tảng vững chắc cho mọi hệ thống cần độ tin cậy cao, rất phù hợp cho backend của ứng dụng hiện đại.
