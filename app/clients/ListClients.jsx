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
          <div className="flex flex-row mb-5">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">Όλοι οι πελάτες</h3>
            </div>
            <div className="flex-2 justify-between">
              <Button name='Νέα Εγγραφή Πελάτη' path='/clients/new' />
              <Button name='Εργασίες' path={'/jobs'} />
              <Button name='Κατηγορίες Εργασιών' path={'/jobcategories'} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <TableComponent columns={columns} data={clients} />
          </div>
        </>
    )
    }

export default ListClients
