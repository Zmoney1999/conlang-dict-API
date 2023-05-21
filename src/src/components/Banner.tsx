import { Container, Navbar } from "react-bootstrap";
import { Children, PropsWithChildren } from 'react';

function Banner(props: PropsWithChildren<{bg: string}>) {
    // This component receives two props: bg (background color) and children (the content inside the component)
    return (
    <>
        {/* The Navbar component from React Bootstrap is used to create a top navigation bar */}
        <Navbar expand="lg" bg={props.bg}>
            {/* The Container component is used to contain the content inside the Navbar */}
            <Container className="mt-2 banner">
                {/* The Navbar.Brand component is used to add a brand/logo to the Navbar */}
                <Navbar.Brand><img src={process.env.PUBLIC_URL + "/db.png"} width={64} height={64}/></Navbar.Brand>
                {/* The h2 component is used to add a heading to the Navbar */}
                <h2 className="display-5 text-light">{props.children}</h2>
            </Container>
        </Navbar>
    </>
    );
}

export default Banner;
