import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, state => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, loading: false, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);