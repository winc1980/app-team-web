import { ParsedTechType } from "@/types/Project";

export const parseTech = (tech: string): ParsedTechType[] => {
  return JSON.parse(tech);
};
