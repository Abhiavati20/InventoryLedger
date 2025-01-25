import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                fullName: { label: "Full Name", type: "text", placeholder: "Enter Your Full Name" },
                password: {label: "Password", type:"password", placeholder: "Enter Your Password"}
            },
            async authorize(credentials, req) {
                return null
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "s3cr3t",
    // pages: {
    //     signIn:"/signin"
    // }
})

export {handler as GET, handler as POST}