// pages/index.js
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-inter scroll-smooth">
      <Head>
        <title>Hành Trình Cài Đặt AI</title>
        <meta name="description" content="Website cá nhân chia sẻ hành trình triển khai hệ thống AI, n8n, Odoo, PostgreSQL, Qdrant, AWS thực tế." />
      </Head>

      {/* Hero Section */}
      <section className="relative px-6 pt-28 pb-32 text-center bg-black overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 blur-[120px] top-[-150px] left-[-150px] z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Hành Trình Cài Đặt <span className="text-purple-400">AI</span> Thực Chiến
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nền tảng chia sẻ kinh nghiệm triển khai hệ thống tự động hóa với n8n, Odoo, PostgreSQL, Qdrant, AWS từ góc nhìn thực tế.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
            >
              Khám phá hệ thống
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Giới thiệu
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#0e0e0e]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Giới thiệu bản thân</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Xin chào mọi người, mình là <span className="text-white font-normal">Minh</span> — một <span className="text-white font-normal">kỹ sư mạng máy tính và truyền thông dữ liệu</span> đang bước vào hành trình chinh phục <span className="text-white font-normal">trí tuệ nhân tạo (AI)</span>.<br /><br />
              Với nền tảng kiến thức về <span className="text-white font-normal">quản trị mạng và bảo mật</span>, mình đang bắt đầu tìm hiểu cách triển khai và kết nối các công cụ AI mã nguồn mở như <span className="text-purple-400">n8n, Odoo, PostgreSQL, Qdrant</span> trên hạ tầng <span className="text-purple-400">AWS</span>, kết hợp kỹ năng quản trị server để xây dựng các hệ thống <span className="text-white font-normal">tự động hóa thực tế</span>.<br /><br />
              Mục tiêu của mình là trở thành <span className="text-white font-normal">một chuyên gia AI ứng dụng từ góc nhìn hệ thống</span>, và mình mong muốn chia sẻ lại toàn bộ quá trình này với cộng đồng — từ những bước đi đầu tiên cho đến khi làm chủ công nghệ.<br /><br />
              Mình sẽ cố gắng chia sẻ mọi hướng dẫn theo cách <span className="text-white font-normal">tiết kiệm chi phí nhất có thể</span>, để bất kỳ ai cũng có thể bắt đầu. Đồng thời, bạn hoàn toàn có thể <span className="text-white font-normal">nâng cấp hệ thống theo nhu cầu riêng</span> để tận dụng sức mạnh của các công cụ này một cách hiệu quả nhất.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img src="/images/A_digital_illustration_in_a_modern,_stylized_portr.png" alt="Minh avatar" className="w-64 h-64 rounded-full object-cover border-4 border-purple-500 shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="projects" className="py-24 px-6 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Nền tảng bạn sẽ làm chủ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[{
              title: "n8n Automation",
              desc: "Tạo workflow tự động hoá mạnh mẽ và bảo mật",
              slug: "n8n-automation"
            }, {
              title: "Odoo ERP",
              desc: "Quản trị doanh nghiệp, bán hàng, nhân sự toàn diện",
              slug: "odoo-erp"
            }, {
              title: "PostgreSQL DB",
              desc: "Cơ sở dữ liệu vững chắc, chuẩn hóa & mở rộng linh hoạt",
              slug: "postgresql-db"
            }, {
              title: "Qdrant Vector DB",
              desc: "Lưu trữ & tìm kiếm dữ liệu vector mạnh mẽ cho AI",
              slug: "qdrant-vector-db"
            }, {
              title: "AWS Cloud",
              desc: "Triển khai hệ thống AI trên hạ tầng cloud mạnh mẽ",
              slug: "aws-cloud"
            }].map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-xl bg-[#1a1a1a] text-left p-6 shadow hover:shadow-lg border border-gray-800 transition hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Blog chia sẻ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[{
              title: "Tự triển khai hệ thống trên AWS miễn phí",
              desc: "Tạo EC2, cài Docker, gắn tên miền, bảo mật...",
              link: "/blog/aws"
            }, {
              title: "Triển khai và bảo mật n8n thực chiến",
              desc: "Docker + reverse proxy + backup + Authelia",
              link: "/blog/n8n"
            }, {
              title: "Tự host Odoo Community trên cloud",
              desc: "Tối ưu PostgreSQL, bảo mật, module cơ bản",
              link: "/blog/odoo"
            }, {
              title: "Khởi tạo & kết nối Qdrant Vector DB",
              desc: "Lưu trữ embedding từ AI app, tích hợp API",
              link: "/blog/qdrant"
            }, {
              title: "PostgreSQL cho người mới bắt đầu",
              desc: "Cài đặt, cấu trúc dữ liệu & tối ưu cơ bản",
              link: "/blog/postgres"
            }].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="block bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-10 px-6 text-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Hành Trình AI. Created by Minh.
        </p>
        <p className="mt-2">
          <a href="mailto:lequangminh.1373@gmail.com" className="hover:underline text-purple-400">lequangminh.1373@gmail.com</a>
          {" | "}
          <a href="https://www.facebook.com/profile.php?id=61577153061284" className="hover:underline text-purple-400">Fanpage</a>
          {" | "}
          <a href="https://www.youtube.com/channel/UC8FPD0IkHjzqSsiMyRDVt9w" className="hover:underline text-purple-400">YouTube</a>
        </p>
      </footer>
    </div>
  );
}
