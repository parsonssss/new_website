import FeaturedNews from '@/components/FeaturedNews';
import CategorySection from '@/components/CategorySection';
import { newsArticles } from '@/data/mockData';

export default function Home() {
  // Get articles for different categories
  const getCategoryArticles = (category: string) => {
    return newsArticles.filter(article => article.category === category);
  };

  return (
    <div className="min-h-screen">
      {/* Featured News Section */}
      <FeaturedNews />
      
      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>
      
      {/* Technology News Section */}
      <CategorySection 
        category="Technology" 
        articles={getCategoryArticles("Technology")} 
      />
      
      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>
      
      {/* World News Section */}
      <CategorySection 
        category="World" 
        articles={getCategoryArticles("World")} 
      />
      
      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>
      
      {/* Business News Section */}
      <CategorySection 
        category="Business" 
        articles={getCategoryArticles("Business")} 
      />
      
      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>
      
      {/* Sports News Section */}
      <CategorySection 
        category="Sports" 
        articles={getCategoryArticles("Sports")} 
      />
    </div>
  );
}
