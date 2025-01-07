import Image from 'next/image';

export default function ForClient() {
  return (
    <div className=" h-screen overflow-hidden" id='forclient'>
        <div className='relative max-w-6xl mx-auto my-10 pb-10 pt-10 h-[600px] rounded-xl'>
            {/* Background image */}
            <div className="absolute inset-0 -z-10  rounded-xl">
                <Image
                src="/business-man.jpg" // replace with your actual image path
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className=' rounded-xl'
                />
            </div>

            {/* Content Section */}
            <div className="container mx-auto h-full flex flex-col justify-between px-8 text-white">
                <p className="text-lg mb-4">For clients</p>
                <h1 className="text-5xl font-bold mb-6">
                Discover talent <br/>
                as you want it.
                </h1>
                <p className="text-lg max-w-lg mb-8">
                Get things done, from speedy turnarounds to significant transformations, by collaborating with the biggest network of independent specialists.
                </p>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                    title="Post a job and hire a pro"
                    description="Talent Box"
                    link="#"
                />
                {/* <Card
                    title="Browse and buy projects"
                    description="Project Catalog"
                    link="#"
                /> */}
               
                </div>
            </div>
        </div>
    </div>
  );
}

function Card({ title, description, link }) {
  return (
    <a
      href={link}
      className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description} →</p>
    </a>
  );
}
