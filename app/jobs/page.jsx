import ListJobs from "./ListJobs"



const jobsPage = () => {
return (
  <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
    <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6">Εργασίες</h1>
      <ListJobs />
    </div>
</main>
)


}

export default jobsPage