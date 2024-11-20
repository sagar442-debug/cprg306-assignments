"use client";
import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions

// Display some of the user's information
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  // Sign in to Firebase with GitHub authentication
  const signInGithub = async () => {
    await gitHubSignIn();
  };

  const signOut = async () => {
    // Sign out of Firebase
    await firebaseSignOut();
  };

  return (
    <div className="flex justify-center mt-10 ">
      {user == null ? (
        <button
          onClick={() => signInGithub()}
          className="p-3 bg-white text-black hover:bg-gray-200 duration-100"
        >
          Sign In
        </button>
      ) : (
        <div>
          <p className="text-white text-xl font-semibold">
            Welcome, {user?.displayName} ({user?.email}). You were signed into
            this application using {user?.providerId}
          </p>
          <div className="space-x-2">
            <button
              onClick={signOut}
              className="p-3 hover:bg-gray-200 bg-white text-black"
            >
              Sign Out
            </button>
            <Link href={"/week-10/shopping-list"}>
              <button className="p-3 hover:bg-gray-200 bg-white text-black">
                Go to shopping list page.
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
