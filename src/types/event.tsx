// src/types/event.ts

import { LucideIcon } from "lucide-react";

export type Event = {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  room?: "Room 1" | "Room 2" | "Room 3" | "Main Hall";
  mode?: "In Person" | "Remote";
  link?: string;
  icon?: LucideIcon;
};