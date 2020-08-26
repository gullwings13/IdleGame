import React from 'react';
import UnitCard from './UnitCard';
import BuyUnitButton from './BuyUnitButton';
import HealthBar from './HealthBar';
import SelectUnitButton from './SelectUnitButton';

export const unitSubComponent = {
    BUYBUTTON: 'buybutton',
    HEALTHBAR: 'healthbar',
    SELECTBUTTON: 'selectbutton',
    ENEMY: 'enemy'
}

export default function UnitList({units, subComponentType, handleBuyUnit, unitHealth, handleSelectUnit}) {

    const subComponent = (type) =>
    {
        switch (type) {
            case 'buybutton':
                return <BuyUnitButton onClick={handleBuyUnit}/>  

            case 'healthbar':
                return <HealthBar unitHealth={unitHealth}/>
        
            case 'selectbutton':
                return <SelectUnitButton handleSelectUnit={handleSelectUnit}/>

            case 'enemy':
                return <HealthBar unitHealth={unitHealth}/>

            default:
                console.log("Soldier List style enum error")
                break;
        }
    }

  return (
    <div className="flex flex-col w-1/2 bg-gray-100">
        {units.map((unit,id)=>(
            <UnitCard key={id} data={unit} subComponent={subComponent(subComponentType)} enemy={subComponentType=='enemy'}/>
        ))}
    </div>
  );
}
