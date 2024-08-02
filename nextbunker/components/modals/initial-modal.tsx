"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Input} from"@/components/ui/input"
import {Button} from"@/components/ui/button"


const formSchema = z.object({
  name: z.string().min(1,{
    message:"название бункера обязательно"
  } )
})



export const InitialModal = () => {
const [isMounted, setIsMounted] = useState(false)

const router = useRouter()

useEffect(() => {
  setIsMounted(true)
})

const form = useForm({
  resolver: zodResolver (formSchema),
  defaultValues:{
    name: "",
  }
})

const isLoading = form.formState.isSubmitting;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {  
  await axios.post("/api/bunker",values)

form.reset();
router.refresh();
window.location.reload()
  } catch (error) {
    console.log(error)
  } 
}

if (!isMounted) {return null}

    return(
        <Dialog open>
        <DialogContent className="bg-black text-white p-1 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle>Создания бункера(лобби)</DialogTitle>
            <DialogDescription>
           постройте бункер или найдите другой (создайте лобби или найдите другое)
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя бункера</FormLabel>
              <FormControl>
                <Input className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0" disabled={isLoading}  placeholder="введите название бункера" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">создать</Button>
      </form>
    </Form>
    <DialogHeader className="pt-8 px-6">
            <DialogTitle>Выбрать бункер</DialogTitle>
            <Button disabled={isLoading} type="submit">Выбрать</Button>
          </DialogHeader>




        </DialogContent>
      </Dialog>
       
    )
}




