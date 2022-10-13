import VehicleCard from "./VehicleCard";

function VehicleList({ vehicles,onUpdateVehicle}) {
  return (
    <div className="cards-container">
         <ul className="cards">
      {vehicles.map((vehicle) => {
        return (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onUpdateVehicle={onUpdateVehicle}
          />
        );
      })}
    </ul>
    </div>
 
  );
}

export default VehicleList;