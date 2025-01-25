"use client";
import { Button } from '@workspace/ui/components/button'
import { RetroGrid } from '@workspace/ui/components/retro-grid';
import { TextAnimate } from '@workspace/ui/components/text-animate';
import {motion} from "motion/react"
import { useRouter } from 'next/navigation';
const Banner = () => {
    const router = useRouter();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}    
            className="flex flex-col gap-2 w-full items-center justify-center  min-h-svh"
        >
            <h1 className="text-7xl text-center ">Smart Inventory, Smart Business</h1>
            <TextAnimate animation="slideLeft" by="character" className="text-xl italic">Your One-Stop Solution for Inventory, Pricing and Billing.</TextAnimate>
            <div className="flex gap-2">
                <Button onClick={() => router.push("/api/auth/signin")}>Get Started</Button>
                <Button variant="outline">Learn More</Button>
            </div>
            <RetroGrid />
        </motion.div>
    )
}

export default Banner