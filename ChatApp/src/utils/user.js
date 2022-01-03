const users = [

    
]


const addUser = ({ id, username, room }) => {
    //clean tha data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    const existingUsers = users.find((users)=>{
        return users.room === room && users.username === username
    })

    if(existingUsers) {
        return {
            error: 'Username is in use'
        }
    }

    const user = {id, username, room}
    users.push(user)
    return{ user }
}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id )

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id)=>{
    return users.find((user)=> user.id === id)
}

const getUserRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUserRoom,
    getUser
}