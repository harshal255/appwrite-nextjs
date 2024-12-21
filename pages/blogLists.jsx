'use client'
import { useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';
import BlogCard from '@/components/blogCard';
import config from '@/config';

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log({config})

    useEffect(() => {
        const fetchBlogs = async () => {
            try {

                const response = await databases.listDocuments(
                    config.appwrite.databaseID, // database ID
                    config.appwrite.collectionID, // collection ID
                    [] // you can add filters here if needed
                );


                setBlogs(response.documents);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogCard
                        key={blog.$id} // Use unique ID from Appwrite
                        title={blog.title}
                        content={blog.content}
                        slug={blog.slug}
                        views={blog.views}
                        author={blog.author}
                        is_published={blog.is_published}
                    />
                ))
            ) : (
                <div>No blogs available</div> 
            )}
        </div>
    );
}
