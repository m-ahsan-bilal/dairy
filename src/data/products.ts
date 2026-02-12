export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isBestSeller?: boolean;
    isTrending?: boolean;
}

export const products: Product[] = [
    {
        id: "barfi",
        name: "Barfi",
        price: 2000,
        image: "/images/products/barfi.png",
        category: "Dairy",
        isBestSeller: true,
        isTrending: true,
    },
    {
        id: "butter",
        name: "Butter",
        price: 2800,
        image: "/images/products/cream.png",
        category: "Dairy",
        isBestSeller: true,
    },
    {
        id: "desi-ghee",
        name: "Desi Ghee",
        price: 4000,
        image: "/images/products/ghee.png",
        category: "Desi Ghee",
        isBestSeller: true,
    },
    {
        id: "fresh-cream",
        name: "Fresh Cream",
        price: 1500,
        image: "/images/products/cream.png",
        category: "Fresh Cream",
        isBestSeller: true,
    },
    {
        id: "fresh-kheer",
        name: "Fresh Kheer",
        price: 1000,
        image: "/images/products/halwa.png",
        category: "Sweets",
        isTrending: true,
    },
    {
        id: "fresh-khoya",
        name: "Fresh Khoya",
        price: 2000,
        image: "/images/products/khoya.png",
        category: "Fresh Khoya",
        isTrending: true,
    },
    {
        id: "fresh-lassi",
        name: "Fresh Lassi",
        price: 200,
        image: "/images/products/lassi.png",
        category: "Fresh Lassi",
        isTrending: true,
    },
];
