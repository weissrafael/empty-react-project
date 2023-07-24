import React from 'react';

import CardSkeletonLoader from 'Components/CardSkeletonLoader/CardSkeletonLoader';
import { CardList } from 'Styles/common.styles';

const skeletonArray = Array.from(Array(10).keys());

export default function SkeletonFeed() {
  return (
    <CardList>
      {skeletonArray.map((item) => (
        <CardSkeletonLoader key={item} />
      ))}
    </CardList>
  );
}
