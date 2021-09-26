import React, {useState} from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CopyrightIcon from '@mui/icons-material/Copyright';

import "./Footers.less";

import SimpleModal from "./overlayComponents/SimpleModal.jsx";


const Footers = ({ JSONData }) => {
    const {
        background_image,
        button_image,
        flyers_figures: { current_value, total_value },
        social_icons: { facebook, instagram, twitter, youtube }
    } = JSONData;

    const [modalMessage, setModalMessage] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const toggleModalHandler = (message="") => {
        setModalMessage(message);
        setOpenModal(!openModal);
    }

    return(
        <Box className="footers-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="flyers-figures">
                <Button
                    variant="contained"
                    style={{ backgroundImage: `url(${button_image})` }}
                    onClick={() =>
                        toggleModalHandler("\"Save the Flying Frogs\" button is under construction")
                    }
                />
                <p>{ current_value } of { total_value } available </p>
            </Box>

            <span className="footer-icon-info">
                <span className="icon-group">
                    <img
                        src={ facebook }
                        alt="facebook-icon"
                        onClick={() =>
                            toggleModalHandler("\"facebook icon\" button is under construction")
                        } />
                    <img
                        src={ instagram }
                        alt="instagram-icon"
                        onClick={() =>
                            toggleModalHandler("\"instagram icon\" button is under construction")
                        } />
                    <img
                        src={ twitter }
                        alt="twitter-icon"
                        onClick={() =>
                            toggleModalHandler("\"twitter icon\" button is under construction")
                        } />
                    <img
                        src={ youtube }
                        alt="youtube-icon" onClick={() =>
                        toggleModalHandler("\"youtube icon\" button is under construction")
                    } />
                </span>
                <span className="copyright-group">
                    <CopyrightIcon />
                    <p>2021 Endangered Animals NFT. All rights</p>
                </span>
            </span>
            <SimpleModal
                modalMessage={ modalMessage }
                openModal={ openModal }
                toggleModalHandler={ toggleModalHandler }/>
        </Box>
    );
}


export default Footers;
