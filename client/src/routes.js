import Dashboard from "layouts/dashboard";
import Gallery from "layouts/gallery";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollectionsIcon from "@mui/icons-material/Collections";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Gallery",
    key: "gallery",
    icon: <CollectionsIcon />,
    route: "/gallery",
    component: <Gallery />,
  },
];

export default routes;
