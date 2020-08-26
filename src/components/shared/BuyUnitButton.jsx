import React from 'react';

export default function BuyUnitButton({canBuy, handleBuyUnit}) {

  let buttonStyles = canBuy ? "bg-green-400 base-button hover:bg-green-700 text-sm": "text-sm base-button bg-gray-300"


  return (
    <button onClick={handleBuyUnit} className={buttonStyles}>Buy</button>
  );
}
