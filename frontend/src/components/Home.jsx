import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHospitalAuthContext } from "../hooks/useHospitalAuthContext";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import LocomotiveScroll from "locomotive-scroll";
import { Carousel } from "flowbite-react";
import {
  FaFacebook,
  FaFlipboard,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Home() {
  const { hospital } = useHospitalAuthContext();
  const { admin } = useAdminAuthContext();

  const navigate = useNavigate();
  const locomotiveScroll = new LocomotiveScroll();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=${apiKey}`
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching health news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/hospitals");
  };
  return (
    <>
      <div className=" flex flex-col">
        <div
          className="home bg-cover bg-center w-full h-[100%]"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg)",
          }}
        >
          <div className="lefthome w-[50%] h-full p-[90px]">
            <h1 className="text-7xl font-semibold text-[#231F20]">
              Your Health is our Priority.
            </h1>
            <p className="mt-10 tracking-wider">
              Welcome to Medicare, your all-in-one solution for seamless
              healthcare management. With our app, you can easily book
              appointments, consult with doctors online, and access your medical
              history securely from anywhere. Our intuitive platform connects
              patients and healthcare providers, ensuring timely care and
              efficient communication. Whether you're scheduling a routine
              checkup, managing prescriptions, or finding specialists, Medicare
              simplifies it all. Built using the MERN stack, our app offers
              fast, reliable, and user-friendly features tailored for modern
              healthcare needs. Stay on top of your health with real-time
              updates, reminders, and comprehensive support, all in one place!
            </p>
            {!hospital && !admin ? (
              <button
                onClick={handleClick}
                className="bg-[#231F20] p-5 rounded-md mt-10 text-white hover:scale-105 duration-300 hover:bg-[#40393b]"
              >
                Book your appointment
              </button>
            ) : null}
          </div>
          <div className="righthome w-[50%] h-full flex items-center justify-center">
            <div className="imgdiv"></div>
          </div>
        </div>

        <div className="bg-[#E8ECEF] ">
          
          <h1 className="ml-12 mt-6 text-4xl font-bold">Health News :-</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-bold text-pretty text-black-700">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 underline mt-3 block hover:text-blue-600 duration-300"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#E8ECEF] p-10">
          <h3 className="text-4xl ml-4">What makes Medicare unique?</h3>

          <div className="h-[600px]  mt-5">
            <Carousel>
              <div className="flex h-full items-center justify-center bg-white dark:bg-white-700 dark:text-black">
                <div className="flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nesciunt obcaecati ipsa saepe doloribus repudiandae beatae
                  quibusdam esse et harum pariatur, tempore voluptatem quae
                  excepturi totam ab quod. Eos sit ut eius qui iste, labore,
                  dolorum quod, dolores aliquid quisquam nobis sequi. Vel modi
                  quidem pariatur laudantium accusantium! Consequatur dolorem
                  exercitationem esse laudantium impedit.
                </div>
                <div className="flex-shrink-0">
                  <div className=" h-[600px] w-[600px] p-4">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-white dark:bg-white-700 dark:text-black">
                <div className="flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nesciunt obcaecati ipsa saepe doloribus repudiandae beatae
                  quibusdam esse et harum pariatur, tempore voluptatem quae
                  excepturi totam ab quod. Eos sit ut eius qui iste, labore,
                  dolorum quod, dolores aliquid quisquam nobis sequi. Vel modi
                  quidem pariatur laudantium accusantium! Consequatur dolorem
                  exercitationem esse laudantium impedit.
                </div>
                <div className="flex-shrink-0">
                  <div className=" h-[600px] w-[600px] p-4">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-white dark:bg-white-700 dark:text-black">
                <div className="flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nesciunt obcaecati ipsa saepe doloribus repudiandae beatae
                  quibusdam esse et harum pariatur, tempore voluptatem quae
                  excepturi totam ab quod. Eos sit ut eius qui iste, labore,
                  dolorum quod, dolores aliquid quisquam nobis sequi. Vel modi
                  quidem pariatur laudantium accusantium! Consequatur dolorem
                  exercitationem esse laudantium impedit.
                </div>
                <div className="flex-shrink-0">
                  <div className=" h-[600px] w-[600px] p-4">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-white dark:bg-white-700 dark:text-black">
                <div className="flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nesciunt obcaecati ipsa saepe doloribus repudiandae beatae
                  quibusdam esse et harum pariatur, tempore voluptatem quae
                  excepturi totam ab quod. Eos sit ut eius qui iste, labore,
                  dolorum quod, dolores aliquid quisquam nobis sequi. Vel modi
                  quidem pariatur laudantium accusantium! Consequatur dolorem
                  exercitationem esse laudantium impedit.
                </div>
                <div className="flex-shrink-0">
                  <div className=" h-[600px] w-[600px] p-4">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Footer */}

        <div className="bg-[#FBF5ED] p-8">
          {/* Header with Logo and Social */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl font-bold">mediCare</h1>
            <div className="flex gap-5 text-3xl">
              <FaFacebook />
              <FaSquareXTwitter />
              <FaPinterest />
              <FaInstagram />
              <FaYoutube />
              <FaFlipboard />
            </div>
          </div>

          <div className="flex items-center justify-between p-10">
            {/* Newsletter Section */}
            <div className="max-w-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Get our wellness newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Filter out the noise and nurture your inbox with health and
                wellness advice that's inclusive and rooted in medical
                expertise.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border border-gray-300"
                />
                <button className="bg-teal-600 text-white px-6 py-2 font-serif">
                  SIGN UP
                </button>
              </div>
              <p className="mt-4 text-sm">
                Your{" "}
                <a href="#" className="underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 font-sans">
              <div>
                <a href="#" className="block mb-2">
                  About Us
                </a>
                <a href="#" className="block mb-2">
                  Contact Us
                </a>
                <a href="#" className="block mb-2">
                  Privacy Policy
                </a>
                <a href="#" className="block mb-2">
                  Privacy Settings
                </a>
                <a href="#" className="block mb-2">
                  Advertising Policy
                </a>
                <a href="#" className="block mb-2">
                  Health Topics
                </a>
              </div>
              <div>
                <a href="#" className="block mb-2">
                  Sitemap
                </a>
                <a href="#" className="block mb-2">
                  Medical Affairs
                </a>
                <a href="#" className="block mb-2">
                  Content Integrity
                </a>
                <a href="#" className="block mb-2">
                  Newsletters
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-600 font-sans">
            <p>© 2025 MediCare Media LLC. All rights reserved.</p>
            <p className="mt-2">
              MediCare Media is an RVO Health Company. Our website services,
              content, and products are for informational purposes only.
              MediCare Media does not provide medical advice, diagnosis, or
              treatment.
              <a href="#" className="underline ml-1">
                See additional information
              </a>
            </p>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="p-6 bg-[#0D9488] border-t border-gray-200 font-serif">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold ">MEDICARE MEDIA</div>
            <div className="flex gap-8">
              <span>OUR BRANDS</span>
              <a href="#" className="underline">
                About
              </a>
              <a href="#" className="underline">
                Careers
              </a>
              <a href="#" className="underline">
                Advertise with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
