import React, { useState } from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';

import "./Section1.less";

import SimpleModal from "./overlayComponents/SimpleModal.jsx";


const Section1 = ({ JSONData }) => {
    const { background_image, content } = JSONData;
    const{ currentValue, totalValue } = content;

    const [openModal, setOpenModal] = useState(false);

    const toggleModalHandler = () => {
        setOpenModal(!openModal);
    }

    return (
        <Box className="section-1-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="group-info">
                <h1>NFT To Save</h1>
                <h1>Endangered Animals</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum scelerisque odio id
                    imperdiet. Donec scelerisque luctus efficitur. Praesent tincidunt non felis at varius.</p>
                <Button variant="contained" onClick={() => toggleModalHandler()}>
                    Save the Flying Frogs
                </Button>
                <p>{ currentValue } of { totalValue } Available</p>
            </Box>
            <SimpleModal
                modalMessage="Button Save the Flying Frogs is under construction"
                openModal={ openModal } toggleModalHandler={ toggleModalHandler } />
        </Box>
    );
}


export default Section1;
