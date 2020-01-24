import React from 'react';
import { Card as AntCard } from 'antd';

const Card = ({ imgUrl, children }) => {
   return (
      <AntCard
         style={{ width: 300 }}
         cover={
            <img
               alt="example"
               src={imgUrl}
            />
         }
      >
         {children}
      </AntCard>
   );
};

export default Card;
