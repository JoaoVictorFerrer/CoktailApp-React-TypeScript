
import { z } from 'zod'
import { CategoriesApiResponseSchemas, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchemas } from '../schemas/recipes-schema'


export type Categories = z.infer<typeof CategoriesApiResponseSchemas>
export type SearchFilter = z.infer<typeof SearchFilterSchemas>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>