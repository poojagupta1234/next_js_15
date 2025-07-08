import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


 const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy user for example (replace with DB/API logic)
        const user = {
          id: "1",
          name: "admin",
          email: "admin@example.com",
          username: "admin",
          password: "admin", // never store plain text passwords!
          role: "admin",
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null; // Authentication failed
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add user info to token on login
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add role from token to session
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // Optional: custom login page
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
