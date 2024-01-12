export interface PhotoProps {
    src: string;
}

export interface DescriptionProps {
    title: string;
    subtitle: string;
    description: string;
}

export interface ActionButtonProps {
    children: any;
    className?: string;
}


export interface Product {
    description: string;
    image: { href: string };
    name: string;
    showSupport: boolean;
    sku: string
}

export interface ProductCardProps {
    products: Product[];
    index: number;
}