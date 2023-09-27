import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = sessionStorage.getItem('username');
    setUser(userFromStorage);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = 'components/login';
  };

  const hasSessionStorageItem = sessionStorage.getItem('id');

  

  return (
    <nav className=' h-20 flex flex-wrap px-8 rounded-md sticky top-0 items-center justify-between'>
      <div className="logo">
        <h1>MEMO</h1>
      </div>
      <div className='w-[15%] flex justify-between items-center text-lg'>
       {!hasSessionStorageItem ? <><Link href="components/login"
          className='rounded-[10em] py-2 px-4 hover:bg-black hover:text-white'>Login
        </Link><Link href="components/signup"
          className='bg-black text-white rounded-[10em] py-2 px-4 hover:bg-white hover:text-black'>Sign up
          </Link></>:<button onClick={handleLogout} className='rounded-[10em] py-2 px-4 hover:bg-black hover:text-white'>Log out</button>
          }
      </div>
     
    </nav>
  );
};

export default Navbar;
