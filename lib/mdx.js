// ✅ lib/mdx.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const blogDirectory = path.join(process.cwd(), 'blog');

export function getBlogSlugs() {
  return fs.readdirSync(blogDirectory).filter(file => file.endsWith('.md'));
}

export function getBlogBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data || {}, content };
}

export async function getBlogContent(slug) {
  const { meta, content } = getBlogBySlug(slug);
  const mdxSource = await serialize(content);
  return { meta, mdxSource };
} 