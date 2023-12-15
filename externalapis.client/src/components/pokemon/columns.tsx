import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-colum-header";
import FormDialog from "./form";

export type Pokemon = {
  name: string;
  url: string;
};

export const columns: ColumnDef<Pokemon>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const pokemon = row.original;
      return (
        // <DropdownMenu modal={false}>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <WrenchIcon className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(pokemon.name)}
        //     >
        //       Copy name ID
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        <FormDialog pokemonName={pokemon.name} />
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
