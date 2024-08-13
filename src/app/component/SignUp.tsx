"use client"

import { signIn } from 'next-auth/react';
import { FC } from 'react';
import GoogleSignInButton from './SignInWithGoogle';

const SignUp: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <header></header>
      <div className="bg-[#1C1C1C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Create a new account
          </h2>
        </div>
        <GoogleSignInButton/>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Create an Account
        </button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
      <footer className="absolute bottom-0 w-full text-center p-4 text-gray-600 ">
        &copy; 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
};

export default SignUp;
