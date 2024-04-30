import Image from "next/image";
import { Button } from "@nextui-org/button";
import LoginForm from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:px-20 sm:py-12">
      <div className="flex flex-wrap -mx-2 mt-24 gap-y-8">
        <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
          <div className="relative text-center w-full flex justify-center flex-wrap">
            <div className="w-full max-w-[100px] mb-8">
              <img src="/favicon.ico" alt="Logo" />
            </div>
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-4">
                Campus Repair Hub Authentication with{" "}
                <span className="text-primary">Appwrite</span>
              </h1>
              <p className="text-black">
                Integrate secure user authentication into your Next.js web
                applications using Appwrite, an open-source backend server.
                Follow along as we demonstrate the step-by-step process of
                setting up and implementing authentication functionality,
                ensuring the highest level of security for your users.
              </p>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                variant="shadow"
              >
                Click me
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
          {/* {authStatus ? (
                    <div className="max-w-md">
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )} */}
          <LoginForm className="bg-gray-200/60" />
        </div>
      </div>
    </main>
  );
}
