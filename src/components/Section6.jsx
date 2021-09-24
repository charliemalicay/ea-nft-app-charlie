import React from "react";

import Box from '@mui/material/Box';

import "./Section6.less";


const Section6 = ({ JSONData }) => {
    const { background_image, highlight_section } = JSONData;

    return(
        <Box className="section-6-container" style={{ backgroundImage: `url(${background_image})` }}>
            <p className="bold-text">Ublocks</p>
            <h1>The Roadmap</h1>
            <p className="description-text">
                Exclusive Access of the new developments, projects in the works/future releases that will come.
            </p>
            <span className="row-1">
                <p className="bold-text-inner">{ highlight_section.hs1.title }</p>
                <p>{ highlight_section.hs1.description }</p>
            </span>
            <span className="row-2">
                <p className="bold-text-inner">{ highlight_section.hs2.title }</p>
                <p>{ highlight_section.hs2.description }</p>
            </span>
            <span className="row-3">
                <p className="bold-text-inner">{ highlight_section.hs3.title }</p>
                <p>{ highlight_section.hs3.description }</p>
            </span>
            <span className="row-4">
                <p className="bold-text-inner">{ highlight_section.hs4.title }</p>
                <p>{ highlight_section.hs4.description }</p>
            </span>
            <span className="row-5">
                <p className="bold-text-inner">{ highlight_section.hs5.title }</p>
                <p>{ highlight_section.hs5.description }</p>
            </span>
        </Box>
    );
}


export default Section6;
