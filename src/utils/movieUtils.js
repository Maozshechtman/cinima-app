import axios from 'axios';



const url="http://localhost:8000/api/movies"
 const getAllMovies = async ()=>
 {
    return  await axios.get(url+'/')
 }
 const getMovie = async (id)=>
 {
    return await (await axios.get(url+'/'+id))
 }
 const addMovie = async (movie)=>{
     let response = await axios.post(url,movie)
     return response;
 }

 const updateMovie = async (id,movie)=>
 {
     let response = await axios.put(url+'/'+id,movie);
     return response ;

 }
 const deleteMovie =async (id)=>
 {
     await axios.delete(url+'/'+id);
 }

 



export default {getAllMovies,getMovie,addMovie,updateMovie,deleteMovie}