import { useState, Children, HTMLAttributes, DetailedHTMLProps } from 'react';
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { forwardRef } from 'react';

import LanguageEntry from './LanguageEntry';
import Language from '../types/Language';

// Create a filtered dropdown component that filters its children based on a user input
const FilteredDropdown = forwardRef<HTMLDivElement, 
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>(
    ({ children, style, className, 'aria-labelledby': labeledBy}, ref) => {
        const [filterText, setFilterText] = useState(''); // state to hold user input for filtering
        return (
            <div 
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter"
                    onChange={(e :any) => setFilterText(e.target.value)}
                    value={filterText}
                />
                {/* Render children and filter based on user input */}
                <ul className="list-unstyled">
                    {Children.toArray(children).filter(
                        // TODO: Figure out typing on child
                        (child: any) =>
                            !filterText 
                            || child.props.role != undefined // If child is separator
                            || child.props.language.Name
                                .toLowerCase().startsWith(filterText)
                    )}
                </ul>
            </div>
        );
    }
);

function LanguageDropdown(props: {languages: Language[], language: string, setLanguage: Function}) {
    const [displayLanguage, setDisplayLanguage] 
        = useState(props.language); // state to hold the currently displayed language
    
    const conLangs = props.languages.filter(l => l.Type === "ConLang"); // filter constructed languages
    const protoLangs = props.languages.filter(l => l.Type === "ProtoLang"); // filter proto languages

    return (
        <>
            {/* Render the language dropdown */}
            <NavDropdown title={`Language: ${props.language}`} color='light' menuVariant='primary' className="text-light" onSelect={(e: string | null) => {
                const lang = props.languages.find((l: Language) => l.Id === parseInt(e!))
                setDisplayLanguage(lang?.Name ?? displayLanguage);
                props.setLanguage(lang?.Id);
            }}>
                {/* Render the filtered dropdown */}
                <Dropdown.Menu as={FilteredDropdown}>
                    <Dropdown.Header>Constructed Languages</Dropdown.Header>
                    {/* Map over the constructed languages and render a LanguageEntry component for each one */}
                    {
                        conLangs.map((l, k) => {
                            console.log(l);
                            return <LanguageEntry language={l} key={k.toString()}/>
                        })
                    }
                    <Dropdown.Divider/>
                    <Dropdown.Header>Proto Languages</Dropdown.Header>
                    {/* Map over the proto languages and render a LanguageEntry component for each one */}
                    {
                        protoLangs.map((l, k) =>
                            <LanguageEntry language={l} key={k.toString()}/>
                        )
                    }                   
                </Dropdown.Menu>
            </NavDropdown>
        </>
    );
}

export default LanguageDropdown;
