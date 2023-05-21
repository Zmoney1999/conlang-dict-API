import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { FetchWikipediaBlurb } from "../util/WikiTools";
import { AiOutlineUpload } from "react-icons/ai";

// Define the type of props that this component expects
interface FileUploadProps { 
    label?: String,  // optional label prop
    maxFileSizeInBytes?: Number,  // optional maximum file size in bytes prop
    setFile: Function  // function to set the selected file
}

// Define the functional component
const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps) => {
    
    const fileInputField = useRef(null);

    // Call the FetchWikipediaBlurb function when the component is rendered
    FetchWikipediaBlurb("Klingon");

    return (
        <>
            <Form.Group controlId="fileUploadForm" className="mb-3">
            <span className="fs-4"><AiOutlineUpload/> </span><Form.Label className="fw-bolder"> Upload a file</Form.Label>
                {/* Use the onChange event to call the setFile function with the selected file */}
                <Form.Control type="file" onChange={(e) => {props.setFile((e.target as HTMLInputElement).files![0])}}></Form.Control>
            </Form.Group>
        </>
    );
}

// Set a default maximum file size of 51200 bytes (50KB)
FileUpload.defaultProps = { maxFileSizeInBytes: 51200};

export default FileUpload;
