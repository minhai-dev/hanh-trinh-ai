import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hành Trình Cài Đặt AI</title>
        <meta name="description" content="Website chia sẻ kiến thức tự động hoá & AI thực chiến" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng bạn đến với</h1>
        <h2 className="text-5xl font-extrabold text-blue-400">Hành Trình Cài Đặt AI 🚀</h2>
        <p className="mt-6 text-center max-w-xl">
          Đây là nơi mình chia sẻ cách tự triển khai các công cụ AI mạnh mẽ như <strong>n8n</strong>, <strong>Odoo</strong>,
          cũng như các kỹ năng quản trị server, bảo mật và tự động hoá để ứng dụng vào công việc thực tế.
        </p>
      </main>
    </>
  );
}
