# Qdrant Vector DB – Nền tảng dữ liệu cho AI trả lời theo tài liệu

## 🧠 Giới thiệu
Qdrant là cơ sở dữ liệu vector giúp lưu trữ và tìm kiếm dữ liệu embedding từ mô hình AI. Rất phù hợp để xây chatbot hoặc hệ thống tìm kiếm thông minh.

## 🛠️ Cách mình triển khai
- VPS riêng trên AWS
- Sử dụng Docker image chính thức
- Chỉ mở port 6333 và bảo mật bằng tường lửa nội bộ

## 🔄 Tích hợp
- Dùng Langchain để tạo vector từ PDF, website
- Lưu vào Qdrant và sử dụng trong chatbot AI
- Kết nối với n8n để kích hoạt tìm kiếm & trả lời tự động

## ⚙️ Tối ưu
- Sử dụng filter metadata để phân quyền dữ liệu
- Lưu embedding từ OpenAI hoặc HuggingFace

## 💡 Kết luận
Qdrant là mảnh ghép mạnh mẽ để xây dựng các ứng dụng AI trả lời theo dữ liệu riêng – nhanh, chính xác và dễ mở rộng.
