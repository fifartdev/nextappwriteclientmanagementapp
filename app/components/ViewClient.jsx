'use client'
import { useRouter } from "next/navigation"



const ViewClient = ({id,path}) => {

    const router = useRouter()

    const handleClick = async () => {
       router.push(`${path}/${id}`)
    }
  return (
    <button
  onClick={handleClick}
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
>
  Προβολή
</button>
  )
}

export default ViewClient