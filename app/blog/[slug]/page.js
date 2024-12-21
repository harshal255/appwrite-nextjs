'use client'; // Make sure this is a client-side component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation for app directory
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import { databases } from '@/lib/appwrite'; // Assuming your Appwrite client is correctly set up
import Link from 'next/link';
import { Query } from 'appwrite';
import config from '@/config';

const BlogDetails = () => {
    const pathname = usePathname(); // Get the current pathname using usePathname from next/navigation
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Extract the slug from the current URL using pathname
    const slug = pathname?.split('/').pop(); // This should be the [slug] part of the URL

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await databases.listDocuments(
                    config.appwrite.databaseID, // Database ID
                    config.appwrite.collectionID, // Collection ID
                    [Query.equal('slug', [slug])] // Query by slug
                );

                if (response.documents.length > 0) {
                    setBlog(response.documents[0]);
                } else {
                    setError('Blog post not found.');
                }
            } catch (err) {
                console.log({ err })
                setError('Error fetching blog details.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]); // Ensure to fetch data when slug changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto px-6 py-12">
            {blog && (
                <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
                        <h1 className="text-4xl font-bold">{blog.title}</h1>
                    </div>

                    {/* Blog Content */}
                    <div className="px-6 py-8">
                        <div className="text-gray-900">
                            <div className="mb-4 text-sm text-gray-500">
                                <p className="font-semibold">By {blog.author}</p>
                                <p>{blog.views} views</p>
                            </div>

                            <div
                                className="prose max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content, // Full blog content
                                }}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-t border-gray-300">
                        <Link href="/" className="text-blue-500 hover:text-blue-700 font-semibold">
                            Back to Blog List
                        </Link>
                        <p className="text-sm text-gray-600">Published on {new Date(blog.$createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
