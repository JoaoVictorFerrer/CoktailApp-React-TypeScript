import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, SearchFilter } from "../types"


export type RecipeSliceType = {
    categories: Categories,
    fetchCategories: () => void,
    searchRecipes: (SearchFilter : SearchFilter) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({  //? el stateCreator me permite saber desde el store principal que state contiene los slice. y simpre indicado la forma que tendra el slice al store principal con los types
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {

     await getRecipes(filters)
        
    }
})

