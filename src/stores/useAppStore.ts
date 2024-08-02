
import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { FavoritesSliceType,createFavoritesSlice } from "./favoriteSlice"; 
import { devtools } from "zustand/middleware";
import { createNotificationSlice ,NotificationSliceType } from "./notificationSlice";


export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType >()(devtools((...a) => ({ // lo que estoy haceindo es pasar todos los argumentos  a createRecipiesSlice por copia
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})))