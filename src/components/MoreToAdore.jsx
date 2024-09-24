import React, { useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cicek from "../assets/images/çiçek.jpg"

const MoreToAdore = () => {
  const products = [
    { id: 1, name: 'Lingerie Set', imageUrl: cicek },
    { id: 2, name: 'Swimwear', imageUrl:  cicek },
    { id: 3, name: 'Accessories', imageUrl:  cicek },
    { id: 4, name: 'Silk Robe', imageUrl:  cicek },
    { id: 5, name: 'Nightdress', imageUrl:  cicek },
    { id: 6, name: 'Lingerie Set 2', imageUrl:  cicek },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-white py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">More to Adore</h2>
      
      {/* Scroll container */}
      <div className="relative flex items-center">
        
        {/* Prev Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-1 bg-pink-500 text-white rounded-full focus:outline-none"
        >
          <ArrowBackIosNewIcon />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth rounded-lg"
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/4 flex-shrink-0 relative ">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-96 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
              {/* Ürün ismi resmin üzerinde */}
              <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white text-center p-2">
                <h3 className="text-2xl font-medium italic">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-1 bg-pink-500 text-white rounded-full focus:outline-none"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default MoreToAdore;
