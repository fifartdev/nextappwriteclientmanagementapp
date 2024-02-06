'use client'
import { useRouter } from "next/navigation"



const EditClient = ({id}) => {

    const router = useRouter()

    const handleClick = async () => {
       router.push(`/clients/edit/${id}`)
    }
  return (
    <button
    onClick={handleClick}
    className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring focus:border-orange-300"
  >
    Επεξεργασία
  </button>
  )
}

export default EditClient