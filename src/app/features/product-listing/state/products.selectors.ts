import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../../models/product";


export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectProductCollection = createSelector(
    selectProducts,
    selectCollectionState,
    (products, collection) => {
      return collection.map((id) => products.find((product) => product.id === Number(id))!);
    }
  );