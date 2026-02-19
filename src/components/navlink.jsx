"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({link}) => {
    const pathName=usePathname();
    console.log(pathName)
    return (
        <Link className={`rounded p-1 font-semibold ${pathName===link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    )
}

export default Navlink
