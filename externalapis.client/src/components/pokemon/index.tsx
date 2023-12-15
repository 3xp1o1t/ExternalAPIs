import http from "@/lib/http";
import { useEffect, useState } from "react";
import { Pokemon, columns } from "./columns";
import { DataTable } from "./data-table";

const PokemonPage = () => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get("/Pokemon");
        setData(response.data["results"]);
        console.log(response.data["results"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default PokemonPage;
