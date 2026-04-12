import { useState } from "react";
import { useForm } from "react-hook-form";
function UserForm({setUsers}){
    const {register,//to register form fields
        handleSubmit,
        formState:{errors}}=useForm()
    const onFormSubmit=(newuserObj)=>{
        setUsers((prev) => [...prev, newuserObj]);
  };
        return(
        <div >
            <h1 className="text-5xl text-center text-cyan-700 mt-3.5">User Form</h1>
       <form className="max-w-md mt-10 ml-100" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
            <label htmlFor="firstname">firstName</label>
            <input type="text"
             {...register("firstname",{
                required:"firstname required",
                minLength:3
             })}
             id="firstname"
             className="border w-full p-2" />
             {errors.firstname?.type==="required" && <p className="text-red-500">{errors.firstname.message}</p>}
             {errors.firstname?.type==="minLength" && <p className="text-red-500">min 3 characters required</p>}
        </div>
        <div><label htmlFor="email">Email</label>
        <input type="email" {...register("email")}  id="email" className="text-center border w-full p-2"/></div>
        <div><label htmlFor="dob">Date Of Birth</label>
        <input type="date" {...register("dob")} id="dob" className="text-center border w-full p-2"/></div>
        <div><label htmlFor="submit"></label>
        <button type="submit" className="p-3 bg-blue-600 text-white m-3.5 rounded-2xl">Submit</button></div>
       </form></div>
    )
}
export default UserForm;