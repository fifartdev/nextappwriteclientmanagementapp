import BackButton from "@/app/components/BackButton";
import EditClient from "@/app/components/EditClient";
import { demoDb, DATABASE_ID, COLLECTION_JC_ID } from "@/app/libs/appwrite";

const jobCategoryId = async ({params}) => {

    const jobCategoryData = await demoDb.getDocument(DATABASE_ID,COLLECTION_JC_ID,params.jobcat)

    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Στοιχεία κατηγορίας Εργασίας</h1>
          <div className="flex items-center justify-center">
            <BackButton path={'/jobcategories'} />
          </div>
          <table className="mx-auto mt-8 border border-gray-300">
  <tbody>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Τίτλος</td>
      <td className="py-2 px-4 text-center border">{jobCategoryData.title}</td>
    </tr>
  </tbody>
</table>
<div className="flex items-center justify-center mt-10">
<EditClient id={jobCategoryData.$id} path={'/jobcategories'} className="text-green-500 hover:underline cursor-pointer ml-20" />
          </div>
        </div>
        </main>
    )
}

export default jobCategoryId