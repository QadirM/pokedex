import React from 'react';

const ItemDetail = ({ itemDetail, pokemonId }) => {
  console.log(itemDetail.id);
  return (
    <container key={itemDetail.id}>
      <h4>{itemDetail.name}</h4>
      <p>Happiness: {itemDetail.happiness}</p>
      <p>Price: ${itemDetail.price}</p>
    </container>
  );
};

export default ItemDetail;
