
import { NextApiResponse } from "next";

import {Character, Profile, Bunker} from "@prisma/client";

export type ServerWithMembersWithProfiles = Bunker & {
    members: (Character & {profile: Profile})[];
}