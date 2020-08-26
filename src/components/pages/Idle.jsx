import React from 'react';
import UnitList from '../shared/UnitList';
import { unitSubComponent } from  '../shared/UnitCard';
import soldierplaceholdersprite from '../../sprites/soldierplaceholder.png'
import enemyplaceholdersprite from '../../sprites/enemyplaceholder.png'

let fakeSoldierData = Array.from(Array(10).keys()).map(id=>(
  {
    name:"Soldier "+(id+1),
    sprite: soldierplaceholdersprite,
    damage: id+1,
    count: 100,
    squadPercentHealthy:100-1.1*id*3,
    cost: (id+1)*10,
    canBuy: (id+1)*10 < 40
}))

let fakeEnemyData = Array.from(Array(10).keys()).map(id=>(
  {
    name:"Enemy "+(id+1),
    sprite: enemyplaceholdersprite,
    damage: id+1,
    count: 100,
    squadPercentHealthy:100-1.1*id*10
}))

export default function Idle() {
  return (
    <div className="flex">
        <UnitList units={fakeSoldierData} unitSubComponentType={unitSubComponent.SELECTBUTTON}/>
        <UnitList units={fakeEnemyData} unitSubComponentType={unitSubComponent.ENEMY}/>
    </div>
  );
}
