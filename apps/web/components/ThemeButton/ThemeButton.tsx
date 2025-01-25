"use client";
import { MoonIcon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

export const ThemeButton = () => {
    const {theme, setTheme} = useTheme()
    return (
        <>
            {theme === "dark" ? <Sun size={20} className="cursor-pointer" onClick={() =>setTheme("light")} /> : <MoonIcon size={20} className="cursor-pointer" onClick={()=>setTheme("dark")} />}
        </>
    )
}
