import axios from 'axios' 

const url ='https://jsonplaceholder.typicode.com/posts/1'


//define the data that post gunna hold and get from the Api
interface Post {
    id:number ;
    title:string;
    body:string;
}


//to make an http req to get data back 
axios.get(url).then(res=>{
    const posts = res.data  as Post
    const id = posts.id
    const title = posts.title
    const body=posts.body
 
    logData(id,title,body)
})

const logData=(id:number,title:string,body:string)=>{
    console.log(`
    PostID : ${id}
    PostTitle : ${title} 
    PostBody : ${body}
    `)
}