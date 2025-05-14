import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockBlogPosts } from '@/data/mock';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Blog Beauté</h1>
      <p className="text-gray-600 mb-8">
        Découvrez nos conseils, astuces et tendances beauté dans notre blog
      </p>
      
      {/* Articles de blog en destaque */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div className="md:col-span-7">
          <FeaturedPost post={mockBlogPosts[0]} />
        </div>
        <div className="md:col-span-5 grid grid-cols-1 gap-6">
          <SmallPost post={mockBlogPosts[1]} />
          <SmallPost post={mockBlogPosts[2]} />
        </div>
      </div>
      
      {/* Liste des articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* Newsletter */}
      <div className="bg-primary mt-16 rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-playfair font-semibold mb-3 text-primary-foreground">Abonnez-vous à notre newsletter</h2>
          <p className="text-primary-foreground/90 mb-6">
            Recevez nos derniers articles, conseils beauté et offres exclusives directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow rounded-md border border-primary-foreground/10 bg-white/90 px-4 py-2"
              required
            />
            <Button className="bg-primary-foreground text-white hover:bg-primary-foreground/90">
              S'abonner
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  tags: string[];
  slug?: string; // Ajout du champ slug
}

const FeaturedPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug || post.id}`} className="group block h-full">
      <div className="relative h-80 rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-playfair font-semibold mb-2">{post.title}</h2>
          <p className="text-white/90 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center mt-4">
            <span className="text-sm">{post.author}</span>
            <span className="mx-2">•</span>
            <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SmallPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug || post.id}`} className="group block h-full">
      <div className="relative h-40 rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-medium mb-1">{post.title}</h3>
          <div className="flex items-center text-xs">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogPostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link to={`/blog/${post.slug || post.id}`} className="block group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug || post.id}`} className="block group">
          <h3 className="text-xl font-medium mb-2 group-hover:text-primary-foreground transition-colors">{post.title}</h3>
        </Link>
        <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              {post.likes}
            </button>
            <button className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              {post.comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
