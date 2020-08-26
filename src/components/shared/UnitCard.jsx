import React from 'react';
import BuyUnitButton from './BuyUnitButton';
import HealthBar from './HealthBar';
import SelectUnitButton from './SelectUnitButton';

export const unitSubComponent = {
    BUYBUTTON: 'buybutton',
    HEALTHBAR: 'healthbar',
    SELECTBUTTON: 'selectbutton',
    ENEMY: 'enemy',
    ENEMYNOHEALTH: 'enemynohealth',
}

export default function UnitCard({data, unitSubComponentType, enemy, handleBuyUnit, handleSelectUnit}) {
    
    const subComponent = (type) =>
    {
        switch (type) {
            case 'buybutton':
                return <BuyUnitButton onClick={handleBuyUnit} canBuy={data.canBuy}/>  

            case 'healthbar':
                return <HealthBar squadPercentHealthy={data.squadPercentHealthy}/>
        
            case 'selectbutton':
                return <SelectUnitButton handleSelectUnit={handleSelectUnit}/>

            case 'enemy':
                return <HealthBar squadPercentHealthy={data.squadPercentHealthy} leftToRight={true}/>

            case 'enemynohealth':
                return ""

            default:
                console.log("Soldier List style enum error")
                break;
        }
    }



  return (
    <div className={`h-20 flex justify-between p-1 m-1 bg-gray-200 ${enemy?' flex-row-reverse':''}`}>
        <div className="flex flex-col w-full">
            <div className={`flex justify-between flex-1 ${enemy?' flex-row-reverse':''}`}>
                <div>{data.name}</div>
                <div className="text-sm">{data.count}</div>
            </div>
            <div className={`flex justify-between items-center flex-1 ${enemy?' flex-row-reverse':''}`}>
                {subComponent(unitSubComponentType)}
                <img className="h-10" src={data.sprite} alt={"Enemy " + data.name + " sprite." }/>
            </div>
            </div>
        
    </div>
  );
}
