'use client';
import Navbar from '@/components/navbar';
import BlogList from '@/pages/blogLists';
import { useEffect } from 'react';


export default function Home() {

  return (
    <div>
      <Navbar />
      <header className="text-center p-6 flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-2">Explore my articles on web development, Next.js, APIs, and more!</p>
      </header>
      <main className="my-8">
        <BlogList />
      </main>
    </div>
  );
}
