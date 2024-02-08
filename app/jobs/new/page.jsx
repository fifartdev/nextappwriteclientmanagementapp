import BackButton from "@/app/components/BackButton";
import CreateForm from "./CreateForm";


const newJobCategoryPage = async ({params}) => {

    

    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
  <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">Δημιουργία Εργασίας</h1>
    <div className="flex items-center justify-center">
      <BackButton path={'/jobs'}/>
    </div>
      <CreateForm />
  </div>
</main>

    )
}

export default newJobCategoryPage