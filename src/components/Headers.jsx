import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./Headers.less";


const Headers = ({ JSONData }) => {
    const { logo_image, sections, title } = JSONData;

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
            <Button variant="contained">Connect</Button>
        </Box>
    );
}

export default Headers;
