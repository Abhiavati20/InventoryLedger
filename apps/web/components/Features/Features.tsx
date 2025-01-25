"use client"
import { TextAnimate } from "@workspace/ui/components/text-animate"
import {motion} from "motion/react"
import { FeatureCard } from "./FeatureCard"
import { BoxesIcon, ChartArea, LucideIndianRupee, LucideReceiptIndianRupee } from "lucide-react"

const FeatureItems = [
    {
        icon: <BoxesIcon size={24} />,
        title: "Inventory Tracking",
        description: "Real-time tracking of stock levels and detailed inventory reports."
    },
    {
        icon: <LucideIndianRupee size={20} />,
        title: "Smart Pricing",
        description: "Dynamic pricing strategies, bulk pricing options, and margin optimization tools."
    },
    {
        icon: <LucideReceiptIndianRupee size={24} />,
        title: "Seamless Billing",
        description: "Generate professional invoices, track payments, and manage multiple payment methods."
    },
    // {
    //     icon: <ChartArea size={24} />,
    //     title: "Analytics",
    //     description: "Real-time Analytics of Sales, Mvp, Inventory and Orders Placed"
    // }
]

const Features = () => {
    return (
        <div
            className="flex flex-col gap-2 w-full items-center justify-center p-5 "
        >
            <TextAnimate duration={1.5} delay={0.5} animation="blurInUp" by="word" className="text-4xl my-8">
                Your All-in-One Solution for Seamless Management
            </TextAnimate>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay:0.5 ,duration:1.5, ease: "easeOut" }}
                className="w-full flex gap-5 justify-center items-center flex-wrap"
            >
                {FeatureItems.map((feature, index) =>
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                )}
            </motion.div>
        </div>
    )
}

export default Features