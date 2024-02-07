import Button from "../components/Button";
import DeleteButton from "../components/DeleteButton";
import EditClient from "../components/EditClient";
import ViewClient from "../components/ViewClient";
import { demoDb, DATABASE_ID, COLLECTION_ID } from "../libs/appwrite"





const ListClients = async () => {

    const result = await demoDb.listDocuments(DATABASE_ID,COLLECTION_ID)
    const clients = result.documents
    
   
    
    
    return (
        <>
        <div className="flex flex-col mb-5">
  <h3 className="text-xl font-bold mb-4">Όλοι οι πελάτες</h3>
  <Button name='Νέα Εγγραφή' path='/clients/new' />
</div>
<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border-b">Όνομα</th>
        <th className="py-2 px-4 border-b">Τηλέφωνο</th>
        <th className="py-2 px-4 border-b">Email</th>
        <th className="py-2 px-4 border-b">Ενέργειες</th>
      </tr>
    </thead>
    <tbody>
      {clients.map((c) => (
        <tr key={c.$id} className="border-b">
          <td className="py-2 px-4 text-center border">{c.name}</td>
          <td className="py-2 px-4 text-center border">{c.phone}</td>
          <td className="py-2 px-4 text-center border">{c.email}</td>
          <td className="py-2 px-4 text-center border">
            <ViewClient id={c.$id} className="text-blue-500 hover:underline cursor-pointer mr-2 md:mr-20" />
            <EditClient id={c.$id} className="text-green-500 hover:underline cursor-pointer ml-2 md:ml-20" />
            <DeleteButton id={c.$id} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      </>
      
    
    )
    }

export default ListClients
