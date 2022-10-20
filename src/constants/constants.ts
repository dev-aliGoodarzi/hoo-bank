import { I_status, I_HeaderLinks } from "./../Models/interfaces";

export const headerLinks: I_HeaderLinks[] = [
  {
    nameForDisplay: "Home",
    routeToNavigate: "/",
  },
  {
    nameForDisplay: "About Us",
    routeToNavigate: "/about-us",
  },
  {
    nameForDisplay: "Features",
    routeToNavigate: "/features",
  },
  {
    nameForDisplay: "Solution",
    routeToNavigate: "/solution",
  },
];

export const discountPercentage = "20";

export const statusOfCompany: I_status[] = [
  {
    name: "activeUsers",
    value: "3800+",
    hasAfterRow: true,
  },
  {
    name: "trustedCompany",
    value: "230+",
    hasAfterRow: true,
  },
  {
    name: "transaction",
    value: "$230M+",
    hasAfterRow: false,
  },
];
