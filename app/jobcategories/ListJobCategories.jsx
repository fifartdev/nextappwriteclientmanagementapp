import Button from "../components/Button";
import EditClient from "../components/EditClient";
import { demoDb, DATABASE_ID, COLLECTION_JC_ID } from "../libs/appwrite"

const ListJobCategories = async () => {

    const result = await demoDb.listDocuments(DATABASE_ID,COLLECTION_JC_ID)
    const jobCats = result.documents
    return (
        <>
          <div className="flex flex-row justify-between mb-5">
            <h3 className="text-xl font-bold mb-4">Όλες οι Κατηγορίες Εργασιών</h3>
            <Button name='Πίσω' path={'/clients'} />
            <Button name='Νέα Κατηγορία' path='/jobcategories/new' />
          </div>
          <div className="overflow-x-auto">
            {jobCats.map((j)=>{
              return (
                
                <p key={j.$id} className="my-5"><EditClient title={`${j.title} - `} id={j.$id} path={'/jobcategories'}/></p>
              )
            })}
          </div>
        </>
    )
    }

export default ListJobCategories
