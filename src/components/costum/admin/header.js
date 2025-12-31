

const Header = () => { 
  // const date = getDate();
  return (
    <div className="flex justify-between items-center sticky top-0  mx-4 sm:mx-6 lg:mx-8 mt-4">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p className="text-xs">Welcome to Admin page</p>
      </div>
      {/* <p className="px-4 py-2 bg-white rounded-md text-gray-800">{date}</p> */}
    </div>
  )
}

export default Header
