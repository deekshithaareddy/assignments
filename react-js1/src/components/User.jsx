function User(props){
    let {user}=props
    return <div className="m-1 p-1">
        <img className="size-50" src={user.image} alt="user image" />
        <h2 className="text-[20px]">{user.name}</h2>
        <h2>{user.email}</h2>
    </div>
}

export default User