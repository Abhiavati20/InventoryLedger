"use client";
import { MagicCard } from "@workspace/ui/components/magic-card";
import { useTheme } from "next-themes";

export interface IFeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode
}
export const FeatureCard = ({title,description,icon}:IFeatureCardProps) => {
    const { theme } = useTheme()
    return (
        <MagicCard
            className="w-1/3 mx-2 text-wrap gap-5 cursor-pointer flex-col whitespace-nowrap shadow-2xl p-5"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
            <div className="flex gap-2 items-center font-semibold">
                {icon}
                <h1 className="text-xl">{title}</h1>
            </div>
            <div className="flex gap-2 my-4">
                {description}
            </div>
        </MagicCard>
  )
}
