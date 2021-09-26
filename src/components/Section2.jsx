import React, {useState} from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

import "./Section2.less";

import SimpleModal from "./overlayComponents/SimpleModal.jsx";


const Section2 = ({ JSONData }) => {
    const { background_image } = JSONData;

    const [openModal, setOpenModal] = useState(false);

    const toggleModalHandler = () => {
        setOpenModal(!openModal);
    }

    return(
        <Box className="section-2-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="text-handler">
                <p className="bold-text">Our Purpose</p>
                <h1>Why We Do What We Do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum scelerisque odio id
                    imperdiet. Donec scelerisque luctus efficitur. Praesent tincidunt non felis at varius. Nam
                    egestas velit arcu, quis dignissim nulla suscipit non. Integer non lorem eget purus mattis aliquam.
                    Vivamus facilisis purus neque, eget auctor urna consectetur sit amet. Phasellus hendrerit enim in
                    faucibus mollis. Mauris vitae diam quis nibh efficitur eleifend. Nulla mollis, dui viverra
                    convallis luctus, lorem mauris lobortis erat, vitae blandit sem lectus sed ligula. Nulla consequat
                    tempus magna a congue</p>
                <span>
                    <p className="bold-text margin-top">Blockchain base Non-fungible tokens</p>
                    <p>uis dapibus sagittis commodo. In accumsan pretium diam sed aliquam. Aliquam mattis auctor
                        neque vitae tincidunt.</p>
                </span>
                <span>
                    <p className="bold-text margin-top">Saving endangered animals around the world</p>
                    <p>Duis dapibus sagittis commodo. In accumsan pretium diam sed aliquam. Aliquam mattis auctor
                        neque vitae tincidunt.</p>
                </span>
                <span>
                    <p className="bold-text margin-top">Help Raised money for select charities working</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </span>
                <Button variant="contained" onClick={() => toggleModalHandler()}>Discover Us</Button>
            </Box>
            <SimpleModal
                modalMessage="Button Discover Us is under construction"
                openModal={ openModal } toggleModalHandler={ toggleModalHandler } />
        </Box>
    );
}


export default Section2;
