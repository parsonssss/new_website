import Link from 'next/link';
import { NewsArticle } from '@/data/mockData';
import NewsCard from './NewsCard';

interface CategorySectionProps {
  category: string;
  articles: NewsArticle[];
}

const CategorySection = ({ category, articles }: CategorySectionProps) => {
  // Get up to 4 articles for this category
  const categoryArticles = articles.slice(0, 4);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{category}</h2>
          <Link 
            href={`/category/${category.toLowerCase()}`}
            className="text-blue-600 hover:underline text-sm"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categoryArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 