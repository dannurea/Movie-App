/* //Programación asincrona
import config from '../config/config';

export const getTrending = async (media_type='all', time_window='day') => {
    const {ApiKey, Endpoint} = config
    //https://api.themoviedb.org/3/trending/all/day?api_key=e5c7e72ddd0e022d8b6bfc36cb45864f
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    return results;

} */
import config from "../config/config"; //al seleccionar el objeto, se autocompleta

//Ira a la web y regresará datos cuando se llame async
export const getTrending = async (
    media_type = 'all',
    time_window = 'day') => {

        const {ApiKey, Endpoint} = config;
        //https://api.themoviedb.org/3/trending/all/day?api_key=c7afdcff2cf9f3825bdde70d488bb105

        //template key -> se armo en base de las variables de entorno que ya se tiene
        const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;

        //await(promesa)-> Llama a una funcion asíncrona y  devuelve una promesa
        //L15-16  -  código lineal
        const resp = await fetch( url ); //get url
        const {results} = await resp.json();

        return results;
    }