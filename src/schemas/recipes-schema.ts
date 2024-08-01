
import { z } from 'zod'

export const CategoriesApiResponseSchemas = z.object({
    drinks: z.array(
        z.object({
            strCategory:z.string()
        })
    )
})

export const SearchFilterSchemas = z.object({
         ingredient: z.string(),
         category:z.string()
})