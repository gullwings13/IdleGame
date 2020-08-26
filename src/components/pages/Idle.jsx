import React from 'react';
import UnitList, { unitSubComponent } from '../shared/UnitList';
import soldierplaceholdersprite from '../../sprites/soldierplaceholder.png'
import enemyplaceholdersprite from '../../sprites/enemyplaceholder.png'

let fakeSoldierData = Array.from(Array(10).keys()).map(id=>(
  {
    name:"soldier"+(id+1),
    sprite: soldierplaceholdersprite,
    damage: id+1,
    owned: 100,
    cost: (id+1)*10,
}))

let fakeEnemyData = Array.from(Array(10).keys()).map(id=>(
  {
    name:"enemy"+(id+1),
    sprite: enemyplaceholdersprite,
    damage: id+1,
    owned: 100
}))

export default function Idle() {
  return (
    <div className="flex">
        <UnitList units={fakeSoldierData} subComponentType={unitSubComponent.BUYBUTTON}/>
        <UnitList units={fakeEnemyData} subComponentType={unitSubComponent.ENEMY}/>
    </div>
  );
}
