import axios from 'axios' 

const url ='https://jsonplaceholder.typicode.com/posts/1'


//to make an http req to get data back 
axios.get(url).then(res=>{
    console.log(res.data)
})