
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
 

export const {handlers, auth: baseAuth} = NextAuth({
providers:[
    GithubProvider({
        clientId : process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    })
]

})