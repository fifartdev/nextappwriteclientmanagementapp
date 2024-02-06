import ListClients from "./ListClients"

const clientsPage = () => {
return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
  <div className="flex-1 w-full bg-white p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-6">Πίνακας Ελέγχου</h1>
    <ListClients />
  </div>
</main>
)


}

export default clientsPage