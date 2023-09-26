export default function Login() {

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-[#0f0a2c] bg-blend-saturation">
        <div className="bg-[#3d3d3d59] rounded border border-[#b5b5b5ac] text-[#fff] px-8 py-12">
          <div className=""> 
            <h1 className="text-center font-bold text-[28px] mb-8"> SIGN IN</h1>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Username</label>
                <input type='text' className="bg-[#56565660] outline-none rounded-[2px] p-3" placeholder="Email or Username" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Password</label>
                <input type='text' className="bg-[#56565660] outline-none rounded-[2px] p-3" placeholder="Password" />
              </div>
              <div className="mt-8">
                <input type='submit' className="bg-[#ffffff] w-full outline-none rounded-[2px] p-3 text-black font-bold" value='Log in' />
              </div>
            </form>
          </div>
        </div>
      </main>

    </>
  )
}