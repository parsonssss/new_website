import { notFound } from 'next/navigation';
import { newsArticles, categories } from '@/data/mockData';
import NewsGrid from '@/components/NewsGrid';
import Link from 'next/link';
import { Metadata } from 'next';

type Params = {
  category: string;
};

export function generateStaticParams(): Array<Params> {
  return categories.map(category => ({
    category: category.toLowerCase(),
  }));
}

export function generateMetadata({ 
  params 
}: { 
  params: Params; 
}): Metadata {
  const categoryParam = params.category;
  const categoryName = categories.find(
    cat => cat.toLowerCase() === categoryParam.toLowerCase()
  );

  if (!categoryName) {
    return {
      title: 'Category Not Found'
    };
  }

  return {
    title: `${categoryName} News - NewsNow`,
    description: `Latest news and articles in the ${categoryName} category`,
  };
}

export default function CategoryPage({ 
  params 
}: { 
  params: Params;
}) {
  const categoryParam = params.category;
  
  // Find the category (case-insensitive)
  const categoryName = categories.find(
    cat => cat.toLowerCase() === categoryParam.toLowerCase()
  );

  if (!categoryName) {
    notFound();
  }

  // Get articles for this category
  const categoryArticles = newsArticles.filter(
    article => article.category.toLowerCase() === categoryParam.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mt-4">{categoryName} News</h1>
      </div>
      
      {categoryArticles.length > 0 ? (
        <NewsGrid articles={categoryArticles} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
} 