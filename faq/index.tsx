import { useState } from 'react';
import { FaArrowDown , FaArrowUp} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  {
    number: '01',
    question: 'How involved can I be in the design process?',
    answer: 'We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.'
  },
  {
    number: '02',
    question: 'What services do you offer?',
    answer: 'We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.'
  },
  {
    number: '03',
    question: 'What is your design process?',
    answer: 'We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.'
  },
  {
    number: '04',
    question: 'How do you establish your design fees?',
    answer: 'We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
    <div className="bg-white md:flex py-20 md:px-32 p-5">
      <div className="md:w-1/3">
      <p className='text-green-dark font-bold dm-sans'>FAQS</p>
        <h2 className="md:text-6xl text-3xl dm-sans text-green-dark my-6">Still Have A Question?</h2>
        <Link href="#" 
          className="grow_skew_backward text-white bg-[#02312F] rounded-full py-4 px-6 mt-6 flex justify-center items-center dm-sans w-2/3">
          See All FAQs  &nbsp; <MdArrowOutward size={25}/>
        </Link>
        </div>
        <div className="md:w-2/3 md:mt-0 mt-5">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`md:p-7 p-5 rounded-2xl border ${activeIndex === index ? '' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center space-x-6">
                  <span className="text-gray-400 text-2xl">{faq.number}</span>
                  <h3 className="md:text-2xl text-lg text-green-dark">{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <FaArrowUp className="text-green-dark" size={25}/>
                ) : (
                  <FaArrowDown className="text-green-dark" size={25}/>
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && faq.answer && (
                  <motion.p 
                    className="mt-2 pl-14 text-gray-500"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;