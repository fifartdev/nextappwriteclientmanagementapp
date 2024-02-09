import Button from "../components/Button";
import JobsTableComponent from "../components/JobsTableComponent";
import { demoDb, DATABASE_ID, COLLECTION_JOB_ID } from "../libs/appwrite"

const ListJobs = async () => {

   

  const columns = [
    {
      Header: 'Ημερομηνία',
      accessor: 'date',
    },
    {
      Header: 'Πελάτης',
      accessor: 'clients[0].name',
    },
    {
      Header: 'Κατηγορία / Είδος',
      accessor: 'jobsCategory[0].title',
    },
  
  ];

    const result = await demoDb.listDocuments(DATABASE_ID,COLLECTION_JOB_ID)
    const jobs = result.documents

    // console.log('Jobs are:', jobs);
    
    return (
        <>
          <div className="flex flex-row justify-between mb-5">
            <h3 className="text-xl font-bold mb-4">Όλες οι Εργασίες</h3>
            <Button name='Πίσω' path={'/clients'} />
            <Button name='Νέα Εργασία' path='/jobs/new' />
          </div>
          <div className="overflow-x-auto">
            <JobsTableComponent columns={columns} data={jobs}/>
          </div>
        </>
    )
    }

export default ListJobs
