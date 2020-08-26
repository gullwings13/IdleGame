import React from 'react';

export default function HealthBar({squadPercentHealthy, leftToRight}) {
  return (
    <div className={`flex w-8/12 h-2 m-1 bg-red-600 ${leftToRight?'flex-row-reverse':''}`}>
      <div style={{ width: squadPercentHealthy + "%" }}>
        <div className="w-full h-2 bg-green-400">
        </div>
      </div>
    </div>
  );
}
