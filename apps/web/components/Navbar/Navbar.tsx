"use client";
import { Button } from '@workspace/ui/components/button'
import React from 'react'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import {motion} from "motion/react"
import { NotebookPenIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router = useRouter()
    return (
        <motion.div
            className="w-full fixed dark:bg-black bg-white flex border justify-between items-center mx-auto p-5 rounded-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => router.push("/")}>
                <NotebookPenIcon size={26} />
                <h1 className="text-2xl">Inventory Ledger</h1>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <Button onClick={()=> router.push("/api/auth/signin")}>Sign In</Button>
                <ThemeButton />
            </div>
        </motion.div>        
    )
}

export default Navbar