import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
         role: { label: "Role", type: "text" }
      },
      async authorize(credentials) {
        // Simple user check (in real life, check database)
        if (credentials.username === "admin" && credentials.password === "admin") {
          return { id: 1, name: "Admin", role: "admin" };
        }
        else if (credentials.username === "user" && credentials.password === "user") {
          return { id: 2, name: "User", role: "user" };
        }
        // If the credentials are invalid, return null
        console.error("Invalid credentials", credentials);

        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
