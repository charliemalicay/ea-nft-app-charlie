import React, { useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./Headers.less";

import SimpleModal from "./overlayComponents/SimpleModal.jsx";


const Headers = ({ JSONData }) => {
    const { logo_image, sections, title } = JSONData;

    const [openModal, setOpenModal] = useState(false);

    const toggleModalHandler = () => {
        setOpenModal(!openModal);
    }

    return (
        <Box className="headers-container">
            <img src={ logo_image } alt={ title }/>
            <Box className="nav-group">
                {sections && sections.map((item, index) => {
                    return (
                        <Box key={ index } className={`nav-item ${item.length > 10 && "extra-grow"}`}>
                            <p>{ item }</p>
                        </Box>
                    )
                })}
            </Box>
            <Button variant="contained" onClick={() => toggleModalHandler()}>Connect</Button>
            <SimpleModal
                modalMessage="Button Connect is under construction"
                openModal={ openModal } toggleModalHandler={ toggleModalHandler } />
        </Box>
    );
}

export default Headers;
