// ✅ pages/blog/[slug].js
import { MDXRemote } from 'next-mdx-remote';
import { getBlogSlugs, getBlogContent } from '../../lib/mdx';

export default function BlogPost({ meta, mdxSource }) {
  return (
  <div className="bg-[#0e0e0e] min-h-screen text-white">
    <div className="prose prose-invert max-w-3xl mx-auto px-4 py-10 text-gray-100">
      <h1 className="text-purple-400 text-3xl font-bold mb-6">{meta.title || 'Bài viết'}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  </div>
);
}

export async function getStaticPaths() {
  const slugs = getBlogSlugs();
  const paths = slugs.map(slug => ({
    params: { slug: slug.replace(/\.md$/, '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { meta, mdxSource } = await getBlogContent(params.slug);
  return { props: { meta, mdxSource } };
}