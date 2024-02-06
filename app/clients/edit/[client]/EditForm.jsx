'use client'
import React, {useState} from 'react'
import { demoDb, DATABASE_ID, COLLECTION_ID } from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';

const EditForm = ({name, email, phone, id}) => {
    const [newEmail, setNewEmail] = useState(email)
    const [newPhone, setNewPhone] = useState(phone)
    const [newName, setNewName] = useState(name)
    const router = useRouter()
    const handleNameChange = async (e)=>{
        e.preventDefault()
        const updateClient = await demoDb.updateDocument(DATABASE_ID,COLLECTION_ID,id, {
            email: newEmail, name: newName, phone: newPhone
        })
        router.push(`/clients/${id}`)
        
    }


  return (
    <form onSubmit={handleNameChange} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <label htmlFor="newName" className="block text-gray-700 text-sm font-bold mb-2">Όνομα</label>
      <input
        type="text"
        id="newName"
        value={newName}
        placeholder={name}
        onChange={(e) => setNewName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="newPhone" className="block text-gray-700 text-sm font-bold mb-2">Τηλέφωνο</label>
      <input
        type="text"
        id="newPhone"
        value={newPhone}
        placeholder={phone}
        onChange={(e) => setNewPhone(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="newEmail" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        id="newEmail"
        value={newEmail}
        placeholder={email}
        onChange={(e) => setNewEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Ενημέρωση</button>
  </form>
  
    
  )
}

export default EditForm