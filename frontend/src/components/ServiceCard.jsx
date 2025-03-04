import { FaStethoscope, FaHeartbeat, FaLaptopMedical } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Diagnose & Research",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    description:
      "Advanced diagnostic tools and cutting-edge research to identify and treat conditions with precision and accuracy.",
    icon: <FaStethoscope className="text-teal-500 text-3xl" />
  },
  {
    id: 2,
    title: "Holter Heart Surgery",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
    description:
      "State-of-the-art cardiac care with minimally invasive techniques and personalized treatment plans by expert cardiologists.",
    icon: <FaHeartbeat className="text-teal-500 text-3xl" />
  },
  {
    id: 3,
    title: "Online Monitoring",
    image:
      "https://redindex.net/demos/wp/medifix/wp-content/uploads/2024/02/Rectangle-1037.webp",
    description:
      "24/7 remote patient monitoring with real-time data analysis and instant alerts for proactive healthcare management.",
    icon: <FaLaptopMedical className="text-teal-500 text-3xl" />
  },
];

function ServiceCard({ title, image, description, icon }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611045.jpg";
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold text-gray-800 ml-3">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        
        <a
          href="#"
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors group"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;