"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
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
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavigationServer } from "../navigation/navigation-server";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required",
  }),
});

export const InitialModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [bunkers, setBunkers] = useState([]);
  const [loadingBunkers, setLoadingBunkers] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      await axios.post("/api/bunker", values);
      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchBunkers = async () => {
  //   setLoadingBunkers(true)
  //   try {
  //     const saveResponce = await axios.get("/api/bunker");
  //     setBunkers(saveResponce.data);
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     setLoadingBunkers(false)
  //   }
  // };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="bg-black text-white p-1 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle>Создания бункера(лобби)</DialogTitle>
          <DialogDescription>
            постройте бункер или найдите другой (создайте лобби или найдите
            другое)
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
                    <Input
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      disabled={isLoading}
                      placeholder="введите название бункера"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading}>создать</Button>
            </DialogFooter>
          </form>
        </Form>
        <DialogHeader className="pt-8 px-6">
          <DialogTitle>Выбрать бункер</DialogTitle>
          <Button type="submit">
            {/* {loadingBunkers?"загрузка":"показать сервера"} */}
          </Button>
          <NavigationServer />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
