"use client"
import { Copyright } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {motion} from "motion/react"
const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full flex justify-between border items-center mx-auto p-5"
        >
            <div className="flex flex-col w-1/2 gap-2">
                <h1 className="text-2xl">Inventory Ledger</h1>
                <p className="">
                    Built by {" "}
                    <Link
                        className="underline decoration-red-400 decoration-wavy underline-offset-2"
                        href="https://abhishekavati.xyz" 
                        target="_blank"
                    >
                        Abhishek
                    </Link>
                </p>
            </div>
            <p className="flex gap-2 items-center"> Copyright <Copyright size={18} /> 2025 Inventory Ledger. All Rights Reserved.</p>
        </motion.div>
    )
}

export default Footer