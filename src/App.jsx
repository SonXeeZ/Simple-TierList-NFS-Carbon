import './App.css'
import TierRow from './TierRow'
import CarPool from './CarPool'
import cars from './initialCars'
import { useState } from 'react'
import Header from './Header'

const App = () => {
  const [poolCars, setPoolCars] = useState(cars);
  const [tiers, setTiers] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    D: []
  });
  const [draggedCar, setDraggedCar] = useState(null);

  function handleDragStart(car){
    setDraggedCar(car);
  }

  function handleDrop(tierLabel){
  if (!draggedCar) return;
  
  const isInPool = poolCars.some(c => c.id === draggedCar.id);
  
  if (isInPool) {
    setPoolCars(poolCars.filter(c => c.id !== draggedCar.id));
    // ✅ Funkcionális state frissítés
    setTiers(prevTiers => ({
      ...prevTiers,
      [tierLabel]: [...prevTiers[tierLabel], draggedCar]
    }));
  } else {
    // ✅ Funkcionális state frissítés - egy lépésben
    setTiers(prevTiers => {
      const sourceTier = Object.keys(prevTiers).find(key => 
        prevTiers[key].some(c => c.id === draggedCar.id)
      );

      if(sourceTier === tierLabel) return prevTiers; // ugyanaz, ne csinálj semmit
      
      if (sourceTier) {
        return {
          ...prevTiers,
          [sourceTier]: prevTiers[sourceTier].filter(c => c.id !== draggedCar.id),
          [tierLabel]: [...prevTiers[tierLabel], draggedCar]
        };
      }
      
      return prevTiers; // ha nincs sourceTier, ne változtass semmit
    });
  }
  
  setDraggedCar(null);
  }


  return (
    <div className='app'>
      <Header />
      <div className='tiers'>
        <TierRow label="S" cars={tiers.S} onDrop={handleDrop} onDragStart={handleDragStart}/>
        <TierRow label="A" cars={tiers.A} onDrop={handleDrop} onDragStart={handleDragStart}/>
        <TierRow label="B" cars={tiers.B} onDrop={handleDrop} onDragStart={handleDragStart}/>
        <TierRow label="C" cars={tiers.C} onDrop={handleDrop} onDragStart={handleDragStart}/>
        <TierRow label="D" cars={tiers.D} onDrop={handleDrop} onDragStart={handleDragStart}/>
      </div>

      <div>
        <CarPool cars={poolCars} onDragStart={handleDragStart}/>
      </div>
    </div>
  )
}

export default App
