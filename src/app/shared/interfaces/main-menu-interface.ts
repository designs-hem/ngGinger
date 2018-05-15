export interface MainMenuInterface {
    name: string;
    restMenuId: string;
}

export interface RestMenuItem {
    isVeg: boolean;
    menuItemName: string;
    price: number;
}
export interface MainMenuItemInterface {
    restMenuItems?: [RestMenuItem];
    restMenuId: string;
}
