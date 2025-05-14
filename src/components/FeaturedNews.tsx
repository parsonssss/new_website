import { newsArticles } from '@/data/mockData';
import NewsCard from './NewsCard';

const FeaturedNews = () => {
  const featuredArticles = newsArticles.filter(article => article.isFeatured);
  
  // Get the first featured article as the main feature
  const mainFeature = featuredArticles[0];
  
  // Get the rest of the featured articles (if any)
  const secondaryFeatures = featuredArticles.slice(1, 3);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Feature */}
          <div className="md:col-span-2">
            {mainFeature && (
              <NewsCard article={mainFeature} featured={true} />
            )}
          </div>
          
          {/* Secondary Features */}
          <div className="space-y-6">
            {secondaryFeatures.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews; 