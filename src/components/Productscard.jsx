import React from 'react'
import image1 from '../assets/images/img.jpg'
const Productscard = () => {
   
        const handleClick = () => {
          console.log("Image clicked!");
          // Burada sayfa değiştirme gibi işlemler yapabilirsin
        };
      
  return (
    <div className='grid grid-cols-3 gap-4 py-10'>
      
      <div className="relative">
  <img src={image1} alt="" onClick={handleClick}  className="w-full h-auto cursor-pointer" />
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white p-2 rounded">
    <h3 className="text-6xl">Clothing</h3>
  </div>
</div>
<div className="relative">
  <img src={image1} alt="" onClick={handleClick}  className="w-full h-auto cursor-pointer" />
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white  p-2 rounded">
    <h3 className="text-6xl ">Hosiery</h3>
  </div>
</div>
<div className="relative">
    
  <img src={image1} alt="" onClick={handleClick} className="w-full h-auto cursor-pointer"  />
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white  p-2 rounded">
    <h3 className="text-6xl ">Accessory</h3>
  </div>
</div>

    </div>
  )
}

export default Productscard
