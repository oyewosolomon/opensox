// servicesData.js
const services = [
    {
      title: 'Services',
      items: [
        { 
          icon: '💼', 
          label: 'Business',
          submenu: [
            { label: 'Consulting' },
            { label: 'Marketing' },
            { label: 'Financial Services' },
            { label: 'IT Services' }
          ]
        },
        { 
          icon: '🎭', 
          label: 'Events & Entertainers',
          submenu: [
            { label: 'Wedding Planning' },
            { label: 'Party Planning' },
            { label: 'Musicians' },
            { label: 'Photographers' }
          ]
        },
        { 
          icon: '❤️', 
          label: 'Health & Wellness',
          submenu: [
            { label: 'Personal Training' },
            { label: 'Nutrition' },
            { label: 'Yoga Classes' },
            { label: 'Mental Health' }
          ]
        },
        { 
          icon: '🏠', 
          label: 'House & Home',
          submenu: [
            { label: 'Cleaning' },
            { label: 'Repairs' },
            { label: 'Interior Design' },
            { label: 'Garden & Outdoor' }
          ]
        },
        { 
          icon: '📚', 
          label: 'Lessons & Training',
          submenu: [
            { label: 'Academic Tutoring' },
            { label: 'Music Lessons' },
            { label: 'Language Classes' },
            { label: 'Art & Craft' }
          ]
        },
        { 
          icon: '⋯', 
          label: 'More',
          submenu: [
            { label: 'Pet Services' },
            { label: 'Legal Services' },
            { label: 'Writing & Translation' },
            { label: 'Virtual Assistance' }
          ]
        }
      ]
    },
    {
      title: 'Popular Services',
      items: [
        { label: 'Dog & Pet Grooming' },
        { label: 'Dog Training' },
        { label: 'Dog Walking' },
        { label: 'Life Coaching' },
        { label: 'Limousine Hire' },
        { label: 'Private Investigators' }
      ]
    }
  ];
  
  export default services;
  