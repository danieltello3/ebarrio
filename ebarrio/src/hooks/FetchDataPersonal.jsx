import React,{useState,useEffect} from 'react'

export default function FetchDataPersonal(pokemonID) {

    const [data, setData]=useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]=useState(null);

    useEffect(
        ()=>{
            const constFetchData = async()=>{
                try{
                    let res =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
                    let data= await res.json();
                    setData(data);
                    setLoading(false);
                }
                catch(error){
                    setLoading(false);
                    setError(error);
                }
            }
            constFetchData();
        },[pokemonID])



    return {data, loading, error};
}

