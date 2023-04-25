"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Icons
import LoginIcon from "@mui/icons-material/Login";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import QuizIcon from "@mui/icons-material/Quiz";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const ListNoAuth = () => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {[
        {
          name: "Iniciar sesión",
          icon: <LoginIcon />,
        },
        {
          name: "Restaurantes",
          icon: <RestaurantIcon />,
        },
        {
          name: "Promociones",
          icon: <LocalOfferIcon />,
        },
        {
          name: "FAQ",
          icon: <QuizIcon />,
        },
        {
          name: "Políticas de privacidad",
          icon: <AdminPanelSettingsIcon />,
        },
        {
          name: "Soporte",
          icon: <SupportAgentIcon />,
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

export default ListNoAuth;
