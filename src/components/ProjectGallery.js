import React, { useState } from 'react';

const ProjectGallery = ({ images }) => {
  // Estado para la imagen que se ve en grande (por defecto la primera)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!images || images.length === 0) return null;

  return (
    <div className="project-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {/* Imagen Principal (Grande) */}
      <div className="main-image-container" style={{ width: '100%', borderRadius: '10px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <img 
          src={selectedImage} 
          alt="Project view" 
          className="w-full h-full object-contain transition-opacity duration-300"        />
      </div>

{/* Miniaturas */}
<div className="flex flex-wrap gap-4 justify-start mt-4"> 
  {images.map((img, index) => (
    <div 
      key={index}
      onClick={() => setSelectedImage(img)}
      className={`cursor-pointer rounded border-4 transition-all w-[120px] h-[75px] overflow-hidden ${
        selectedImage === img 
          ? "border-fuchsia-500 opacity-100 scale-105" 
          : "border-transparent opacity-60 hover:opacity-100"
      }`}
    >
      <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
    </div>
  ))}
</div>
    </div>
  );
};

export default ProjectGallery;