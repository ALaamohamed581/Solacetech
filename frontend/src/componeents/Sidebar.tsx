import DescriptionIcon from "@mui/icons-material/Description";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import logo from "../assets/logo.png";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

const Sidebar = () => {
  const icons = [<DescriptionIcon />, <GridViewIcon />, <PeopleAltIcon />];

  return (
    <div className="flex flex-col items-center p-3 min-h-full">
      {/* Logo */}
      <div className="my-4 w-11 h-11">
        <img src={logo} alt="Logo" />
      </div>

      {/* Icons List */}
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {icons.map((icon, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon sx={{ justifyContent: "center" }}>
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
