'use client';

import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { ReactSkeleton } from '../react-skeleton';

interface IProps {
  image: string;
  alt: string;
  width?: number;
  height?: number;
  styles?: string;
}

export const ImageLoader = (props: IProps) => {
  const { image, alt, width, height, styles } = props;
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = () => {
      const loadingImage = new Image();
      loadingImage.src = image;

      loadingImage.onload = () => {
        setCurrentImage(loadingImage.src);
        setLoading(false);
      };

      loadingImage.onerror = () => {
        setLoading(false);
      };
    };

    fetchImage();
  }, []);

  return (
    <ReactSkeleton value={!loading} height="100%">
      <NextImage
        width={width || 500}
        height={height || 100}
        src={currentImage}
        alt={alt}
        className={styles}
      />
    </ReactSkeleton>
  );
};
