import {
  I_status,
  I_HeaderLinks,
  I_advantageCards,
  I_transAction,
} from "./../Models/interfaces";

import { AiOutlineStar } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

import { dribblePro, manulife, netflix } from "../assets";
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

export const advantageCards: I_advantageCards[] = [
  {
    name: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
    Icon: AiOutlineStar,
  },
  {
    name: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
    Icon: BsShieldCheck,
  },
  {
    name: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    Icon: IoIosSend,
  },
];

export const transactionData: I_transAction[] = [
  {
    icon: dribblePro,
    name: "Dribbble Pro",
    timeAgo: "15 Days ago",
    value: "-$250,93",
    goodOrBad: "bad",
    imgBg: "red",
  },
  {
    icon: netflix,
    name: "Netflix",
    timeAgo: "4 Days ago",
    value: "-$250,93",
    goodOrBad: "bad",
    imgBg: "white",
  },
  {
    icon: manulife,
    name: "Manulife Cash",
    timeAgo: "4 Days ago",
    value: "-$250,93",
    goodOrBad: "good",
    imgBg: "white",
  },
];
