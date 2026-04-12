import UserForm from "./UserForm";
function DataTable({users}){
    return(
        <div className="bg-red-100 p-5">
            <header>
                <h1 className="text-red-500 text-center text-2xl">List of Users</h1>
            </header>
               <table className="table-auto w-full border border-black mt-4">
  <thead>
    <tr>
      <th className="border border-black px-4 py-2">First Name</th>
      <th className="border border-black px-4 py-2">Email</th>
      <th className="border border-black px-4 py-2">Date Of Birth</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index) => (
      <tr key={index}>
        <td className="border border-black px-4 py-2">{user.firstname}</td>
        <td className="border border-black px-4 py-2">{user.email}</td>
        <td className="border border-black px-4 py-2">{user.dob}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}
export default DataTable;