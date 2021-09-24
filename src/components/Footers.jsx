import React from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CopyrightIcon from '@mui/icons-material/Copyright';

import "./Footers.less";


const Footers = ({ JSONData }) => {
    const {
        background_image,
        button_image,
        flyers_figures: { current_value, total_value },
        social_icons: { facebook, instagram, twitter, youtube }
    } = JSONData;

    return(
        <Box className="footers-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="flyers-figures">
                <Button variant="contained" style={{ backgroundImage: `url(${button_image})` }} />
                <p>{ current_value } of { total_value } available </p>
            </Box>

            <span className="footer-icon-info">
                <span className="icon-group">
                    <img src={ facebook } alt="facebook-icon" />
                    <img src={ instagram } alt="instagram-icon" />
                    <img src={ twitter } alt="twitter-icon" />
                    <img src={ youtube } alt="youtube-icon" />
                </span>
                <span className="copyright-group">
                    <CopyrightIcon />
                    <p>2021 Endangered Animals NFT. All rights</p>
                </span>
            </span>
        </Box>
    );
}


export default Footers;
