import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & NotificationSliceType,[],[],FavoritesSliceType>   = (set,get,api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        //  console.log(get().favorites) la forma de acceder a un state del slice
        if (get().favoriteExists(recipe.idDrink)) {
            
            set((state)=>({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Se eliminó de favoritos',
                error: false
            })
        } else {
            // set({
            //     favorites:[...get().favorites,recipe] una forma de hacerlo par aobtener el state anterior y añádirlo
            // })

            set((state)=>({
                favorites: [...state.favorites,recipe]
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Se agregó a favoritos',
                error: false
            })

        }
        localStorage.setItem('favorites',JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }

})