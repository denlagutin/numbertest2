function calculateTripCost(fuelConsu, distance, priceFuel) {
    const fuelConsu_per_trip = (fuelConsu * distance) / 100;
    const result = fuelConsu_per_trip * priceFuel;
    return result;
  }
  const fuelConsu = parseFloat(prompt("Введите расход топлива на 100 км (в литрах): "));
  const distance = parseFloat(prompt("Введите планируемую дистанцию поездки (в км): "));
  const priceFuel = parseFloat(prompt("Введите цену топлива за литр: "));
  const result = calculateTripCost(fuelConsu, distance, priceFuel);
  console.log("Стоимость поездки составит " + result + " рублей");