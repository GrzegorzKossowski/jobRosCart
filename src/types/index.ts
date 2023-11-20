export type PicturesType = {
    id: number;
    type: number;
    mini: string;
    medium: string;
    small: string;
    large: string;
    alt: string;
    side: string;
};

export type LocalCartProductType = {
    id: number;
    amount: number;
}

export type CartProductType = LocalCartProductType & {
    picture: string;
    name: string;
    caption: string;
    unit: string;
    price: number;
}

export type ProductType = {
    id: number;
    rossnetId: number;
    brand: string;
    caption: string;
    unit: string;
    averageRating: number;
    totalReviews: number;
    eanNumber: string[];
    navigateUrl: string;
    name: string;
    price: number;
    vat: number;
    dimensional: number;
    pricePerUnit: string;
    pictures: PicturesType[];
    hasRichContent: boolean;
    availability: string;
    category: string;
};