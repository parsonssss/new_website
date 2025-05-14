import { notFound } from 'next/navigation';
import { newsArticles } from '@/data/mockData';
import Link from 'next/link';
import { Metadata } from 'next';

type Params = {
  id: string;
};

export function generateStaticParams(): Array<Params> {
  return newsArticles.map(article => ({
    id: article.id.toString(),
  }));
}

export function generateMetadata({ 
  params 
}: { 
  params: Params; 
}): Metadata {
  const article = newsArticles.find(
    article => article.id === parseInt(params.id)
  );

  if (!article) {
    return {
      title: 'Article Not Found'
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default function ArticlePage({ 
  params 
}: { 
  params: Params; 
}) {
  const id = params.id;
  const article = newsArticles.find(
    article => article.id === parseInt(id)
  );

  if (!article) {
    notFound();
  }

  const { title, content, category, author, publishDate } = article;

  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        
        <article>
          <header className="mb-8">
            <div className="mb-2">
              <Link 
                href={`/category/${category.toLowerCase()}`}
                className="text-blue-600 text-sm font-medium"
              >
                {category}
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <div className="text-gray-600">
              <span>By {author}</span>
              <span className="mx-2">•</span>
              <span>{formattedDate}</span>
            </div>
          </header>
          
          <div className="relative w-full h-64 md:h-96 mb-8">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/placeholder-news.jpg')` }}
            />
          </div>
          
          <div className="prose max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
} 