'use client'
import Link from "next/link";

// Helper function to generate a random hex color
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default function BlogCard({ title, content, slug, views, author, is_published }) {
    // Generate a random background color for the image area
    const randomColor = getRandomColor();
    const randomOpacity = Math.random() * (0.4 - 0.3) + 0.3; // Opacity between 0.3 (30%) and 0.4 (40%)

    return (
        <div
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}
        >
            {/* Image Background with Random Color */}
            <div
                className="h-48 rounded-t-lg mb-4"
                style={{
                    backgroundColor: randomColor,
                    opacity: randomOpacity,
                }}
            ></div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-800 transition-colors">{title}</h3>

            {/* Content Preview */}
            <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{
                    __html: content.slice(0, 150) + "...", // Preview first 150 characters of HTML content
                }}
            />

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center text-gray-900">
                <div className="text-sm">
                    <p className="font-semibold">By {author}</p>
                </div>
                <div className="text-sm">
                    <p>{views} views</p>
                </div>
            </div>

            {/* Read More Button */}
            {is_published && (
                <div className="mt-4 text-right">
                    <Link href={`/blog/${slug}`} className="text-pink-400 hover:text-pink-500 font-semibold transition-colors">
                        Read More
                    </Link>
                </div>
            )}
        </div>
    );
}
