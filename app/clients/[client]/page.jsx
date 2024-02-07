import BackButton from "@/app/components/BackButton";
import EditClient from "@/app/components/EditClient";
import { demoDb, DATABASE_ID, COLLECTION_ID } from "@/app/libs/appwrite";

const clientId = async ({params}) => {

    const clientData = await demoDb.getDocument(DATABASE_ID,COLLECTION_ID,params.client)

    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Στοιχεία</h1>
          <div className="flex items-center justify-center">
            <BackButton path={'/clients'}/>
          </div>
          <table className="mx-auto mt-8 border border-gray-300">
  <tbody>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Όνομα</td>
      <td className="py-2 px-4 text-center border">{clientData.name}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Email</td>
      <td className="py-2 px-4 text-center border">{clientData.email}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 text-center border font-semibold">Τηλέφωνο</td>
      <td className="py-2 px-4 text-center border">{clientData.phone}</td>
    </tr>
  </tbody>
</table>
<div className="flex items-center justify-center mt-10">
<EditClient id={clientData.$id} path={'/clients'} className="text-green-500 hover:underline cursor-pointer ml-20" />
          </div>
        </div>
        </main>
    )
}

export default clientId