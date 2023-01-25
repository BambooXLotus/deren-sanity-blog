import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import deren48 from '../../public/images/deren-48.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image className="rounded-full" src={deren48.src} width={48} height={48} alt="Deren" />
        </Link>
        <h1>DEREN SANITY BLOG</h1>
      </div>
      <div></div>
    </header>
  )
}

export default Header
