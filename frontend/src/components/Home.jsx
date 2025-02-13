import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHospitalAuthContext } from "../hooks/useHospitalAuthContext";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import LocomotiveScroll from "locomotive-scroll";
// import { Carousel } from "flowbite-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ServiceCard from "../components/ServiceCard";
import { services } from "../components/ServiceCard";

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
      <div className="flex flex-col">
        <div
          className="bg-cover bg-center w-full h-[100%]"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg?t=st=1738263232~exp=1738266832~hmac=b713c91b12b4d3cda2f8960c3f064a9e94fe00402dc4f29390d05540b103791d&w=1060)",
          }}
        >
          <div className="lefthome w-[50%] h-full p-[90px] bg-[linear-gradient(-180deg,#BDFFF3,#dbdbdb)]">
            <h2 className="text-2xl mb-4 border-l-black border-l-2 pl-3">
              Welcome to MediCare
            </h2>
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
              simplifies it all.
            </p>
            {!hospital && !admin ? (
              <button
                onClick={handleClick}
                className="bg-sky-400 text-white p-5 rounded-md mt-10  hover:scale-105 duration-300 hover:bg-black"
              >
                Book your appointment
              </button>
            ) : null}
          </div>
          <div className="righthome w-[50%] h-full flex items-center justify-center"></div>
        </div>

        <div className="bg-[linear-gradient(0deg,#58bfff,#dbdbdb)] p-20">
          <h3 className="text-4xl text-center mb-10 ">
            What makes Medicare UNIQUE?
          </h3>
          <div className="flex gap-8 p-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>
          {/* <div className="h-[600px]  mt-5">
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
          
          </div> */}
        </div>
        <div className="bg-[linear-gradient(180deg,#58bfff,#dbdbdb)] p-20">
          <h1 className="text-4xl font-semibold text-center ">Health News </h1>

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
                  Read more...
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div className=" bg-[linear-gradient(0deg,#abdbff,#dbdbdb)] px-28 py-10">
          {/* Header with Logo and Social */}
          <div className="flex justify-between mb-12">
            <h1 className="text-3xl font-bold">MEDICARE</h1>
            <div className="flex gap-5 text-3xl">
              <FaFacebook />
              <FaSquareXTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div className="relative w-full h-52 px-10 flex-col bg-[linear-gradient(-45deg,#BDFFF3,turquoise)] py-10 rounded-lg">
            <h2 className="text-2xl font-bold items-start">
              Get our wellness newsletter
            </h2>
            <h1 className="text-2xl mt-2">
              Filter out the noise and nurture your inbox with health and
              <br />
              wellness advice that's inclusive and rooted in medical expertise.
            </h1>
            <p className="mt-4 text-l">
              Your{" "}
              <a href="#" className="underline">
                privacy
              </a>{" "}
              is important to us
            </p>
            <div className="absolute flex flex-col top-20 right-20 items-end">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2 py-4 border border-gray-300 rounded-md"
                />
                <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-black duration-300">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-10 ">
            {/* Newsletter Section */}

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h1 className="font-bold text-2xl mb-5 hover:text-blue-500">
                  Organization
                </h1>
                <a href="#" className="block mb-2 link-hover">
                  Home
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Contact Us
                </a>
                <a href="#" className="block mb-2 link-hover">
                  About Us
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Our Services
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Our Team
                </a>
              </div>
              <div>
                <h1 className="font-bold text-2xl mb-5">More Info</h1>
                <a href="#" className="block mb-2 link-hover">
                  Health Topics
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Sitemap
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Medical Affairs
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Content Integrity
                </a>
                <a href="#" className="block mb-2 link-hover">
                  Newsletters
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-600">
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
        <div className="bg-[linear-gradient(0deg,#bdffdf,#dbdbdb)] px-20 py-6 ">
          <div className="flex justify-between">
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
