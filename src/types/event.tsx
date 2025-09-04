// src/types/event.ts

import { LucideIcon } from "lucide-react";

export type Event = {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  room?: "LH-18" | "LH-12" | "LH-13" | "Main Hall";
  mode?: "In Person" | "Remote";
  link?: string;
  icon?: LucideIcon;
};