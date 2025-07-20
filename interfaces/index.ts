import React from "react"

export interface CardProps {
    id: number;
    name: string
    address: Address
    rating: number
    category: string []
    price: number
    offers: Offers
    image: string
    discount?: string

}
export interface ButtonProps {
    label: string
    onClick: () => void
}



export interface Address {
    state: string
    city: string
    country: string
}
export interface Offers {
    bed: string
    shower: string
    occupants: string
}
export interface PropertyProps {
    name: string
    address: Address
    rating: number
    category: string []
    price: number
    offers: Offers
    image: string
    discount?: string
     description?: string;
}

export interface LayoutProps {
    children: React.ReactNode
}
export interface OptionProps {
    image: string
    alt: string
    width: number
    height: number
    className: string
}

export interface PillProps {
    label: string
    bgColor?: string
    textColor?: string
    className?: string
    children?: React.ReactNode
}