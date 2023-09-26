"use client"
import Navbar from './components/nav'
import Homepage from './components/home/home'
import Dashboard from './dashboard/page'

export default function Home() {
  const hasSessionStorageItem = sessionStorage.getItem('id');

  return (
    <div>
      <Navbar/>
      {
        hasSessionStorageItem?<Dashboard/>:<Homepage/>
      }
    </div>
  )
}
