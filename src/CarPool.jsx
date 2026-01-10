import CarCard from "./CarCard"

const CarPool = ({cars, onDragStart}) => {
  return (
    <div className="car-pool">
        <h3>Cars</h3>

        <div className="car-list">
        {cars.map((car) => (
            <CarCard 
                key={car.id}
                car={car}
                image={car.image}
                onDragStart={onDragStart}
            />
        ))}
        </div>
    </div>
  )
}

export default CarPool