import { GetServerSideProps } from "next";
import { FC } from "react";

interface IProps {
  ship: {
    ship_id: string;
    ship_name: string;
    type: string;
    home_port: string;
    year_built: number;
    image: string;
    last_update: string;
  };
}

const Ship: FC<IProps> = ({ ship }) => {
  return (
    <div>
      <h1>{ship.ship_name}</h1>
      <h2>{ship.home_port}</h2>
      <img src={ship.image} alt={ship.ship_name} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { ship_id } = query as { ship_id: string };
  const res = await fetch(`https://api.spacexdata.com/v3/ships/${ship_id}`);
  const data = await res.json();
  return { props: { ship: data } };
};

export default Ship;
