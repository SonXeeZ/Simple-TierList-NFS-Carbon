const CarCard = ({car, onDragStart}) => {
  return (
    <div className='car-card' draggable onDragStart={() => onDragStart(car) }>
        <div className="car-image">
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded:',car.name);
            }}
            />
        ) : (
          <span>🚗</span>
        )}
        </div>

        <div className="car-name">
        {car.name}
        </div>
    </div>
  )
}

export default CarCard