import { NewsArticle } from '@/data/mockData';
import NewsCard from './NewsCard';

interface NewsGridProps {
  articles: NewsArticle[];
  title?: string;
}

const NewsGrid = ({ articles, title }: NewsGridProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid; 