import React from 'react';

export default function UnitCard({data, subComponent,enemy}) {
  return (
    <div className={`h-20 flex justify-between p-1 m-1 bg-gray-200 ${enemy?' flex-row-reverse':''}`}>
        <div>
            <div>{data.name}</div>
            {subComponent}
        </div>
        <img src={data.sprite}/>
    </div>
  );
}
