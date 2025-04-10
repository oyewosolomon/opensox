import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import NavigationAlt from '@/app/components/NavigationAlt';
import TalentExpert from '@/app/components/TalentExpert';
import Footer from '@/app/components/Footer';
import serviceCategories from '@/app/data/serviceCategories';

export async function generateStaticParams() {
  const params = [];
  
  for (const [category, services] of Object.entries(serviceCategories)) {
    for (const service of services) {
      params.push({
        category: category.toLowerCase().replace(/ /g, '-'),
        service: service.toLowerCase().replace(/ /g, '-')
      });
    }
  }

  return params;
}

export default function ServiceDetailPage({ params }) {
  const formatTitle = (slug) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryName = formatTitle(params.category);
  const serviceName = formatTitle(params.service);

  // Verify the service exists in this category
  const isValidService = serviceCategories[categoryName]?.includes(serviceName);

  if (!isValidService) {
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
          <h1 className="text-2xl font-bold">Service not found</h1>
          <p>The requested service doesn't exist in this category.</p>
        </div>
        <Footer/>
      </>
    );
  }

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
          <p className="text-blue-500 text-lg mb-2">{categoryName}</p>
          <h1 className="text-4xl font-bold text-gray-900">{serviceName}</h1>
        </div>

        <div className="prose max-w-2xl">
          <div>
            <p>
              <span className='text-blue-600 font-semibold'> Opensox</span> is where you can locate the top {serviceName}. Get free quotations right now by starting your search!  
            </p>
            <p>
              Not sure where to begin when searching for an {serviceName} for the first time? We will send you a selection of {serviceName} to review after you tell us about your project. Since there is no hiring pressure, you can check prior reviews, compare profiles, and request additional information before deciding. 
            </p>

            <p className='py-5'>
              The best part is that it's totally free!
            </p>
          </div>
        </div>
      </div>
      <TalentExpert category={serviceName}/>
      <Footer/>
    </>
  );
}