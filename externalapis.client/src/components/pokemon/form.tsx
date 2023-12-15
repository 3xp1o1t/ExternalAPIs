import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

import { useQuery } from "@tanstack/react-query";
import { DropdownDialog } from "../dropdown-with-dialog";
import { Label } from "../ui/label";

const FormDialog = ({ pokemonName }: { pokemonName: string }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["name", pokemonName],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName).then((res) =>
        res.json(),
      ),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <DropdownDialog
      triggerLabel={"View Pokemon"}
      children={
        <>
          <DialogTitle className="capitalize tracking-wider">
            {data.name}
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-3">
            <Label>Height: {data.height}</Label>
            <Label>Weight: {data.weight}</Label>
            <Label>
              Abilities:
              {data.abilities.map((a: { ability: { name: string } }) => (
                <ul className="pt-2">
                  <li key={a.ability.name} className="ml-6">
                    - {a.ability.name}
                  </li>
                </ul>
              ))}
            </Label>
            <Label>
              Types:{" "}
              {data.types.map((t: { type: { name: string } }) => (
                <ul className="pt-2">
                  <li key={t.type.name} className="ml-6">
                    - {t.type.name}
                  </li>
                </ul>
              ))}
            </Label>
            <Label>
              Stats:{" "}
              {data.stats.map(
                (s: { base_stat: number; stat: { name: string } }) => (
                  <ul className="pt-2">
                    <li key={s.stat.name} className="ml-6">
                      - {s.stat.name}: {s.base_stat}
                    </li>
                  </ul>
                ),
              )}
            </Label>
            <Label>Pokedex numbers: {data.id}</Label>
            <div className="flex items-center justify-between">
              <img src={data.sprites.front_default} className="h-40 w-40" />
              <img src={data.sprites.front_shiny} className="h-40 w-40" />
            </div>
            <div className="flex items-center justify-between">
              <img src={data.sprites.back_default} className="h-40 w-40" />
              <img src={data.sprites.back_shiny} className="h-40 w-40" />
            </div>
          </DialogDescription>
        </>
      }
    />
  );
};
export default FormDialog;
