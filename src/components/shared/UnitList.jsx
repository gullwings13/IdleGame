import React from 'react';
import UnitCard from './UnitCard';

export default function UnitList({units, unitSubComponentType, handleBuyUnit, unitHealth, handleSelectUnit}) {
  return (
    <div className="flex flex-col w-1/2 bg-gray-100">
        {units.map((unit,id)=>(
            <UnitCard key={id} data={unit} unitSubComponentType={unitSubComponentType} enemy={unitSubComponentType==='enemy'}/>
        ))}
    </div>
  );
}
