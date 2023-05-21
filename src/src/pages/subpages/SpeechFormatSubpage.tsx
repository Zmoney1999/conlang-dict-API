import { Alert, Button, Col, Container, Row, Form, Dropdown, DropdownButton } from "react-bootstrap";
import FileUpload from "../../components/FileUpload";
import { useState } from "react";
import LanguagePhonologyModal from '../../components/modals/LanguagePhonologyModal';
import TutorialIcon from "../../components/TutorialIcon";
import { AiOutlineArrowDown } from "react-icons/ai";
import LanguageDropdown from "../../components/LanguageDropdown";
import Language from "../../types/Language";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function SpeechFormatSubpage(props: { language: string, setJsonFile: Function }) {
    // Define state variables
    const [showPhonology, setShowPhonology] = useState(false);
    const [fileData, setFileData] = useState({});
    const [showFileData, setShowFileData] = useState(false);

    // Function to handle closing the phonology modal
    const handlePhonologyClose = () => { setShowPhonology(false) };

    // Sample data for the phonology modal
    const sample_data = "Here we have the phonology of a sample language";
    let lang = new Language("name", 2, "ConLang");

    return (
        <>
            <Container>
                <Col md="8">
                    {/* Informational text for the user */}
                    <p>You can upload a JSON file, or you can choose from a list of widely-known conlangs and proto-languages. Additionally, any language phonologies you upload will also be stored here until your cookies are cleared.</p>
                </Col>
                <Row>
                    {/* File upload component */}
                    <Col md="4">
                        <FileUpload setFile={props.setJsonFile} />
                    </Col>
                    {/* Tutorial icon component */}
                    {/* <Col md="4">
                        <TutorialIcon>
                            <p>Test</p>   
                        </TutorialIcon>                        
                    </Col> */}
                </Row>

                <Row>
                    {/* Button to show file data (not currently being used) */}
                    {/* <Col md="auto">
                        <Button variant="secondary" onClick={(_) => setShowFileData(!showFileData)}>
                            Check my file
                        </Button>
                    </Col> */}
                    {/* Button to open the phonology modal */}
                    <Col md="auto" className="mb-4">
                        <Button variant="secondary" onClick={(_) => setShowPhonology(true)}>
                            View Language Phonology
                        </Button>
                    </Col>
                </Row>

                <Row>
                    {/* Dropdown menu for choosing a phonology */}
                    <Col md="4" className="mb-2">
                        <span className="fs-4"><AiOutlineArrowDown /> </span><Form.Label className="fw-bolder"> Choose a phonology</Form.Label>
                        <DropdownButton title="Language select">
                            <Dropdown.Item>Testing</Dropdown.Item>
                            <Dropdown.Item>Testing 2</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>

                {/* Phonology modal component */}
                <LanguagePhonologyModal isVisible={showPhonology} handleClose={handlePhonologyClose} language={props.language} data={sample_data} />

                {/* Alert to show file data (not currently being used) */}
                {showFileData ? <Alert> Showing Data</Alert> : <div />}
            </Container>
        </>
    )
};

export default SpeechFormatSubpage;
