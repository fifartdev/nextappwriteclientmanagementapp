'use client'
import React, {useEffect, useState} from 'react'
import { demoDb, DATABASE_ID,COLLECTION_ID, COLLECTION_JC_ID, COLLECTION_JOB_ID } from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';
import { ID } from '@/app/libs/appwrite';


const CreateForm = () => {
  const [jobCategories, setJobCategories] = useState([])
  const [clients, setClients] = useState([])
  const [date, setDate] = useState(null)
  const [description, setDescription] = useState('')
  const [jobsCategory, setJobsCategory] = useState('')
  const [client, setClient] = useState('')
  
  const router = useRouter()
  
  const getJobCategories = async () => {
    try {
      const res = await demoDb.listDocuments(DATABASE_ID, COLLECTION_JC_ID)
    setJobCategories(res.documents)
    } catch (error) {
      console.log('Error is:', error.message);
    }
  }

  const getClients = async () => {
    try {
      const res = await demoDb.listDocuments(DATABASE_ID, COLLECTION_ID)
    setClients(res.documents)
    } catch (error) {
      console.log('Error is:', error.message);
    }
  }

  useEffect(()=>{
    getJobCategories()
  },[])

  useEffect(()=>{
    getClients()
  },[])

  const handleJobCreate = async (e)=>{
    try {
      e.preventDefault()
      console.log('DATA ARE: ', {date, client, jobsCategory, description});
      const newJob = await demoDb.createDocument(DATABASE_ID, COLLECTION_JOB_ID, ID.unique(), {
        date: date,
        description: description,
        jobsCategory: [jobsCategory],
        clients: [client]
      } 
      )
      router.push('/jobs')
      router.refresh('/jobs')
    } catch (error) {
      console.log('Error is: ',error);
    }  
   
}

return (
  <form onSubmit={handleJobCreate} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
  <div className="mb-4">
    <label htmlFor="newDate" className="block text-gray-700 text-sm font-bold mb-2">Επιλέξετε Ημερομηνία</label>
    <input
      type="date"
      id="newDate"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      required
    />
    </div>
    <div className="mb-4">
    <label htmlFor="client" className="block text-gray-700 text-sm font-bold mb-2">Πελάτης</label>
    <select
      name="select"
      // id="client"
      onChange={(e) => setClient(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      value={client}
      required
      >
         <option value="" disabled>
          Επιλέξετε πελάτη
          </option>
        {clients.map((c)=>{
         
          return (
            <option value={c.$id} key={c.$id}>{c.name}</option>
          )
        })}
      </select>
  </div>
  <div className="mb-4">
    <label htmlFor="newJobCategory" className="block text-gray-700 text-sm font-bold mb-2">Κατηγορία</label>
    <select
      name="select"
      id="newJobCategory"
      onChange={(e) => setJobsCategory(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      value={jobsCategory}
      required
      >
        <option value="" disabled>
          Επιλέξετε κατηγορία
          </option>
        {jobCategories.map((j)=>{
          return (
            <option value={j.$id} key={j.$id}>{j.title}</option>
          )
        })}
      </select>
  </div>
  <div className="mb-4">
    <label htmlFor="newDescription" className="block text-gray-700 text-sm font-bold mb-2">Περιγραφή</label>
    <textarea
      id="newDescription"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      rows='10'
    />
    </div>
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Δημιουργία</button>
</form>

  
)
}

export default CreateForm