global.fetch = require("node-fetch");


const getUsers = async() => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    try {
        const response = await fetch(api) 
        const json = await response.json()
        console.log(json);
    } catch (error) {
        console.log(error);
    }
    
}


getUsers()