import { z } from "zod"

export const formSchema = z.object({
    email: z.string().email({  
        message: "email must be at least 2 characters.",
    }),
    

    message: z.string().min(5, {
        message: "message must be at least 2 characters.",
      }).max(2000,{ message: "stop riting in 2000!!!."}),

  })

  export type ContactFormInput = z.infer<typeof formSchema>