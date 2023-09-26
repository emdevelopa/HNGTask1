export default function Login() {

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-black bg-blend-saturation">
        <div className="h-[20em] bg-[#b3b3b32e] rounded">
          <h1> SIGN IN</h1>
          <form>
            <div>
              <label>Username</label>
              <input type='text' placeholder="Email or Username" />
            </div>
            <div>
              <label>Password</label>
              <input type='text' placeholder="Password" />
            </div>
            <div>
              <input type='submit' value='Log in' />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}