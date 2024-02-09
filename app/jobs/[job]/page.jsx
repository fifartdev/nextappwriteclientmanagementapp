import BackButton from "@/app/components/BackButton";
import EditClient from "@/app/components/EditClient";
import { demoDb, DATABASE_ID, COLLECTION_JOB_ID } from "@/app/libs/appwrite";

const jobId = async ({params}) => {

    const jobData = await demoDb.getDocument(DATABASE_ID,COLLECTION_JOB_ID,params.job)
    console.log('JobData are: ', jobData);
    const currentDate = new Date(jobData.date).toLocaleDateString('el-Gr');
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Στοιχεία κατηγορίας Εργασίας</h1>
          <div className="flex items-center justify-center">
            <BackButton path={'/jobs'} />
          </div>
          <table className="mx-auto mt-8 border border-gray-300">
  <tbody>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Ημερομηνία</td>
      <td className="py-2 px-4 text-center border">{currentDate}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Κατηγορία</td>
      <td className="py-2 px-4 text-center border">{jobData.jobsCategory[0].title}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Περιγραφή</td>
      <td className="py-2 px-4 text-center border">{jobData.description}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Πελάτης</td>
      <td className="py-2 px-4 text-center border">{jobData.clients[0].name}</td>
    </tr>
  </tbody>
</table>
<div className="flex items-center justify-center mt-10">
<EditClient id={jobData.$id} path={'/jobs'} className="text-green-500 hover:underline cursor-pointer ml-20" />
          </div>
        </div>
        </main>
    )
}

export default jobId