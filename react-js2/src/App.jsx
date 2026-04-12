import { useState } from 'react'
import Counter from './counter'
import APIDemo from './components/APIDemo'
import UserForm from './components/UserForm'
import DataTable from './components/DataTable'
import './App.css'

function App() {
  const [users,setUsers]=useState([])
  return (
    // <div className='grid bg-blue-200'>
    <div>
        <UserForm setUsers={setUsers}/>
      <DataTable users={users}/>
    </div>
  );
}

export default App;
