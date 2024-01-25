import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProps {
  value: any;
  children: any;
  width?: number | string;
  height?: number | string;
  count?: number;
}

export const ReactSkeleton = (props: IProps) => {
  const { value, children, width, height, count } = props;

  return (
    <SkeletonTheme baseColor="#14142B" highlightColor="#2E2E50" width={'100%'}>
      {value ? (
        children
      ) : (
        <Skeleton width={width} height={height} count={count} />
      )}
    </SkeletonTheme>
  );
};
