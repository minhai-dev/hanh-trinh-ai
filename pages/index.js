import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="py-6 shadow">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hành Trình Cài Đặt AI</h1>
          <nav className="space-x-4">
            <a href="/about" className="hover:underline">Giới thiệu</a>
            <a href="/contact" className="hover:underline">Liên hệ</a>
            <div className="inline-block relative group">
              <button className="hover:underline">Bài viết</button>
              <div className="absolute hidden group-hover:block bg-white border rounded shadow mt-2">
                <a href="/blog/n8n" className="block px-4 py-2 hover:bg-gray-100">n8n</a>
                <a href="/blog/odoo" className="block px-4 py-2 hover:bg-gray-100">Odoo</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Xây dựng hệ thống AI thực chiến</h2>
        <p className="text-lg">Chia sẻ hành trình tự học, cài đặt và vận hành các nền tảng AI, n8n, Odoo, Qdrant, PostgreSQL,...</p>
      </main>

      <footer className="py-8 bg-gray-100 text-center text-sm text-gray-500">
        <p>Email: lequangminh.1373@gmail.com | ĐT: 0786826968</p>
        <p>
          <a href="https://www.facebook.com/profile.php?id=61577153061284" className="underline">Fanpage</a> |{' '}
          <a href="https://www.youtube.com/channel/UC8FPD0IkHjzqSsiMyRDVt9w" className="underline">YouTube</a>
        </p>
      </footer>
    </div>
  );
}
