import Button from "../components/Button";
import EditClient from "../components/EditClient";
import { demoDb, DATABASE_ID, COLLECTION_JOB_ID } from "../libs/appwrite"

const ListJobs = async () => {

    const result = await demoDb.listDocuments(DATABASE_ID,COLLECTION_JOB_ID)
    const jobs = result.documents

    console.log('Jobs are:', jobs);
    
    return (
        <>
          <div className="flex flex-row justify-between mb-5">
            <h3 className="text-xl font-bold mb-4">Όλες οι Εργασίες</h3>
            <Button name='Πίσω' path={'/clients'} />
            <Button name='Νέα Εργασία' path='/jobs/new' />
          </div>
          <div className="overflow-x-auto">
            {jobs.map((j)=>{
              let jobDate = new Date(j.date).toLocaleDateString('el-GR');
              return (
                
                <p key={j.$id} className="my-5">{jobDate} | {j.clients[0]?.name} {j.jobsCategory[0]?.title} <EditClient id={j.$id} path={'/jobs'}/></p>
              )
            })}
          </div>
        </>
    )
    }

export default ListJobs
