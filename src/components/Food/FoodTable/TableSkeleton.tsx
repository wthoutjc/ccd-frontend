"use client";
import { CircularProgress, Skeleton } from "@mui/material";

const TableSkeleton = () => {
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
            <td
              style={{
                fontSize: "1rem",
              }}
            >
              <CircularProgress
                size={20}
                sx={{
                  mr: 1,
                }}
              />{" "}
              Cargando datos
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Skeleton variant="rectangular" width={"100%"} height={43} />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton variant="rectangular" width={"100%"} height={43} />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton variant="rectangular" width={"100%"} height={43} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
