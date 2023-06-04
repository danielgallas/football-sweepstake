import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [{ name: "Revenue", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [{ name: "Expenses", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
];

export const UpdatesData = [
  {
    name: "Daniel Gallas",
    noti: "has ordered an apple watch",
    time: "25 seconds ago",
  },
  {
    name: "John Joe",
    noti: "has ordered another apple",
    time: "2 minutes ago",
  },
  {
    name: "Syd Barrett",
    noti: "left Pink Floyd",
    time: "many years ago",
  },
];
