import React from 'react';
import {Container, Row} from 'react-bootstrap';

//This function renders the about page 

function AboutPage(props:{}) {
    return (
        <>
            <Container>
                <Row className="mb-1">
                    <h4>About</h4>
                </Row>
                <Row>
                    <p>This app was created as a capstone project by OSU students Nicholas Burrell, Zachary Chand, Jungmin Lee, Gavin Lesher, Avery Mao, Griffin Riley, and Kevin Tran. 
</p>
                    <p>Dr. Patrick Donnelly was the project sponsor and director.</p>

                </Row>
            </Container>
        </>
    )
}

export default AboutPage;