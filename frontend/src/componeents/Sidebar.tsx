import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import PieChartIcon from "@mui/icons-material/PieChart";
import GridViewIcon from "@mui/icons-material/GridView";

import logo from "./../assets/logo.png";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

const Sidebar = () => {
  const icons = [
    { icon: <GridViewIcon />, active: true },
    { icon: <PieChartIcon />, active: false },
    { icon: <DescriptionIcon />, active: false },
    { icon: <PersonIcon />, active: false },
    { icon: <InventoryIcon />, active: false },
  ];

  return (
    <div className="flex flex-row md:flex-col items-center p-3 min-h-full">
      <div className="my-4 w-11 h-11">
        <img src={logo} alt="Logo" />
      </div>

      <List className="flex flex-row md:flex-col">
        {icons.map(({ icon, active }, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <ListItemButton sx={{ justifyContent: "end" }}>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  bgcolor: active ? "#003FAD" : "transparent",
                  borderRadius: active ? "50px" : "none",
                  padding: active ? "0.5rem" : "0",
                  transition: "all 0.3s ease",
                  color: active ? "white" : "black",
                }}
              >
                {icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
