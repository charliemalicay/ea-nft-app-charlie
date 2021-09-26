import React, {useState} from "react";

import Box from '@mui/material/Box';

import "./Section4.less";
import Button from "@mui/material/Button";
import SimpleModal from "./overlayComponents/SimpleModal.jsx";


const Section4 = ({ JSONData }) => {
    const { background_image } = JSONData;

    const [openModal, setOpenModal] = useState(false);

    const toggleModalHandler = () => {
        setOpenModal(!openModal);
    }

    return(
        <Box className="section-4-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="inner-info">
                <p className="bold-text">Our Platform</p>
                <h1>What We Do</h1>
                <p className="description-text">Our vision for Endangered Animals NFT is to create an ecosystem
                    built around interaction, utility, community rewards and growth through brand collection.
                </p>
                <Button variant="contained" onClick={() => toggleModalHandler()}>Discover Us</Button>
            </Box>
            <SimpleModal
                modalMessage="Button Discover Us is under construction"
                openModal={ openModal } toggleModalHandler={ toggleModalHandler } />
        </Box>
    );
}


export default Section4;
