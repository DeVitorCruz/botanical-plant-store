import { MenuItem } from "../interfaces/menu-panel/menu-item";

export const MENU_ITEMS: MenuItem[] = [
    {
        label: 'home',
        submenu: [
            { label: 'home 1' },
            { label: 'home 2' },
            { label: 'home 3' }
        ]
    },
    {
        label: 'store',
        submenu: [
            { label: 'Shop Left Sidebar' },
            { label: 'Single Product' }
        ]
    },
    { label: 'about' },
    { label: '', hasLogo: true },
    { 
        label: 'blog',
        submenu: [
            { label: 'Blog Left Sidebar' },
            { label: 'Blog Detail' }
        ]
    },
    { 
        label: 'pages',
        submenu: [
            { label: 'Cart Page' }
        ]
    },
    { label: 'contact' }
];