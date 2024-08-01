
import { z } from 'zod'
import { CategoriesApiResponseSchemas, SearchFilterSchemas } from '../schemas/recipes-schema'


export type Categories = z.infer<typeof CategoriesApiResponseSchemas>
export type SearchFilter = z.infer<typeof SearchFilterSchemas>