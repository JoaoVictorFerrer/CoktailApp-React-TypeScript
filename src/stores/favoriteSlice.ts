import { StateCreator } from 'zustand'
import { Recipe } from '../types'

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id : Recipe['idDrink']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set,get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        //  console.log(get().favorites) la forma de acceder a un state del slice
        if (get().favoriteExists(recipe.idDrink)) {
            
            set((state)=>({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            // set({
            //     favorites:[...get().favorites,recipe] una forma de hacerlo par aobtener el state anterior y añádirlo
            // })

            set((state)=>({
                favorites: [...state.favorites,recipe]
            }))

        }
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})