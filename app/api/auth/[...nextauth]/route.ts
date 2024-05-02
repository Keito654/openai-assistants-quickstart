import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "keito654's site",
      credentials: {
        id: {
          label: 'Id',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const matched = credentials?.id === process.env.ID && credentials?.password === process.env.PASSWORD;

        if(matched) {
          return {
            id: "745hhf"
          };
        } else {
          return null;
        }
      },
    })
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
