import { Product } from "./product";

export interface IcartItem{
    product: Product | undefined,
    qty: number
}