'use client'
import React, {useState} from 'react'
import { demoDb, DATABASE_ID, COLLECTION_JC_ID } from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';
import { ID } from '@/app/libs/appwrite';

const CreateForm = () => {
    const [title, setTitle] = useState('')
    const router = useRouter()
    const handleChange = async (e)=>{
        e.preventDefault()
        await demoDb.createDocument(DATABASE_ID,COLLECTION_JC_ID,ID.unique(), {
            title
        })
        router.push('/jobcategories')
        router.refresh('/jobcategories')
    }


  return (
    <form onSubmit={handleChange} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <label htmlFor="newName" className="block text-gray-700 text-sm font-bold mb-2">Τίτλος</label>
      <input
        type="text"
        id="newName"
        value={title}
        placeholder='Δώστε τίτλο...'
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Δημιουργία</button>
  </form>
  
    
  )
}

export default CreateForm