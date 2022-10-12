import { useEffect, useState } from "react";
import VehicleList from "./VehicleList";
import Search from "./Search";

function VehiclePage() {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/vehicles")
      .then((r) => r.json())
      .then((vehiclesArray) => {
        setVehicles(vehiclesArray);
      });
  }, []);



  function handleUpdateVehicle(updatedVehicle) {
    const updatedVehiclesArray = vehicles.map((vehicle) => {
      return vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle;
    });
    setVehicles(updatedVehiclesArray);
  }

  const displayedVehicles=vehicles.filter((vehicle) => {
    return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <VehicleList
        vehicles={displayedVehicles}
        onUpdateVehicle={handleUpdateVehicle}
      />
    </main>
  );
}

export default VehiclePage;
