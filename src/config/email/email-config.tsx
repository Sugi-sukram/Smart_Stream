// Import statements

import { MdMailOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { PiWarningBold } from "react-icons/pi";
import { RiChatSettingsLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import NotCompletedScreen from "../../components/common-component/not-completed-screen";
import InboxComponent from "../../components/sub-component/mail-component/Inbox-component";

// Interfaces
export interface mailNavItem {
  title: string;
  link: string;
  count: number;
  icon: any;
  component: React.FC; 
}

export interface mailNavlistProps {
  items: mailNavItem[];
}

// mail navigation list
export const mailNavlist: mailNavlistProps = {
  items: [
    { title: "Inbox", link: "/inbox", icon: MdMailOutline, count: 785469 ,component:InboxComponent},
    { title: "Starred", link: "/star", icon: FaRegStar, count: 56248,component:NotCompletedScreen },
    { title: "Sent", link: "/sent", icon: RiSendPlaneLine, count: 56  ,component:NotCompletedScreen},
    { title: "Draft", link: "/draft", icon: BiPencil, count: 99  ,component:NotCompletedScreen},
    { title: "Spam", link: "/spam", icon: PiWarningBold, count: 66325 ,component:NotCompletedScreen },
    { title: "Important", link: "/important", icon: RiChatSettingsLine, count:8484 ,component:NotCompletedScreen},
    { title: "Bin", link: "/bin", icon: RiDeleteBin6Line, count: 4567  ,component:NotCompletedScreen},
  ],
};
