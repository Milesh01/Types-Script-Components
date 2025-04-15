import React, { useEffect, useState } from 'react';

type CounterCardProps = {
  value: number;
  suffix?: string;
//   label: string;
  duration?: number; // in milliseconds
};

const CounterCard: React.FC<CounterCardProps> = ({
  value,
  suffix = '',
//   label,
  duration = 2500,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30;
    const totalIncrements = duration / incrementTime;
    const increment = value / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, duration]);

  return (
    <div className="transition-transform duration-300">
      <h2 className="md:text-6xl text-4xl font-bold text-primary-accent">
        {count}
        {suffix}
      </h2>
      {/* <p className="text-gray-700 mt-2">{label}</p> */}
    </div>
  );
};

export default CounterCard;



// ye second wala file hai jisme aapko call karna hai
// import React from 'react';
// import CounterCard from './CounterCard';

// const stats = [
//   { value: 5, suffix: '+', label: 'Years of collective experience' },
//   { value: 95, suffix: '+', label: 'Client satisfaction rate' },
//   { value: 15, suffix: '+', label: 'Successfully created projects' },
// ];

// const StatsSection: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center gap-6 px-4 py-8">
//       {stats.map((stat, index) => (
//         <CounterCard
//           key={index}
//           value={stat.value}
//           suffix={stat.suffix}
//           label={stat.label}
//         />
//       ))}
//     </div>
//   );
// };

// export default StatsSection;

