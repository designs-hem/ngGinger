export interface MainMenuInterface {
    name: string;
    restMenuId: string;
}

export interface RestMenuItem {
    restMenuItemId: number;
    isVeg: boolean;
    outOfStock: false;
    menuItemName: string;
    price: number;
}
export interface MainMenuItemInterface {
    restMenuItems?: [RestMenuItem];
    restMenuId: string;
}

export interface CheckOutMenuItem {
    menuItemId: number;
    menuName: string;
    outOfStock: false;
    unitPrice: number;
}


