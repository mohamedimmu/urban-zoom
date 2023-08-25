import { Carprops } from "@/types";

export async function fetchCars(){
  const headers = {
    'X-RapidAPI-Key': 'e408accdc9mshf0b8f620ff00b4fp197c4fjsn4c4b96a006b8',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=swift', {
    headers: headers,
  });

  const result = await response.json();

  return result
}

export const calculateCarRent = ( city_mpg: number, year: number ) => {
  const basePricePerDay = 3000;
  // If the mileage of the car is less, then the rent of the car will be higher
  const mileageFactor = city_mpg >= 30 ? 0.1 : city_mpg >= 20 ? 0.2 : 0.3;

  // If the age of the car is less, then the rent of the car will be higher
  const carAge = new Date().getFullYear() - year;

  const ageFactor = carAge <= 3 ? 0.5 : carAge <= 6 ? 0.3 : 0.1;

  //City MPG stands for City Miles per Gallon
  const mileageRate = basePricePerDay * mileageFactor;
  const ageRate = basePricePerDay * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return Math.round(rentalRatePerDay);
}

export const generateCarImageUrl = (car: Carprops, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getImage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`
}