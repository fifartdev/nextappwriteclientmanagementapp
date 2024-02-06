import { demoDb, DATABASE_ID, COLLECTION_ID } from "@/app/libs/appwrite";
import EditForm from "./EditForm";
import BackButton from "@/app/components/BackButton";

const editClientPage = async ({params}) => {

    const clientData = await demoDb.getDocument(DATABASE_ID,COLLECTION_ID,params.client)

    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
  <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">Επεξεργασία Στοιχείων</h1>
    <div className="flex items-center justify-center">
      <BackButton />
    </div>
    <EditForm id={clientData.$id} name={clientData.name} email={clientData.email} phone={clientData.phone}/>
  </div>
</main>

    )
}

export default editClientPage