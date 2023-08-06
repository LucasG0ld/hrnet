import React from "react";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";
import "./table.css"

// Ce composant représente une table de données réutilisable et personnalisable utilisant la bibliothèque "react-table".

// Props :
// - data : Les données à afficher dans la table, qui doivent être un tableau d'objets avec des clés correspondant aux noms des colonnes.

// Fonctionnement :
// - Les colonnes de la table sont définies dans la constante "columns", spécifiant les en-têtes et les accesseurs pour chaque colonne.
// - Le composant "useTable" de "react-table" est utilisé pour configurer la table en fonction des colonnes et des données.
// - La recherche, le tri et la pagination sont activés via les hooks "useGlobalFilter", "useSortBy" et "usePagination".
// - Les utilisateurs peuvent rechercher des données en utilisant un champ de recherche.
// - Les utilisateurs peuvent trier les colonnes en cliquant sur les en-têtes de colonnes.
// - Les utilisateurs peuvent naviguer entre les pages de la table en utilisant les boutons "Previous" et "Next".
// - Ils peuvent également sélectionner le nombre d'éléments à afficher par page en utilisant un sélecteur déroulant.

function Table({ data }) {
  const columns = React.useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Start Date", accessor: "startDate" },
      { Header: "Department", accessor: "department" },
      { Header: "Date of Birth", accessor: "dateOfBirth" },
      { Header: "Street", accessor: "street" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip Code", accessor: "zipCode" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageSize } = state;

  return (
    <div className="hnt-table-container">
      <div className="hnt-table-top">
        <div>
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table {...getTableProps()} className="table hnt-table">
        <thead className="hnt-table-title">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination hnt-table-pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;