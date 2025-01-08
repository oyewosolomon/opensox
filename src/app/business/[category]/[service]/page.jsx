import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import NavigationAlt from '@/app/components/NavigationAlt';
import TalentExpert from '@/app/components/TalentExpert';
import Footer from '@/app/components/Footer';

// This is the correct way to get params in Next.js 13+ App Router
export default function ServiceDetailPage({ params }) {
  const formatTitle = (slug) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <>
    <NavigationAlt/>
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20 mb-12">
      <Link 
        href="/business" 
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Services
      </Link>

      <div className="mb-8">
        <p className="text-blue-500 text-lg mb-2">{formatTitle(params.category)}</p>
        <h1 className="text-4xl font-bold text-gray-900">{formatTitle(params.service)}</h1>
      </div>

      <div className="prose max-w-2xl">
        <div>
          <p>
            <span className='text-blue-600 font-semibold'> Opensox</span> is where you can locate the top {formatTitle(params.service)}. Get free quotations right now by starting your search!  
          </p>
          <p>
            Not sure where to begin when searching for an {formatTitle(params.service)} for the first time? We will send you a selection of {formatTitle(params.service)} to review after you tell us about your project. Since there is no hiring pressure, you can check prior reviews, compare profiles, and request additional information before deciding. 
          </p>

          <p className='py-5'>
            The best part is that it's totally free!
          </p>
        </div>
      </div>
    </div>
    <TalentExpert category={formatTitle(params.service)}/>
    <Footer/>
    </>
  );
}