import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar"; // Assuming this is part of your application

const services = [
  { id: 1, name: 'Repairs', price: '$100' },
  { id: 2, name: 'Fuel Oil', price: '$50' },
  { id: 3, name: 'Maintenance', price: '$75' },
  { id: 4, name: 'Cleaning', price: '$30' }
];

function ServiceSelector() {
  const [selectedService, setSelectedService] = useState(null);

  const handleChange = (event) => {
    const serviceId = parseInt(event.target.value, 10);
    const service = services.find(s => s.id === serviceId);
    setSelectedService(service);
  };

  return (
    <div className="text-center">
      <h2>Select a Service</h2>
      <label htmlFor="service-select" className="form-label">Choose a service:</label>
      <select id="service-select" className="form-select" onChange={handleChange}>
        <option value="">--Select a Service--</option>
        {services.map(service => (
          <option key={service.id} value={service.id}>
            {service.name} - {service.price}
          </option>
        ))}
      </select>
      {selectedService && (
        <div className="mt-3">
          <h3>Selected Service</h3>
          <p>{selectedService.name}</p>
          <p>Price: {selectedService.price}</p>
        </div>
      )}
    </div>
  );
}

function Request() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <Navbar />
      <div className="w-50 mt-4">
        <ServiceSelector />
      </div>
    </div>
  );
}

export default Request;
