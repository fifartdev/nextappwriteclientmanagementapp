'use client'
import { useRouter } from "next/navigation";


const Button = ({name,path}) => {

  const router = useRouter()

  const handleAction = async () => { 
    router.push(path)
    
    }

  return (
    <button className="inline-block px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-300 cursor-pointer" onClick={handleAction}>{name}</button>
    
  )
}

export default Button