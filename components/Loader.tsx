import "./loader.css"
import Image from "next/image"
import { memo } from "react"

const Loader = memo(() => {
  return (
    <div className="flex w-[100vw] h-[70vh] justify-center items-center">
        <Image src="/logo_blue.png" alt="Loading..." width={100} height={100} className="w-auto h-[100px] animate-pulse pulse-scale-animation" priority />
    </div>
  )
})

Loader.displayName = 'Loader'

export default Loader