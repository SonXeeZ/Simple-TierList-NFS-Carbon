import CarCard from "./CarCard"

const TierRow = ({label, cars, onDrop, onDragStart}) => {
  return (
    <div className="tier-row" 
      onDragOver={(e) => e.preventDefault()} 
      onDrop={() => onDrop(label)}
    >
        <div className="tier-label">
        {label}
        </div>

        <div className="tier-content"
            onDragOver={(e) => e.preventDefault()}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onDragStart={onDragStart} />
          ))}
        </div>
    </div>
  )
}

export default TierRow