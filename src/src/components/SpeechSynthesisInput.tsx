import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { AiOutlineUpload } from "react-icons/ai";
import SubmitForm from "./SubmitForm";

type Props = {
    jsonFile: any,
    setAudioBlob: any,
    setAudioLoading: any
};

type States = {
    SpeechSynthesisInput: string
};

class SpeechSynthesisInput extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            SpeechSynthesisInput: ""
        };
    }

    // Reads the contents of a file and returns a promise
    readFile = (file: any) => {
        const fr = new FileReader();

        return new Promise((res, rej) => {
            fr.onerror = rej;
            fr.onload = () => {
                res(fr.result);
            }
            fr.readAsText(file);
        });
    }

    // Called when a file is uploaded
    fileUploadHandler(e: any) {
        let file = e.target.files[0];

        this.readFile(file)
            .then((text) => {
                if (typeof text === 'string') {
                    // Set the input text state to the contents of the uploaded file
                    this.setState({ SpeechSynthesisInput: text });
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                <Col>
                    <Row>
                        {/* File upload form */}
                        <Form.Group controlId="fileUploadForm" className="mb-3">
                            <span className="fs-4">
                                <AiOutlineUpload />
                            </span>
                            <Form.Label className="fw-bolder"> Upload a file</Form.Label>
                            <Form.Control type="file" onChange={(e) => this.fileUploadHandler(e)} />
                        </Form.Group>
                    </Row>

                    <Row>
                        {/* Input text form */}
                        <Form className="mb-3">
                            <Form.Label className="fw-bolder">Input text</Form.Label>
                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Enter input text" value={this.state.SpeechSynthesisInput} rows={5} onChange={(e) => this.setState({ SpeechSynthesisInput: e.target.value })} />
                            </Form.Group>
                        </Form>
                    </Row>

                    {/* Submit form */}
                    <SubmitForm
                        jsonFile={this.props.jsonFile}
                        textBoxValue={this.state.SpeechSynthesisInput}
                        setAudioBlob={this.props.setAudioBlob}
                        setAudioLoading={this.props.setAudioLoading}
                    />
                </Col>
            </>
        );
    }
}

export default SpeechSynthesisInput;
