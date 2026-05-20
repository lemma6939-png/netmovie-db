import axios from "axios";


const movieinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    
});
export default movieinstance;