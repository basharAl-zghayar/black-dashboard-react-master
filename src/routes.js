
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Companies from "views/companies/companies.js";
import Courses from "views/courses/courses";
import Volunteers from "views/volunteers/index";
import Trainers from "views/trainer/index";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/companies",
    name: "Companies",
    rtlName: "",
    icon: "tim-icons icon-bank",
    component: Companies,
    layout: "/admin",
  },
  {
    path: "/courses",
    name: "Courses",
    rtlName: "",
    icon: "tim-icons icon-single-copy-04",
    component: Courses,
    layout: "/admin",
  },
  {
    path: "/volunteers",
    name: "Volunteers",
    rtlName: "",
    icon: "tim-icons icon-single-copy-04",
    component: Volunteers,
    layout: "/admin",
  },
  {
    path: "/trainers",
    name: "Trainers",
    rtlName: "",
    icon: "tim-icons icon-single-copy-04",
    component: Trainers,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
