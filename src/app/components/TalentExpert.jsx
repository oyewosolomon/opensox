import React from 'react';
import { Star } from 'lucide-react';

const ExpertCard = ({ expert,category }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <img 
      src={expert.imageUrl} 
      alt={expert.name}
      className="w-24 h-24 rounded-full mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
    <p className="text-gray-600 mb-3">{category}</p>
    
    <div className="flex items-center gap-2 mb-3">
      <div className={`flex items-center place-items-center gap-1 px-2 py-1 rounded ${
        expert.topRatedPlus ? 'bg-pink-100' : 'bg-blue-100'
      }`}>
        <div className={`w-4 h-4  ${
          expert.topRatedPlus ? 'text-pink-500' : 'text-blue-500'
        }`}>★</div>
        <span className="text-sm">{expert.topRatedPlus ? 'Top Rated Plus' : 'Top Rated'}</span>
      </div>
      <span className="text-gray-700 font-medium"></span>
    </div>
    
    <div className="flex items-center gap-1 mb-4">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="font-medium">{expert.rating}</span>
      <span className="text-gray-500">({expert.totalJobs} jobs)</span>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {expert.skills.map((skill) => (
        <span 
          key={skill}
          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
    
    <button className="w-full border border-blue-600 text-blue-600 hover:bg-green-50 rounded-lg py-2 transition-colors">
      View profile
    </button>
  </div>
);

const TalentExpert = ({category}) => {
  const experts = [
    {
      name: "Kenniz A.",
      role: "Advertising Copywriter",
      imageUrl: "https://fastly.picsum.photos/id/334/2304/1536.jpg?hmac=ihrh84KbSSW-zvp-oRz8FGCVOWvPAD3SZvYPS0v3mv8",
      topRatedPlus: false,
      hourlyRate: 40,
      rating: 4.98,
      totalJobs: 2,
      skills: ["AI Chatbot", "AI Model Integration"]
    },
    {
      name: "Muhammad H.",
      role: "Advertising Copywriter",
      imageUrl: "https://fastly.picsum.photos/id/334/2304/1536.jpg?hmac=ihrh84KbSSW-zvp-oRz8FGCVOWvPAD3SZvYPS0v3mv8",
      topRatedPlus: true,
      hourlyRate: 40,
      rating: 4.76,
      totalJobs: 2,
      skills: ["Generative AI", "Natural Language Processing"]
    },
    {
      name: "Muneer A.",
      role: "Advertising Copywriter",
      imageUrl: "https://fastly.picsum.photos/id/334/2304/1536.jpg?hmac=ihrh84KbSSW-zvp-oRz8FGCVOWvPAD3SZvYPS0v3mv8",
      topRatedPlus: false,
      hourlyRate: 35,
      rating: 4.99,
      totalJobs: 7,
      skills: ["Stable Diffusion", "AI Content Creation"]
    },
    {
      name: "Sadam H.",
      role: "Advertising Copywriter",
      imageUrl: "https://fastly.picsum.photos/id/334/2304/1536.jpg?hmac=ihrh84KbSSW-zvp-oRz8FGCVOWvPAD3SZvYPS0v3mv8",
      topRatedPlus: true,
      hourlyRate: 6,
      rating: 4.98,
      totalJobs: 31,
      skills: ["Image Processing", "Machine Learning"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <ul className="flex gap-6 border-b">
         <li>
            {category}
          </li>
         
        </ul>
      </nav>

      {/* Expert Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {experts.map((expert) => (
          <ExpertCard key={expert.name} expert={expert} category={category} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Hire a {category}
        </button>
      </div>
    </div>
  );
};

export default TalentExpert;