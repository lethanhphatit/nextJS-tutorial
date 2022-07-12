import Link from "next/link";
import useSWR from "swr";
import { FC } from "react";

interface IShip {
  ship_id: string;
  ship_name: string;
  image: string;
}

const fetcher = (): Promise<IShip[]> =>
  fetch("https://api.spacexdata.com/v3/ships").then((res) => res.json());
const Ships: FC = () => {
  const { data } = useSWR<IShip[]>("ships", fetcher);
  //   console.log(data);
  return (
    <div>
      <h1>Ships Page</h1>
      {data ? (
        <ul>
          {data.map((ship) => (
            <li key={ship.ship_id}>
              <Link href={`/ships/${ship.ship_id}`}>
                <a>{ship.ship_name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Ships;
