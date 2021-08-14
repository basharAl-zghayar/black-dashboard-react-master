
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Companies from "views/companies/companies.js";
import Courses from "views/courses/courses";
import Exhibitions from "views/exhibitions";
import CourseDetails from "views/courses/course-details";
import Volunteers from "views/volunteers/index";
import ItemCosts from "views/item-costs/index";
import Trainers from "views/trainer/index";
import LoginPage from "views/log-in";
import ItemCostDetails from "views/item-costs/item-cost-details";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/companies",
    name: "Companies",
    rtlName: "",
    icon: "tim-icons icon-bank",
    component: Companies,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/item-costs",
    name: "Item Costs",
    rtlName: "",
    icon: "tim-icons icon-coins",
    component: ItemCosts,
    layout: "/admin",
  },


  {
    exact: true,
    path: "/expansive/:code",
    name: "",
    component: ItemCostDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    exact: true,
    path: "/courses",
    name: "Courses",
    rtlName: "",
    icon: "tim-icons icon-single-copy-04",
    component: Courses,
    layout: "/admin",
  },

  {
    exact: true,
    path: "/exhibitions",
    name: "Exhibitions",
    rtlName: "",
    icon: "tim-icons icon-single-copy-04",
    component: Exhibitions,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/course-details/:id",
    name: "",
    component: CourseDetails,
    layout: "/admin",
    hidden: true,
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
  {
    path: "/login",
    name: "",
    component: LoginPage,
    layout: "/user",
  },

];
export default routes;
