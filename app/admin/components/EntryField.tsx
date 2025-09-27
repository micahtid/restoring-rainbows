import React from "react";

interface EntryFieldProps {
  username: string;
  setUsername: Function;
  password: string;
  setPassword: Function;
  setAdminStatus: Function;
}

const EntryField: React.FC<EntryFieldProps> = ({ username, setUsername, password, setPassword, setAdminStatus }) => {
  return (
    <form className="
    flex flex-col justify-center items-start gap-y-4
    w-[500px] bg-white border border-gray-100
    p-8"
    onSubmit={(e) => {
        e.preventDefault();
        if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setAdminStatus(true);
        }
    }}>
        <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)}
        className='w-full px-4 py-3 border-b border-gray-200 outline-none transition-all duration-300 focus:border-primary placeholder:text-gray-400' />
        <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}
        className='w-full px-4 py-3 border-b border-gray-200 outline-none transition-all duration-300 focus:border-primary placeholder:text-gray-400' />
        <button type="submit"
        className='w-full px-4 py-3 bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90'>
          Sign In
        </button>
    </form>
  )
}

export default EntryField;
