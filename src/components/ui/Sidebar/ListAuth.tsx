"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Icons
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

interface Props {
  role: "Administrator" | "Restaurant" | "Client" | null;
}

const ListAuth = ({ role }: Props) => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {role === "Client" &&
        [
          {
            name: "Ver perfil",
            icon: <SupervisedUserCircleIcon />,
          },
          {
            name: "Ver historial de pedidos",
            icon: <HistoryIcon />,
          },
          {
            name: "Ver carrito de compras",
            icon: <ShoppingCartIcon />,
          },
        ].map(({ icon, name }, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      {role === "Restaurant" &&
        [
          {
            name: "Ver perfil",
            icon: <SupervisedUserCircleIcon />,
          },
          {
            name: "Ver pedidos recibidos",
            icon: <HistoryIcon />,
          },
          {
            name: "Agregar productos al menú",
            icon: <AddBusinessIcon />,
          },
        ].map(({ icon, name }, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

export default ListAuth;
