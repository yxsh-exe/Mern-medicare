export const services = [
  {
    id: 1,
    title: "Diagnose & Research",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor...",
  },
  {
    id: 2,
    title: "Holter Heart surgery",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor...",
  },
  {
    id: 3,
    title: "Online Monitoring",
    image:
      "https://redindex.net/demos/wp/medifix/wp-content/uploads/2024/02/Rectangle-1037.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor...",
  },
];

function ServiceCard({ title, image, description }) {
  return (
    <div className="bg-[#a8ddfc] hover:scale-105 rounded-2xl p-5 flex flex-col shadow-lg gap-4 transition-all duration-300 ease-in-out  ">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-2xl text-gray-900 font-medium cursor-default transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
      <a
        href="#"
        className="text-gray-900 font-medium hover:text-primary/80 hover:text-blue-500 transition-colors"
      >
        Read More
      </a>
    </div>
  );
}

export default ServiceCard;
