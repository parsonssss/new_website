import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">About NewsNow</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to NewsNow, your trusted source for the latest news and insights from around the world. 
            Our mission is to deliver accurate, timely, and relevant news to keep you informed about current events.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Our Mission</h2>
          <p className="mb-4">
            At NewsNow, we are committed to providing high-quality journalism that informs, educates, and engages our audience. 
            We believe in the power of well-researched, balanced reporting to help people understand the complex world around them.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Our Coverage</h2>
          <p className="mb-4">
            We cover a wide range of topics including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Technology and Innovation</li>
            <li>World Affairs and Politics</li>
            <li>Business and Economy</li>
            <li>Sports and Athletics</li>
            <li>Entertainment and Culture</li>
            <li>Science and Research</li>
            <li>Health and Medicine</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Our Team</h2>
          <p className="mb-4">
            Our dedicated team of journalists, editors, and researchers work tirelessly to bring you the most important stories of the day. 
            With diverse backgrounds and expertise, our team is committed to maintaining the highest standards of journalistic integrity.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p className="mb-4">
            We value your feedback and would love to hear from you. If you have any questions, comments, or story tips, please don&apos;t hesitate to reach out to us at <a href="mailto:contact@newsnow.example.com" className="text-blue-600 hover:underline">contact@newsnow.example.com</a>.
          </p>
          
          <p className="mt-8 text-gray-600">
            Note: NewsNow is a demo project created for educational purposes. The articles and content on this site are fictional and do not represent real news events.
          </p>
        </div>
      </div>
    </div>
  );
} 