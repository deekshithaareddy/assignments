function Navbar(){
return(
    <div className="flex bg-gray-500 text-white py-2 text-[15px] items-center">
      <div className="flex items-center"> <h1 >LOGO</h1></div> 
       <div >
        <ul className="flex gap-6"><div><li className="bg-black rounded-2xl p-1.5">Home</li></div>
        <div><li className="bg-black rounded-2xl p-2">Register</li></div>
       <div> <li className="bg-black rounded-2xl p-2">Login</li></div></ul></div>
    </div>
)
}
export default Navbar