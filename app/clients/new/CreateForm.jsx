'use client'
import React, {useState} from 'react'
import { demoDb, DATABASE_ID, COLLECTION_ID } from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';
import { ID } from '@/app/libs/appwrite';

const CreateForm = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const router = useRouter()
    const handleChange = async (e)=>{
        e.preventDefault()
        await demoDb.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique(), {
            email, name, phone,
        })
        router.push('/clients')
        router.refresh('/clients')
    }


  return (
    <form onSubmit={handleChange} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <label htmlFor="newName" className="block text-gray-700 text-sm font-bold mb-2">Όνομα</label>
      <input
        type="text"
        id="newName"
        value={name}
        placeholder='Το όνομα σας...'
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="newPhone" className="block text-gray-700 text-sm font-bold mb-2">Τηλέφωνο</label>
      <input
        type="text"
        id="newPhone"
        value={phone}
        placeholder='Το τηλέφωνό σας...'
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="newEmail" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        id="newEmail"
        value={email}
        placeholder='Το email σας...'
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Εγγραφή</button>
  </form>
  
    
  )
}

export default CreateForm