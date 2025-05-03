import React from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

export interface TestCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  discountPercent?: number;
}

const TestCard: React.FC<TestCardProps> = ({
  title,
  subtitle,
  description,
  price,
  icon,
  discountPercent,
}) => {
  return (
    <div className="bg-white rounded-lg p-6">
      {discountPercent && (
        <div className="mb-4 flex justify-end">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
            -{discountPercent}% OFF
          </span>
        </div>
      )}

      <div className="h-52">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-md mb-3">{subtitle}</h4>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
      </div>

      <hr />

      <div className="flex items-center my-5">
        <span className="text-gray-500 text-sm mr-2">Regular Price :</span>
        <span className="text-lg font-bold">${price}</span>
      </div>

      <Link
        href="#"
        className="rounded-full hover:bg-red-500 hover:text-white transition-all duration-150 bg-gray-300 flex items-center justify-center py-3 px-4 text-sm w-full"
      >
        Booking For A Test &nbsp;
        <RiArrowRightUpLine />
      </Link>
    </div>
  );
};

export default TestCard;
