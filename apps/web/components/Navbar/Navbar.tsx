"use client";
import { Button } from '@workspace/ui/components/button'
import React from 'react'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import {motion} from "motion/react"

const Navbar = () => {
    return (
        <motion.div
            className="w-full fixed flex border justify-between items-center mx-auto p-5 rounded-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h1 className="text-2xl">Inventory Ledger</h1>
            <div className="flex gap-4 justify-center items-center">
                <Button>Sign In</Button>
                <ThemeButton />
            </div>
        </motion.div>        
    )
}

export default Navbar