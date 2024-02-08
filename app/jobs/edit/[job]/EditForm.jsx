'use client'
import React, {useEffect, useState} from 'react'
import { demoDb, DATABASE_ID, COLLECTION_JOB_ID, COLLECTION_JC_ID} from "@/app/libs/appwrite";
import { useRouter } from 'next/navigation';

const EditForm = ({id,date,description,jobsCategory}) => {
    const currentDate = new Date(date).toISOString().split('T')[0];
    
    const [newDate, setNewDate] = useState(currentDate)
    const [newDescription, setNewDescription] = useState(description)
    const [newJobCategory, setNewJobCategory] = useState(jobsCategory)
    const [jobCategories, setJobCategories] = useState([])
    
    const router = useRouter()
    
    const getJobCategories = async () => {
      const res = await demoDb.listDocuments(DATABASE_ID, COLLECTION_JC_ID)
      setJobCategories(res.documents)
    }

    useEffect(()=>{
      getJobCategories()
      
    },[])
    
    const handleJobChange = async (e)=>{
      try {
        e.preventDefault()
        console.log('New DATA are: ', {newDate, newDescription, newJobCategory, id});
        await demoDb.updateDocument(DATABASE_ID, COLLECTION_JOB_ID, id, {
          date: newDate,
          description: newDescription,
          jobsCategory: [newJobCategory]
        })
        
        router.push('/jobs')
        router.refresh('/jobs')
      } catch (error) {
        console.log('Error is: ',error);
      }  
     
  }

  return (
    <form onSubmit={handleJobChange} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <label htmlFor="newDate" className="block text-gray-700 text-sm font-bold mb-2">Επιλέξετε Νέα Ημερομηνία</label>
      <input
        type="date"
        id="newDate"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
      </div>
    <div className="mb-4">
      <label htmlFor="newJobCategory" className="block text-gray-700 text-sm font-bold mb-2">Κατηγορία</label>
      <select
        name="select"
        id="newJobCategory"
        onChange={(e) => setNewJobCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        value={newJobCategory}
        required
        >
          
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
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        rows='10'
      />
      </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Ενημέρωση</button>
  </form>
  
    
  )
}

export default EditForm