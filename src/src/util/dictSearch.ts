import { request } from "https";

//import { ResponsiveEmbed } from "react-bootstrap";
interface Data {
   
    word: String,
    phonetic: String,
    phonetics: String
    //TODO: finish API response with parameters
    
}

function getDict(): Promise<Data[]> {

    // For now, consider the data is stored on a static `users.json` file
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello') //TODO: Set custom paramater for query
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    return res as Data[]
            })
}
export default getDict
  