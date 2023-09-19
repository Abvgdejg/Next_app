const User_data = ({ user }) => {
    return (
        <>
            <div>User: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Tag: {user.tag}</div>
            <div>Color: {user.color}</div>
        </>
    )
}

export { User_data };