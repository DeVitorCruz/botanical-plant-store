import { SubMenuItem } from "./sub-menu-item";

export interface MenuItem {
    label: string;
    route?: string;
    submenu?: SubMenuItem[];
    hasLogo?: boolean;
}
