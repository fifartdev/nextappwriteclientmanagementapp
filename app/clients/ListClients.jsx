import Button from "../components/Button";
import { demoDb, DATABASE_ID, COLLECTION_ID } from "../libs/appwrite"
import TableComponent from "../components/TableComponent";

const ListClients = async () => {

  const columns = [
    {
      Header: 'Όνομα',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Τηλέφωνο',
      accessor: 'phone',
    },
  
  ];
    const result = await demoDb.listDocuments(DATABASE_ID,COLLECTION_ID)
    const clients = result.documents
    return (
        <>
          <div className="flex flex-col mb-5">
            <h3 className="text-xl font-bold mb-4">Όλοι οι πελάτες</h3>
            <Button name='Νέα Εγγραφή' path='/clients/new' />
          </div>
          <div className="overflow-x-auto">
            <TableComponent columns={columns} data={clients} />
          </div>
        </>
    )
    }

export default ListClients
