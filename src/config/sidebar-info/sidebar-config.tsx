// Import statements
import { ReactComponent as CalendarIcon } from "../../assets/svg-icon/sidebar/Calender.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg-icon/sidebar/Contact.svg";
import { ReactComponent as DashboardIcon } from "../../assets/svg-icon/sidebar/Dashboard.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/svg-icon/sidebar/Favorites.svg";
import { ReactComponent as FileManagerIcon } from "../../assets/svg-icon/sidebar/FileManager.svg";
import { ReactComponent as InboxIcon } from "../../assets/svg-icon/sidebar/Inbox.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/svg-icon/sidebar/Invoice.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg-icon/sidebar/Logout.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg-icon/sidebar/menu.svg";
import { ReactComponent as OrderListsIcon } from "../../assets/svg-icon/sidebar/OrderLists.svg";
import { ReactComponent as ProductStockIcon } from "../../assets/svg-icon/sidebar/ProductStock.svg";
import { ReactComponent as ProductsIcon } from "../../assets/svg-icon/sidebar/Products.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg-icon/sidebar/settings.svg";
import { ReactComponent as TodoIcon } from "../../assets/svg-icon/sidebar/TO-Do.svg";
import { ReactComponent as ChartsIcon } from "../../assets/svg-icon/sidebar/charts.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg-icon/sidebar/profile.svg";



import { ReactComponent as EnableCalendarIcon } from "../../assets/svg-icon/sidebar/Enable-Calender.svg";
import { ReactComponent as EnableContactIcon } from "../../assets/svg-icon/sidebar/Enable-Contact.svg";
import { ReactComponent as EnableDashboardIcon } from "../../assets/svg-icon/sidebar/Enable-Dashboard.svg";
import { ReactComponent as EnableFavoritesIcon } from "../../assets/svg-icon/sidebar/Enable-Favorites.svg";
import { ReactComponent as EnableFileManagerIcon } from "../../assets/svg-icon/sidebar/Enable-FileManager.svg";
import { ReactComponent as EnableInboxIcon } from "../../assets/svg-icon/sidebar/Enable-Inbox.svg";
import { ReactComponent as EnableInvoiceIcon } from "../../assets/svg-icon/sidebar/Enable-Invoice.svg";
import { ReactComponent as EnableLogoutIcon } from "../../assets/svg-icon/sidebar/Enable-Logout.svg";
import { ReactComponent as EnableMenuIcon } from "../../assets/svg-icon/sidebar/Enable-menu.svg";
import { ReactComponent as EnableOrderListsIcon } from "../../assets/svg-icon/sidebar/Enable-OrderLists.svg";
import { ReactComponent as EnableProductStockIcon } from "../../assets/svg-icon/sidebar/Enable-ProductStock.svg";
import { ReactComponent as EnableProductsIcon } from "../../assets/svg-icon/sidebar/Enable-Products.svg";
import { ReactComponent as EnableSettingsIcon } from "../../assets/svg-icon/sidebar/Enable-settings.svg";
import { ReactComponent as EnableTodoIcon } from "../../assets/svg-icon/sidebar/Enable-TO-Do.svg";
import { ReactComponent as EnableCharts } from "../../assets/svg-icon/sidebar/Enable-charts.svg";
import { ReactComponent as EnableProfile } from "../../assets/svg-icon/sidebar/Enable-profile.svg";

// Interfaces
export interface SidebarNavItem {
    title: string;
    link: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    enableIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface SidebarNavlistProps {
    items: SidebarNavItem[];
}

// Sidebar navigation list
export const sidebarNavlist: SidebarNavlistProps = {
    items: [
        { title: "Menu", link: "/menu", icon: MenuIcon , enableIcon: EnableMenuIcon},
        { title: "Dashboard", link: "/dashboard", icon: DashboardIcon, enableIcon: EnableDashboardIcon},
        { title: "Products", link: "/products", icon: ProductsIcon , enableIcon: EnableProductsIcon},
        { title: "Favorites", link: "/favorites", icon: FavoritesIcon , enableIcon: EnableFavoritesIcon},
        { title: "Mail", link: "/mail", icon: InboxIcon , enableIcon: EnableInboxIcon},
        { title: "OrderLists", link: "/order-lists", icon: OrderListsIcon , enableIcon: EnableOrderListsIcon},
        { title: "ProductStock", link: "/product-stock", icon: ProductStockIcon , enableIcon: EnableProductStockIcon},
        { title: "FileManager", link: "/file-manager", icon: FileManagerIcon , enableIcon: EnableFileManagerIcon},
        { title: "Calendar", link: "/calendar", icon: CalendarIcon , enableIcon: EnableCalendarIcon},
        { title: "To-Do", link: "/to-do", icon: TodoIcon , enableIcon: EnableTodoIcon},
        { title: "Contact", link: "/contact", icon: ContactIcon , enableIcon: EnableContactIcon},
        { title: "Invoice", link: "/invoice", icon: InvoiceIcon , enableIcon: EnableInvoiceIcon},
        { title: "Settings", link: "/settings", icon: SettingsIcon , enableIcon: EnableSettingsIcon},
        { title: "Settings", link: "/charts", icon: ChartsIcon , enableIcon: EnableCharts},
        { title: "Settings", link: "/profile", icon: ProfileIcon , enableIcon: EnableProfile},
        { title: "Logout", link: "/logout", icon: LogoutIcon , enableIcon: EnableLogoutIcon},
    ],
};
