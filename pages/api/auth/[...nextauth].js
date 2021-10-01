/* eslint-disable no-unused-expressions */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        // check if email and password is exist
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        // FIND USER IN THE DATABASE
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid Email or Password!");
        }

        // CHECK IF PASSWORD IS CORRECT OR NOT
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password!");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      // if (user) {
      //   token.user = user;
      // }
      user && (token.user = user);

      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
