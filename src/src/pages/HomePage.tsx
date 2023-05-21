import React, { useEffect, useState } from 'react';
import {Alert, Button, Col, Container, Pagination, Row} from 'react-bootstrap';
import { FetchWikipediaBlurb } from '../util/WikiTools';
import getDict from '../util/dictSearch';
import SpeechFormatSubpage from './subpages/SpeechFormatSubpage';
import SpeechSynthesisSubpage from './subpages/SpeechSynthesisSubpage';

function HomePage(props:{language: string}) {
    const [blurb, setBlurb] = useState('');   // Declare state variables for the Wikipedia blurb and the page name
    const [pageName, setPageName] = useState('Json');
    const [jsonFile, setJsonFile] = useState();   // Declare a state variable for the JSON file
    
    const loadBlurb = async () => {   // Function to load the Wikipedia blurb asynchronously
        let b = await FetchWikipediaBlurb(props.language);
        setBlurb(b);
    }

    useEffect(() => {
        //loadBlurb();   // Uncomment this line if you want to load the Wikipedia blurb on page load
    });

    ////Testing for dictionary///

    console.log(getDict())   // Call the getDict function to test the dictionary

    return (
        <>
            <Container className="mt-4">   
                <Row className="justify-content-center">   
                    <Col sm={8}>
                        <Pagination data-tour="step-1">   
                            <Pagination.Item onClick={(_) => setPageName('Json')} active={pageName === 'Json'}>   
                                Upload Language Phonology</Pagination.Item>
                            <Pagination.Item onClick={(_) => setPageName('Speech')} active={pageName === 'Speech'}>   
                                Speech Synthesis Input</Pagination.Item>
                        </Pagination>    
                    </Col>
                     <Col sm={4}>
                        <Button onClick={() => console.log("here")} variant="outline-primary" >Open Tutorial</Button>   
                    </Col>
                </Row>
                
            </Container>
 
            <Container>   
                {pageName === 'Json' ?   // Conditional rendering based on the current page name
                    <Row><SpeechFormatSubpage language={props.language} setJsonFile={setJsonFile}/></Row> : pageName === 'Speech' ? 
                    <Row><SpeechSynthesisSubpage jsonFile={jsonFile}/></Row> : 
                    <Alert>This should not happen</Alert>
                }
            </Container>
      </>
    )
}

export default HomePage;
