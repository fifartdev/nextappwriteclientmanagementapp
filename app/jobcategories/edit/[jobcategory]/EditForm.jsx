'use client'
import React, {useState} from 'react'
import { demoDb, DATABASE_ID, COLLECTION_JC_ID} from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';

const EditForm = ({id,title}) => {
    const [newTitle, setNewTitle] = useState(title)
    
    const router = useRouter()
    const handleTitleChange = async (e)=>{
        e.preventDefault()
        await demoDb.updateDocument(DATABASE_ID, COLLECTION_JC_ID, id, {
            title: newTitle, 
        })
        router.push('/jobcategories')
        router.refresh('/jobcategories')
        
    }


  return (
    <form onSubmit={handleTitleChange} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <label htmlFor="newName" className="block text-gray-700 text-sm font-bold mb-2">Τίτλος</label>
      <input
        type="text"
        id="newName"
        value={newTitle}
        placeholder={title}
        onChange={(e) => setNewTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Ενημέρωση</button>
  </form>
  
    
  )
}

export default EditForm