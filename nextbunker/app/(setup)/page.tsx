import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initital-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  const bunker = await db.bunker.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

if(bunker){
    return redirect(`/bunker/${bunker.id}`)
}

  // return  
  return <div>Привет<InitialModal/> </div>
};

export default SetupPage;
