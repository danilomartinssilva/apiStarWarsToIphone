import Axios from 'axios'


const fetchApi =async ()=>{
   
   try{
    const url = 'https://swapi.co/api/films';    
    const response = await Axios.get(url);
    const {results} = response.data;

    return results;
   }  
   catch(e){
       console.log('Erro: ',e);
   }


    
}

const resultsFilmes = () =>{
    const filmes = [];
    
    fetchApi().then((results)=>{
        results.map((r,i)=>{
            filmes.push(r);
        })
        
    })
    return filmes;
}

export  {resultsFilmes};