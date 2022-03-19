import { useEffect, useState } from "react";
import { getCars } from "../services/CarService";
import { CarEntity } from "../services/Entity";
import { CarItems } from "./CartItems";

export const Home = () => {
  const [cars, setCars] = useState<CarEntity[]>([]);
  const [loadCars, setLoadCars] = useState(false);

  useEffect(() => {
    getCars().then((response) => {
      const { data } = response.data;
      return setCars(data);
    });
  }, []);

  useEffect(() => {
    getCars().then((response) => {
      const { data } = response.data;
      return setCars(data);
    });
  }, [loadCars]);

  return (
    <>
      <CarItems cars={cars} refreshCars={setLoadCars} />
    </>
  );
};
