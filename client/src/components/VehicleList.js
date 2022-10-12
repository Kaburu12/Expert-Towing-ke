import VehicleCard from "./VehicleCard";

function VehicleList({ vehicles,onUpdateVehicle}) {
  return (
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
  );
}

export default VehicleList;