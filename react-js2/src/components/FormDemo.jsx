import { useForm } from "react-hook-form";
function FormDemo(){
    const {register,//to register form fields
        handleSubmit,
        formState:{errors}}=useForm()
    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-5xl text-center text-cyan-700 mt-3.5">Form</h1>
       <form className="rounded-xl shadow-md w-full max-w-md space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text"
             {...register("username",{
                required:"Username required",
                minLength:6
             })}
             id="username"
             className="border w-full p-2" />
             {errors.username?.type==="required" && <p className="text-red-500">{errors.username.message}</p>}
             {errors.username?.type==="minLength" && <p className="text-red-500">min 6 characters required</p>}
        </div>
        <div><label htmlFor="email">Email</label>
        <input type="email" {...register("email")}  id="email" className="text-center border w-full p-2"/></div>
        <div>
        <button type="submit" className=" p-3 bg-blue-600 text-center text-white m-3.5 rounded-2xl">Submit</button></div>
       </form></div>
    )
}
export default FormDemo