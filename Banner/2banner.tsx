// components/DynamicBanner.tsx
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type BannerProps = {
  imageUrl: string;
  altText?: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  title: string;
};

const DynamicBanner: React.FC<BannerProps> = ({
  imageUrl,
  altText = "",
  breadcrumbs = [],
  title,
}) => {
  return (
    <section className="text-black w-full h-[500px]">
      <div className="relative">
        <Image
          width={1920}
          height={1080}
          src={imageUrl}
          alt={altText}
          className={`w-full h-[500px] object-cover`}
          priority
        />
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 text-center">
          {breadcrumbs.length > 0 && (
            <div className="flex items-center justify-center text-white mb-4">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    href={crumb.href} 
                    className="hover:text-primary-givry transition-colors text-sm md:text-base"
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <IoIosArrowForward className="mx-2 md:mx-3 text-white" />
                  )}
                </div>
              ))}
            </div>
          )}
  
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-4xl mx-auto px-4">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DynamicBanner;