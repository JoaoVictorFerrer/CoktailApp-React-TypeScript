import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"


export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal:boolean,
    fetchCategories: () => void,
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => void,
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({  //? el stateCreator me permite saber desde el store principal que state contiene los slice. y simpre indicado la forma que tendra el slice al store principal con los types
    categories: {
        drinks:[]
    },
    drinks: {
        drinks:[]
    },
    selectedRecipe: {} as Recipe,
    modal:false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {

        const drinks = await getRecipes(filters)
        set({
           drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipesById(id)
        set({
            selectedRecipe,
            modal:true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})

