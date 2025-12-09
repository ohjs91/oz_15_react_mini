import { useEffect, useRef } from 'react';

export const useLazyImages = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const realSrc = img.dataset.src;
          img.src = realSrc;
        }
      });
    });
    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return imgRef;
};
export default useLazyImages;
