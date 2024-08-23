"use client"

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const NavigationServer = () => {

    const profile =  currentProfile()

    if(!profile) {
        return redirect('/')
    }



  return (
    <div>
      <h2>Список серверов</h2>
      <div>Сам список</div>
    </div>
  );
};