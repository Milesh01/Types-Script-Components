//image ke liye aapna config jarur change kar lena
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import './serviceModule.css';
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const serviceCard = [
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647781/GENERALPHYSICIAN_ifxzqf.jpg",
      title: "General Physician", 
      link: "/PhysicalHealth#Servic-GeneralPhysician",
      id: "General-Physician"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647766/CHILDSPECIALIST_wehvl9.jpg", 
      title: "Child Specialist", 
      link: "/ChildCare#Servic-ChildSpecialist",
      id: "Child-Specialist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647787/Gynaecologist_poufyo.jpg", 
      title: "Gynaecologist", 
      link: "/PhysicalHealth#Servic-Gynaecologist",
      id: "Gynaecologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647767/Dermatologist_czrkrs.jpg", 
      title: "Dermatologist", 
      link: "/PhysicalHealth#Servic-Dermatologist",
      id: "Dermatologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647776/ENTHearing_edrpp7.jpg", 
      title: "ENT/Hearing", 
      link: "#",
      id: "ENT-Hearing"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647795/Nephrologist_lnqjdr.jpg", 
      title: "Nephrologist", 
      link: "/PhysicalHealth#Servic-Nephrologist",
      id: "Nephrologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647762/Cardiologist_mebbmn.jpg", 
      title: "Cardiologist", 
      link: "/PhysicalHealth#Servic-Cardiologist",
      id: "Cardiologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647799/Orthopaedic02_brng9x.jpg", 
      title: "Orthopaedic", 
      link: "/PhysicalHealth#Servic-Orthopedic",
      id: "Orthopaedic"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647771/Diabetologist_mzzpo4.jpg", 
      title: "Diabetologist", 
      link: "/PhysicalHealth#Servic-Diabetologist",
      id: "Diabetologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647803/Plastic_CosmeticSurgeon_pgy2lf.jpg", 
      title: "Plastic & Cosmetic Surgeon", 
      link: "/PhysicalHealth",
      id: "Plastic-Cosmetic-Surgeon",
      class: "fs-7 fw-bold"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647804/Psychiatrist_l72cy4.jpg", 
      title: "Psychiatrist", 
      link: "/MentalHealth#Servic-Psychiatrist",
      id: "Psychiatrist"
      
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647806/Psychologist_diqx6p.jpg", 
      title: "Psychologist", 
      link: "/MentalHealth#Servic-Psychologist",
      id: "Psychologist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647815/SpeechTherapy_xuacqy.jpg", 
      title: "Speech Therapy", 
      link: "/ChildCare#Servic-SpeechTherapy",
      id: "Speech-Therapy"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647798/OccupationalTherapy_v7qqxs.jpg", 
      title: "Occupational Therapy", 
      link: "/ChildCare#Servic-OccupationalTherapy",
      id: "Occupational-Therapy",
      class: "fs-6 fw-bold"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647804/Physiotherapist_cytrhp.jpg", 
      title: "Physiotherapist", 
      link: "/PhysicalHealth#Service-Physiotherapist",
      id: "Physiotherapist"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647774/Dietician_egr4hq.jpg", 
      title: "Dietician", 
      link: "/PhysicalHealth#Servic-Dietician",
      id: "Dietician"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647819/Vaccinations_mwqqw1.jpg", 
      title: "Vaccinations", 
      link: "/PhysicalHealth",
      id: "Vaccinations"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647790/InfectiousDiseaseSpecialist_u9xfom.jpg", 
      title: "Infectious Disease Specialist", 
      link: "/PhysicalHealth#Servic-IDS",
      id: "Infectious-Disease-Specialist",
      class: "fs-7 fw-bold"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647766/ChildPysiotherphy_onxshq.jpg", 
      title: "Child Pysiotherphy", 
      link: "/PhysicalHealth",
      id: "Child-Pysiotherphy"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647786/HIV_AIDS_r2vmmw.jpg", 
      title: "HIV AIDS", 
      link: "/PhysicalHealth",
      id: "General-Physician"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647789/InfectiousDisease_hisrie.jpg", 
      title: "Infectious Disease", 
      link: "/PhysicalHealth",
      id: "Infectious-Disease"
    },
    { 
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647810/Sexology_jgfqcz.jpg", 
      title: "Sexology", 
      link: "/MentalHealth#Servic-Sexology",
      id: "Sexology"
    }
  ];
  

const Service = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false  } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false  } }
    ]
  };

  return (
    <div className="container mx-auto py-12 px-4 overflow-hidden">
      <div className="text-center">
        <div className="section-title mb-6">
          <h1 className="relative uppercase mb-4 bottom-line text-red-600 text-3xl font-bold">
            Our Services
          </h1>
          <h5 className="display-5 my-8 text-gray-600 text-2xl font-bold uppercase">
            Comprehensive Care, Every Step of the Way
          </h5>
        </div>
      </div>
      <div className="">
      <Slider {...settings}>
        {serviceCard.map((item, index) => (
          <div key={index} className="p-2">
            <div className="service text-center service010">
              <div className="service_container mx-auto mb-10">
                <Image src={item.image} alt="service image" width={100} height={100} className="object-fit-cover rounded-circle"/>
              </div>
              <h5 className="service_title my-10">
                <Link href={item.link || "#"} className={`text-dark text-decoration-none  ${item.class}`}>{item.title}</Link>
              </h5>
              <Link href={item.link || "#"} className="rounded btn-airtel px-3 py-2 my-6">
              <FaAngleRight size={20} className="inline"/> Read More
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className="container">
        <div className="flex justify-end">
          <Link href="/services/physicalHealth" className="View-more text-dark -mt-10 font-semibold cursor-pointer">
            View More <FaAngleRight size={20} className="inline"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
