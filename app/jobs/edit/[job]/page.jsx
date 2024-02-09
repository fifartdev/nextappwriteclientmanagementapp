import { demoDb, DATABASE_ID, COLLECTION_JOB_ID } from "@/app/libs/appwrite";
import EditForm from "./EditForm";
import BackButton from "@/app/components/BackButton";
export const dynamic = 'force-dynamic';
const editJobPage = async ({params}) => {
    
   const jobData = await demoDb.getDocument(DATABASE_ID, COLLECTION_JOB_ID, params.job)
   
   //console.log('Params are: ',jobData);
    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
  <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">Επεξεργασία Στοιχείων</h1>
    <div className="flex flex-row justify-between">
      <h1 className="text-xl font-bold mb-6"><strong>Πελάτης:</strong> {jobData.clients[0]?.name}</h1>
      <BackButton path={'/jobs'}/>
    </div>
      {jobData.jobsCategory[0]?.title}
      <EditForm id={jobData.$id} date={jobData.date} description={jobData.description} jobsCategory={jobData.jobsCategory[0]?.$id} />
  </div>
</main>

    )
}

export default editJobPage