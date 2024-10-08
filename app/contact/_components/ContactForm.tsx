
    "use client"

import { formSchema,ContactFormInput } from "@/app/schema/formschema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function ContactForm() {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message:""
    },
  })

  const onSubmit = (data:ContactFormInput) =>{
    console.log(data)
  }
  return (
    <Card className="w-[390px]">
      <CardHeader>
      <CardTitle>
        Envoyer moi un Message
      </CardTitle>
      </CardHeader>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
     
<CardContent>
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Message</FormLabel>
      <FormControl>
        <Textarea placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
     </CardContent>

        <CardFooter className="flex justify-end">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Form>
    </Card>
  )
}

