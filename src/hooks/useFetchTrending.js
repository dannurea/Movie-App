import { useEffect, useState } from "react"
import { getTrending } from "../helpers/getTrending";
export const useFetchTrendig = () =>{
    const [movies, setMovies] = useState ([]);
    const [isloading, setIsLoading] = useState ([true]);

    const getTrendingMovies = async(media_type,time_window) => {
        const results = await getTrending(media_type,time_window);
        setIsLoading(false);
        setMovies(results);
    }

    useEffect(() => {
        getTrendingMovies();
    },[]);

    return{
        movies,
        isloading
    }

}

