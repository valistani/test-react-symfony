/* eslint-disable react-hooks/exhaustive-deps */
import Car from "./Car";
import { CarEntity } from "../services/Entity";
import { useEffect, useState } from "react";

export interface CarItemProps {
  cars: CarEntity[];
  refreshCars: Function;
}

export const CarItems = (props: CarItemProps) => {
  const [refreshCarItems, setRefreshCarItems] = useState(false);

  useEffect(() => {
    props.refreshCars(true);
  }, [refreshCarItems]);

  const elements = props.cars.map((car: any, index: number) => {
    return (
      <Car
        id={car.id}
        key={index}
        photo={car.photo}
        mark={car.mark}
        description={car.description}
        createdAt={car.createdAt}
        comments={car.comments}
        owner={car.owner}
        refreshCars={setRefreshCarItems}
      />
    );
  });

  return (
    <>
      <div className="container me-4">{elements}</div>
    </>
  );
};
