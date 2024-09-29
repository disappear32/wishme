interface IWish {
    name: string;
    description?: string;
    price?: string;
    status: string;
    isPinned: boolean;
    pinnedUser?: string;
    url?: string;
}

interface IWishList {
    name: string;
    date?: string;
    description?: string;
    list: IWish[];
}