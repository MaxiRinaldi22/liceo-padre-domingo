import { Horarios } from "@/components/Horarios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horarios",
  description: "Horarios del Liceo Padre Domingo",
}

export default function AlunosPage() {
  return <Horarios />
}
