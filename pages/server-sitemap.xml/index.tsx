import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("https://api.spacexdata.com/v3/ships");
  const ships: any[] = await response.json();

  const fields: ISitemapField[] = ships.map((ship) => ({
    loc: `http://localhost:3000/ships/${ship.ship_id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
