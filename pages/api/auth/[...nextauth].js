import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb"
export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
 
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    // ...add more providers here
  ],
  pages:{
      signIn:"/signin"
  },
  session: {
    strategy:"jwt"
  },
 secret:process.env. JWT_SECRET,
 
}

export default NextAuth(authOptions)