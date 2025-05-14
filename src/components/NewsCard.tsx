import Link from 'next/link';
import { NewsArticle } from '@/data/mockData';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard = ({ article, featured = false }: NewsCardProps) => {
  const { id, title, summary, category, author, publishDate } = article;
  
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 w-full sm:h-80 md:h-96">
          <div className="absolute inset-0 bg-gray-800 opacity-30 z-10"></div>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/placeholder-news.jpg')` }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 z-20">
            <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 mb-3 rounded-full">
              {category}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              <Link href={`/article/${id}`}>{title}</Link>
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-3">
              {summary}
            </p>
            <div className="flex items-center">
              <span className="text-white text-sm">
                {author} • {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/placeholder-news.jpg')` }}
        />
      </div>
      <div className="p-4 flex-grow">
        <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 mb-2 rounded-full">
          {category}
        </span>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link href={`/article/${id}`} className="text-gray-800 hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {summary}
        </p>
      </div>
      <div className="px-4 pb-4 text-sm text-gray-500">
        {author} • {formattedDate}
      </div>
    </div>
  );
};

export default NewsCard; 