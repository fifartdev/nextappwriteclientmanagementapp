'use client'
import { demoDb, DATABASE_ID, COLLECTION_ID } from "../libs/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({id, path, collection}) => {
    const [onDelete,setOnDelete] = useState(false)
    const router = useRouter()

   const handleDelete = async () => {
    setOnDelete(true)
    await demoDb.deleteDocument(DATABASE_ID, collection, id);
    setOnDelete(false)
    router.refresh(`${path}`)
   } 

  return (
    <button
    onClick={handleDelete}
    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 focus:outline-none focus:ring focus:border-red-300"
  >
    {onDelete ? 'διαγράφεται...' : 'Διαγραφή'}
  </button>
  )
}

export default DeleteButton