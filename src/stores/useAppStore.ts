
import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";



export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({ // lo que estoy haceindo es pasar todos los argumentos  a createRecipiesSlice por copia
    ...createRecipesSlice(...a)
})))