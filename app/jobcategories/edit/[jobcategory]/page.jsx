import { demoDb, DATABASE_ID, COLLECTION_JC_ID } from "@/app/libs/appwrite";
import EditForm from "./EditForm";
import BackButton from "@/app/components/BackButton";

const editJobCatPage = async ({params}) => {
    
   const jobCatData = await demoDb.getDocument(DATABASE_ID, COLLECTION_JC_ID, params.jobcategory)
   console.log('JOB CAT DATA: ',jobCatData);
    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
  <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">Επεξεργασία Στοιχείων</h1>
    <div className="flex items-center justify-center">
      <BackButton path={'/jobcategories'}/>
    </div>
      <EditForm id={jobCatData.$id} title={jobCatData.title} />
  </div>
</main>

    )
}

export default editJobCatPage