import Link from "next/link";
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-[#0f0a2c] bg-blend-saturation ">
        <div className="p-4  max-[500px]:w-full">
          <div className="bg-[#3d3d3d59] rounded-lg border border-[#b5b5b5ac] text-[#fff] px-14 max-[500px]:px-4  py-10">
            <h1 className="text-center font-bold text-[28px] mb-6"> SIGN IN</h1>

            <form className="flex flex-col gap-6">
              <div className="flex justify-center gap-6">
                <div className="p-3 bg-black rounded-[50%] hover:text-black hover:bg-[#fff]"><FaGoogle /></div>
                <div className="p-3 bg-black rounded-[50%] hover:text-black hover:bg-[#fff]"><FaFacebook /></div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Username</label>
                <input type='text' className="bg-[#56565660] outline-none rounded-[2px] p-3 focus:border-blue-300 focus:border " placeholder="Email or Username" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Password</label>
                <input type='text' className="bg-[#56565660] outline-none rounded-[2px] p-3 focus:border-blue-300 focus:border" placeholder="Password" />
              </div>
              <div className="mt-6">
                <input type='submit' className="bg-[#ffffff] w-full outline-none rounded-[2px] hover:bg-black hover:text-white p-3 text-black font-bold" value='Log in' />
              </div>
              <Link href='signup' className="hover:underline hover:text-blue-500">Create Account -&gt;</Link>
            </form>
          </div>
        </div>
      </main>

    </>
  )
}