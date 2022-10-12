function VehicleCard({ vehicle, onUpdateVehicle}) {
    const { id,name, image, price, is_in_display: isInDisplay } = vehicle;
  

    function handleIsInDisplayClick() {
      fetch(`/vehicles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_in_display: !isInDisplay }),
      })
        .then((r) => r.json())
        .then((updatedVehicle) => {
          onUpdateVehicle(updatedVehicle);
        });
    }
  
    return (
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {isInDisplay ? (
          <button className="primary" onClick={handleIsInDisplayClick}>
            In Display
          </button>
        ) : (
          <button onClick={handleIsInDisplayClick}>Out of Display</button>
        )}
      </li>
    );
  }
  
  export default VehicleCard;
  