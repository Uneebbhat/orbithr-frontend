import { Item } from "../types/types";
import { FilterFn } from "@tanstack/react-table";

export const multiColumnFilterFn: FilterFn<Item> = (row, filterValue) => {
  const searchableRowContent =
    `${row.original.fullName} ${row.original.email}`.toLowerCase();
  const searchTerm = (filterValue ?? "").toLowerCase();
  return searchableRowContent.includes(searchTerm);
};

export const statusFilterFn: FilterFn<Item> = (
  row,
  columnId,
  filterValue: string[]
) => {
  if (!filterValue?.length) return true;
  const status = row.getValue(columnId) as string;
  return filterValue.includes(status);
};
