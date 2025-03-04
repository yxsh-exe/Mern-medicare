import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHospitalAuthContext } from "../hooks/useHospitalAuthContext";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import LocomotiveScroll from "locomotive-scroll";
import { Carousel } from "flowbite-react";
import { FaFacebook, FaInstagram, FaYoutube, FaCalendarAlt, FaUserMd, FaHospital } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdSecurity, MdHealthAndSafety, MdSupportAgent } from "react-icons/md";
import ServiceCard from "../components/ServiceCard";
import { services } from "../components/ServiceCard";

function Home() {
  const { hospital } = useHospitalAuthContext();
  const { admin } = useAdminAuthContext();

  const navigate = useNavigate();
  
  // Initialize locomotive scroll for smooth scrolling
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
      smartphone: {
        smooth: true
      }
    });
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const apiKey = import.meta.env.VITE_API_KEY;

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Medicare transformed my healthcare experience. The appointment booking system is intuitive, and the doctors are top-notch. I particularly appreciate the secure access to my medical history and the personalized care recommendations.",
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://img.freepik.com/free-photo/portrait-smiling-young-woman-looking-camera_23-2148258245.jpg"
    },
    {
      id: 2,
      text: "As a healthcare provider, Medicare has streamlined our patient management system significantly. The interface is user-friendly, and the real-time updates on patient information have improved our response time and care quality.",
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      image: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg"
    },
    {
      id: 3,
      text: "The telemedicine feature on Medicare has been a lifesaver for our family. Living in a rural area, we used to travel hours for specialist consultations. Now, we can connect with healthcare professionals without leaving home.",
      name: "Robert Williams",
      role: "Patient",
      image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-man_23-2148664572.jpg"
    },
    {
      id: 4,
      text: "Medicare's prescription management system has eliminated the hassle of refills. The reminders and direct connection to my pharmacy ensure I never miss my medications. The customer support team is also exceptionally responsive.",
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
        <img 
          src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" 
          alt="Medical professionals" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-xl md:text-2xl mb-4 font-light tracking-wider border-l-4 border-teal-400 pl-3">
              Welcome to MediCare
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health is <span className="text-sky-500">Our Priority</span>
            </h1>
            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
              Experience healthcare reimagined. Medicare connects you with top medical professionals, 
              simplifies appointment booking, and gives you secure access to your health information—all in one place.
            </p>
            {!hospital && !admin ? (
              <button
                onClick={handleClick}
                className="bg-[#2563EB] text-white px-8 py-4 rounded-md font-medium hover:bg-sky-500 transition duration-300 shadow-lg flex items-center gap-2"
              >
                <FaCalendarAlt /> Book Your Appointment
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">
                <FaUserMd />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600 text-center">Expert Physicians</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-teal-600 text-4xl mb-4">
                <FaHospital />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600 text-center">Partner Hospitals</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 text-4xl mb-4">
                <MdHealthAndSafety />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600 text-center">Satisfied Patients</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">
                <MdSupportAgent />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600 text-center">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-teal-600 uppercase mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Makes Medicare <span className="text-teal-600">Unique</span>
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover how our comprehensive healthcare platform simplifies your medical journey with innovative features designed for your convenience and wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Health News Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-wider text-teal-600 uppercase mb-2">Stay Informed</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Health News
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Keep up with the latest developments in healthcare and wellness from trusted sources.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading health news...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:translate-y-[-5px] transition-transform duration-300"
                >
                  {article.urlToImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.urlToImage || "/placeholder-news.jpg"} 
                        alt={article.title}
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          e.target.src = "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611045.jpg";
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description || "No description available."}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                      >
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-teal-600 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4ade80" d="M40.8,-68.7C52.9,-61.3,62.9,-49.7,70.8,-36.4C78.7,-23.1,84.5,-7.9,83.2,7C81.9,21.9,73.5,36.6,62.3,47C51.1,57.4,37.1,63.6,23.5,68.3C9.9,73,-3.3,76.1,-17.6,74.6C-31.8,73.1,-47.1,67,-58.6,56.5C-70.1,46,-77.7,31.1,-81,15.1C-84.3,-0.9,-83.3,-17.9,-75.8,-30.8C-68.3,-43.7,-54.3,-52.6,-40.5,-59.2C-26.7,-65.9,-13.3,-70.4,0.9,-71.8C15,-73.3,30.1,-71.8,40.8,-68.7Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Get Our Wellness Newsletter
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  Filter out the noise and nurture your inbox with health and wellness advice that's inclusive and rooted in medical expertise.
                </p>
                <p className="text-gray-500 text-sm">
                  Your <a href="#" className="underline text-teal-600 hover:text-teal-800">privacy</a> is important to us
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300 font-medium">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h1 className="text-3xl font-bold mb-4">MEDICARE</h1>
              <p className="text-gray-400 max-w-md">
                Transforming healthcare delivery with technology that connects patients with providers seamlessly.
              </p>
              <div className="flex gap-5 text-2xl mt-6">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <FaSquareXTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-teal-400">Organization</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Our Services</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Our Team</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-teal-400">More Info</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Health Topics</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Sitemap</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Medical Affairs</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Content Integrity</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Newsletters</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-teal-400">Legal</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">HIPAA Compliance</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Accessibility</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-800 mb-8" />
          
          <div className="text-sm text-gray-500">
            <p>© 2025 MediCare Media LLC. All rights reserved.</p>
            <p className="mt-2">
              MediCare Media is an RVO Health Company. Our website services, content, and products are for informational purposes only.
              MediCare Media does not provide medical advice, diagnosis, or treatment.
              <a href="#" className="underline ml-1 text-teal-400 hover:text-teal-300">See additional information</a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Bottom Bar */}
      <div className="bg-gray-950 text-gray-400 px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">MEDICARE MEDIA</div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
            <span className="text-teal-400">OUR BRANDS</span>
            <a href="#" className="hover:text-white transition duration-300">About</a>
            <a href="#" className="hover:text-white transition duration-300">Careers</a>
            <a href="#" className="hover:text-white transition duration-300">Advertise with us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;