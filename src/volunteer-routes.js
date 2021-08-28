
import Dashboard from "views/Dashboard.js";
import Companies from "views/companies/companies.js";
import Courses from "views/courses/courses";
import Exhibitions from "views/exhibitions";
import Opportunity from "views/opportunities";
import ProjectRace from "views/project-race";
import CourseDetails from "views/courses/course-details";
import ProjectRaceDetails from "views/project-race/project-race-details";
import ExhibitionDetails from "views/exhibitions/exhibitions-details";
import ItemCosts from "views/item-costs/index";
import Trainers from "views/trainer/index";
import LoginPage from "views/log-in";
import RegisterStudent from "views/sign-up";
import ItemCostDetails from "views/item-costs/item-cost-details";
import OpportunityDetails from "views/opportunities/course-details";

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
    name: "Item Cost Details",
    component: ItemCostDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    exact: true,
    path: "/courses",
    name: "Courses",
    rtlName: "",
    icon: "tim-icons icon-book-bookmark",
    component: Courses,
    layout: "/admin",
  },

  {
    exact: true,
    path: "/exhibitions",
    name: "Exhibitions",
    rtlName: "",
    icon: "tim-icons icon-components",
    component: Exhibitions,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/opportunities",
    name: "Opportunities",
    rtlName: "",
    icon: "tim-icons icon-zoom-split",
    component: Opportunity,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/projects-races",
    name: "Project Race",
    rtlName: "",
    icon: "tim-icons icon-bulb-63",
    component: ProjectRace,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/course-details/:id",
    name: "Course Details",
    component: CourseDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    exact: true,
    path: "/project-race-details/:id",
    name: "Course Details",
    component: ProjectRaceDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    exact: true,
    path: "/opportunity-details/:id",
    name: "Opportunity Details",
    component: OpportunityDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    exact: true,
    path: "/exhibition-details/:id",
    name: "Exhibition Details",
    component: ExhibitionDetails,
    layout: "/admin",
    hidden: true,
  },
  {
    path: "/trainers",
    name: "Trainers",
    rtlName: "",
    icon: "tim-icons icon-single-02",
    component: Trainers,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "",
    component: LoginPage,
    layout: "/user",
  },
  {
    path: "/signup",
    name: "",
    component: RegisterStudent,
    layout: "/user",
  },

];

export default routes;
