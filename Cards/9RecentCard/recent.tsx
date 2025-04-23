import React from 'react';
import RecentPostCard from './recentPostCard';
import Image from 'next/image';

const BlogDetails: React.FC = () => {
    const recentPosts  = [
        {
          title: "WS Clinic: Your New Destination for Holistic Wellness in Delhi",
          date: "July 8, 2024",
          image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745390990/Holistic_Wellness_tw9gbs.avif",
          link: "",
        },
        {
          title: "Explore WS Clinic’s Physical Health Services for a Healthier You",
          date: "July 9, 2024",
          image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745407486/Physical_Health_Services_n6n11q.avif",
          link: "",
        },
        {
          title: "Your Mind Matters: Mental Health Support at WS Clinic",
          date: "July 11, 2024",
          image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745407786/Mental_Health_xydmdy.avif",
          link: "",
        },
      ];
   

  return (
    <section className='bg-white z-10 w-full'>
         <div className="max-w-7xl p-5 mx-auto lg:px-10 py-12 md:pt-40 pt-28">
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
        <div className='mt-9 bg-[#f8f9fb] text-black rounded-md md:p-8 p-5'>
        <div className='grid lg:grid-cols-3'>
            <div className='h-[130px] text-cente'>
                  <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647821/WSClinic1_z3gxtl.png" alt="image" className="w-full h-full object-contain" width={1000} height={1000} />
            </div>
            <div className='lg:col-span-2'>
                <h2 className='text-xl text-green-800 font-semibold mb-2'>Ws Clinic</h2>
                <p className='text-sm text-gray-500'>WS Clinic offers a full range of mental health services, including diagnosis, therapy, and medication management. Our team treats conditions such as anxiety, PTSD, OCD, and mood disorders using evidence-based approaches. With both in-person and online consultations, getting support has never been more accessible.</p>
            </div>
        </div>
        </div>
        </div>
        <div className='relative'>
        <div className="sticky top-10">
        <div className='text-black bg-[#f8f9fb] md:p-8 p-4 rounded-sm'>
            <h3 className='ps-3 font-bold text-xl pb-3'>Recent Posts</h3>
        <ul className="space-y-3">
  {recentPosts.map((post, idx) => (
    <li key={idx}>
      <RecentPostCard {...post} />
    </li>
  ))}
</ul>
</div>
</div>
            </div>
       </div>
      </div>
    </section>
  );
};

export default BlogDetails;
