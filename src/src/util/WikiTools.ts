// Import the "parseString" function from the "xml2js" module.
import { parseString } from "xml2js";

// Define a constant called "WIKIPEDIA_API_PATH" that contains the base URL for the Wikipedia API,
// along with various query parameters specifying the format, origin, action, and properties of the API request.
const WIKIPEDIA_API_PATH = "http://en.wikipedia.org/w/api.php?format=xml&origin=*&action=query&prop=extracts&exsentences=10&titles=";

// Define an asynchronous function called "FetchWikipediaBlurb" that takes a single parameter, "pageTitle", which is a string.
// The function returns a Promise that resolves to a string (the Wikipedia blurb for the given page).
const FetchWikipediaBlurb = async (pageTitle: string): Promise<string> => {
    // Use the "fetch" function to make an HTTP GET request to the Wikipedia API, passing in the page title as a query parameter.
    // Convert the response to text using the "text" method of the Response object.
    // Then, parse the response text as XML using the "parseString" function from the "xml2js" module.
    // The resulting XML object is passed as the second argument to a callback function that extracts the blurb text from the object.
    // Return the blurb text as a string.
    return fetch(`${WIKIPEDIA_API_PATH}${encodeURIComponent(pageTitle)}`)
        .then((response) => response.text())
        .then((response) => parseString(response, (err, res) => 
            res.api.query[0].pages[0].page[0].extract[0]._)
        ).then((data) => data as unknown as string); // TODO: Fix this
};

// Export the "FetchWikipediaBlurb" function as the named export of the module.
export { FetchWikipediaBlurb };
