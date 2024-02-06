'use client'
import { useRouter } from "next/navigation";


const BackButton = () => {

  const router = useRouter()

  const handleBack = async () => { 
    router.replace('/clients')
    
    }

  return (
    <button className="inline-block px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer" onClick={handleBack}>Πίσω</button>
    
  )
}

export default BackButton