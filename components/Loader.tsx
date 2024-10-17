import "./loader.css"

const Loader = () => {
  return (
    <div className="w-[100vw] h-[70vh]
    flex justify-center items-center">
        <img src="/logo_blue.png" className="h-[100px] w-auto animate-pulse pulse-scale-animation" />
    </div>
  )
}

export default Loader