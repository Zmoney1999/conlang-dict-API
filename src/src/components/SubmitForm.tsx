import React from "react";
import { Button } from "react-bootstrap";

type Props = {
    jsonFile: any,      // JSON file containing the International Phonetic Alphabet (IPA) data for the language
    textBoxValue: string,   // input text from the user
    setAudioBlob: any,  // function to set the audio blob (audio file)
    setAudioLoading: any // function to set the state of whether the audio file is loading or not
}

function SubmitForm({ jsonFile, textBoxValue, setAudioBlob, setAudioLoading }: Props) {
    var audio = new Audio();

    // Function to send a request to the backend to convert text to speech
    async function sendRequest(textData: string, jsonFile: string | Blob) {
        const req = new FormData();
        req.append('ipa', jsonFile);
        req.append('textInput', textData);

        setAudioLoading(true);

        return fetch('/api/text_input', {
            method: 'POST',
            body: req
        }).then((res) => {
            if (!res.ok) throw new Error(`${res.status} = ${res.statusText}`);

            setAudioLoading(false);

            // Read the response as a stream and convert it into a blob object
            var reader = res.body!.getReader();
            return reader.read().then(
                (result) => {
                    if (result.value) {
                        var blob = new Blob([result.value], { type: 'audio/mp3' });
                        var url = window.URL.createObjectURL(blob);

                        // Set the audio blob (audio file) to the URL of the converted audio file
                        setAudioBlob(url);
                    } else {
                        setAudioBlob("");
                    }
                }
            )
        });
    }

    // Function to submit the form with the user's input text and the IPA data
    async function submitForm() {
        setAudioBlob("");   // Clear the audio blob (audio file)
        sendRequest(textBoxValue, jsonFile);   // Send a request to convert the text to speech
    }


    return (
        <>
            <Button variant="secondary" onClick={submitForm}>
                Speak
            </Button>
        </>
    )
}

export default SubmitForm;
