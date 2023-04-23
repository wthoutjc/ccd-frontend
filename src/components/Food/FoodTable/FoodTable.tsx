"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Checkbox, TableCell, Typography } from "@mui/material";

// Components
import { TableToolbar } from "@/components";

// Interfaces
import { ITable } from "@/interfaces";

// Image
import Image from "next/image";
import { isWhiteSpaceLike } from "typescript";

const FoodTable = ({ title, columns, rows, context }: ITable) => {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows?.map((n) => n[0].toString());
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (index: string) => selected.indexOf(index) !== -1;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {selected && (
        <TableToolbar
          title={title}
          numSelected={selected?.length}
          selected={selected[0]}
          context={context}
        />
      )}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#e67e22",
              color: "white",
              textAlign: "left",
              fontWeight: "600",
              position: "sticky",
              top: "45px",
              zIndex: 100,
            }}
          >
            {context.buy && (
              <TableCell
                padding="checkbox"
                size={"medium"}
                sx={{
                  borderBottom: "none",
                }}
              >
                <Checkbox
                  color="primary"
                  size={"medium"}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
            )}
            {columns?.map((column, index) => {
              return (
                <td
                  key={index}
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {column}
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {Array.isArray(rows) && rows.length > 0 ? (
            rows.map((row, index) => {
              const isItemSelected = isSelected(String(row[0]));

              return (
                <tr
                  key={index}
                  onClick={(event) => {
                    if (context.buy) handleClick(event, String(row[0]));
                  }}
                  onDoubleClick={(event) => {
                    if (context.buy.enabled) {
                      handleClick(event, String(row[0]));
                      return router.push(`xd/${String(row[0])}`);
                    }
                    return;
                  }}
                  tabIndex={-1}
                  style={{
                    backgroundColor: isItemSelected ? "#ffbe76" : "inherit",
                  }}
                >
                  {context.buy && (
                    <TableCell
                      padding="checkbox"
                      sx={{
                        borderBottom: "1px solid #e0e0e0",
                      }}
                      size={"medium"}
                    >
                      <Checkbox
                        color="primary"
                        size={"medium"}
                        checked={isItemSelected}
                      />
                    </TableCell>
                  )}

                  {row?.map((dataRow, index) => {
                    return (
                      <td
                        key={index}
                        style={{
                          fontSize: "1rem",
                          borderBottom: "1px solid #2c3e50",
                        }}
                      >
                        {index === 3 ? (
                          <Image
                            key={index}
                            src={dataRow}
                            width={100}
                            alt={"CapitalSabor-productos"}
                          />
                        ) : (
                          dataRow || "No registra"
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <TableCell
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="body2">
                  No hay datos para mostrar
                </Typography>
              </TableCell>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
