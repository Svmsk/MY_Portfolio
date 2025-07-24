import React from 'react';

const Image = ({ src, alt, className = '', sizes = '100vw', ...props }) => {
  // Generate different image sizes for responsive loading
  const generateSrcSet = () => {
    const sizes = [320, 480, 768, 1024, 1280];
    return sizes
      .map((size) => {
        const width = Math.min(size, 1280);
        return `${src}?w=${width} ${width}w`;
      })
      .join(', ');
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full ${className}`}
      sizes={sizes}
      srcSet={generateSrcSet()}
      {...props}
    />
  );
};

export default Image;
