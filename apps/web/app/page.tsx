"use client";
import Banner from "@/components/Banner/Banner"
import Features from "@/components/Features/Features";
import {ScrollProgress} from "@workspace/ui/components/scroll-progress"
export default function Page() {
    return (
        <div className="w-11/12 mx-auto flex flex-col justify-center">
            <ScrollProgress />
            <Banner />  
            <Features />
        </div>
    )
}
