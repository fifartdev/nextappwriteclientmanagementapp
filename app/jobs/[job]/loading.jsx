const loadingJob = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-75 h-12 w-12 mt-5"></div>
      <span className="ml-3 text-gray-600">Loading...</span>
    </div>
    </main>
    )
  }
  
  export default loadingJob