# Tự động hóa với n8n – Workflow mạnh mẽ, bảo mật cao

## 🌟 Giới thiệu
n8n là một công cụ mã nguồn mở giúp bạn tự động hoá công việc thông qua các workflow kéo-thả dễ dùng. Mình sử dụng n8n để kết nối các hệ thống như Telegram, Google Sheets, PostgreSQL, webhook API,…

## 🛠️ Môi trường triển khai
- Máy chủ: AWS EC2
- Hệ điều hành: Ubuntu 22.04
- Triển khai bằng Docker + docker-compose
- Reverse Proxy: Traefik
- Bảo mật: Authelia (đăng nhập phân quyền), HTTPS, chặn root, phân tách mạng nội bộ

## 🔐 Bảo mật 4 lớp
1. **Firewall EC2:** chỉ mở port 80, 443
2. **Bảo mật hệ điều hành:** tắt root SSH, thay đổi port 2222, fail2ban
3. **Docker:** không chạy root, mount volume rõ ràng
4. **Ứng dụng:** dùng Authelia phân quyền đăng nhập thay Basic Auth

## 💾 Backup & Khôi phục
- Tự động backup mỗi đêm bằng cron
- Lưu lên Amazon S3
- Script `restore-n8n.sh` giúp khôi phục toàn bộ chỉ trong 15 phút

## 💡 Kết luận
n8n không chỉ đơn thuần là công cụ tự động hóa, mà còn là nền tảng kết nối cực kỳ linh hoạt – khi bạn kết hợp nó với bảo mật vững chắc và kiến trúc cloud hợp lý, nó có thể thay thế cả Zapier hoặc Make ở mức doanh nghiệp nhỏ.
