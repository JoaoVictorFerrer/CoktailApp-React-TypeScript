
import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { FavoritesSliceType,createFavoritesSlice } from "./favoriteSlice"; 
import { devtools } from "zustand/middleware";


export const useAppStore = create<RecipeSliceType & FavoritesSliceType >()(devtools((...a) => ({ // lo que estoy haceindo es pasar todos los argumentos  a createRecipiesSlice por copia
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
})))