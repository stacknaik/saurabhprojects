import React from 'react'
import { Link } from 'react-router-dom'

function Navigatonpanel() {
  return (
    <>
      <nav className="bg-black text-white flex justify-between items-center 
      px-6 md:px-16 py-6 text-lg shadow-lg border-b border-gray-800">

        <div className="flex items-center gap-2">
          <img src="/icon/pcicon.png" width={50} alt="PC Build Icon" />
          <p className="text-3xl font-bold">PCBUILD</p>
        </div>

        <div className="hidden md:flex gap-10 items-center text-green-500 text-xl">

          <Link to="/" className="neon-tab cursor-pointer">Home</Link>
          <a className="neon-tab cursor-pointer">About</a>

          <div className="relative group">
            <span className="neon-tab cursor-pointer flex items-center gap-1">
              Component
            </span>

            <div className="absolute left-0 mt-2 w-48 bg-black text-white border border-gray-700 
            rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 
            transition-all duration-200 z-50">

             <Link to="/processor.svg" className="px-4 py-2 dropdown-neon flex items-center">
  <img src="/path-to-icons/processor.svg" alt="Processor" className="w-5 h-5 mr-2" />
  Processor
</Link>


              <Link to="/graphics" className="block px-4 py-2 dropdown-neon hover:text-purple-400">🎮 Graphics Card</Link>
              <Link to="/ssd" className="block px-4 py-2 dropdown-neon hover:text-blue-400">💾 SSD</Link>
              <Link to="/ram" className="block px-4 py-2 dropdown-neon hover:text-yellow-400">🧠 RAM</Link>
              <Link to="/casefan" className="block px-4 py-2 dropdown-neon hover:text-cyan-400">🌀 Case Fan</Link>
              <Link to="/cables" className="block px-4 py-2 dropdown-neon hover:text-orange-400">🔌 Cables</Link>
              <Link to="/powersupply" className="block px-4 py-2 dropdown-neon hover:text-red-400">⚡ Power Supply</Link>
              <Link to="/harddrives" className="block px-4 py-2 dropdown-neon hover:text-pink-400">🗄️ Hard Drives</Link>
              <Link to="/usb" className="block px-4 py-2 dropdown-neon hover:text-indigo-400">🔑 USB Devices</Link>
              <Link to="/keyboard" className="block px-4 py-2 dropdown-neon hover:text-white">⌨️ Keyboard</Link>

            </div>
          </div>

          <a className="neon-tab cursor-pointer">Search</a>
          <a className="neon-tab cursor-pointer">FAQ</a>
        </div>

        <div className="md:hidden text-3xl cursor-pointer">☰</div>

      </nav>
    </>
  )
}

export default Navigatonpanel
