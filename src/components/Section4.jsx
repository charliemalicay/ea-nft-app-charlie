import React from "react";

import Box from '@mui/material/Box';

import "./Section4.less";
import Button from "@mui/material/Button";


const Section4 = ({ JSONData }) => {
    const { background_image } = JSONData;

    return(
        <Box className="section-4-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="inner-info">
                <p className="bold-text">Our Platform</p>
                <h1>What We Do</h1>
                <p className="description-text">Our vision for Endangered Animals NFT is to create an ecosystem
                    built around interaction, utility, community rewards and growth through brand collection.
                </p>
                <Button variant="contained">Discover Us</Button>
            </Box>
        </Box>
    );
}


export default Section4;
