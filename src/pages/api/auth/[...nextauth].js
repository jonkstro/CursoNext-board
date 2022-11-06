import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   client_id: process.env.GOOGLE_CLIENT_ID,
    //   client_secret: process.env.GOOGLE_CLIENT_SECRET
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
    // ...add more providers here
  ],
  
  // funções que serão realizadas quando o usuário logar, e durante a sessão do mesmo
    callbacks:{
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        return session
      },  
      // async session(session, profile){
      //   try {
      //     return {
      //       ...session,
      //       id: profile.sub
      //     }
      //   } catch{
      //     return {
      //       ...session, 
      //       // id: null
      //     }
      //   }
      // },
      async signIn(user, account, profile){
        // const { email } = user;
        try {
          return true
        } catch(err){
          console.log('DEU ERRO: ', err);
          return false
        }

      }
    }
  
  
})

