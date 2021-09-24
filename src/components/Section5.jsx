import React from "react";

import Box from '@mui/material/Box';

import "./Section5.less";


const Section5 = ({ JSONData }) => {
    const { background_image, rarity, types, variations } = JSONData;

    const types_keys = Object.keys(types);
    const variations_keys = Object.keys(variations);

    return(
        <Box className="section-5-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="page-intro">
                <h1>For every NFT sale, Endangered Animals NFT</h1>
                <p>We will provide a portion of proceeds to go to specific charities dedicated to saving endangered
                    animals around the world.
                </p>
            </Box>
            <Box className="page-table">
                <h1>{ rarity.title }</h1>
                <p>{ rarity.description }</p>
                <Box className="table-handler">
                    <Box className="table-types">
                        <h1>Types</h1>
                        {types && types_keys.map((key, index) => {
                            return (
                                <span className={`row  ${index%2===0 ? "" : "even"}`} key={ key }>
                                    <p>{ types[key][0] }</p>
                                    <p>{ types[key][1] }</p>
                                </span>
                            );
                        })}
                    </Box>
                    <Box className="table-variations">
                        <h1>Variations</h1>
                        {variations && variations_keys.map((key, index) => {
                            return (
                                <span className={`row  ${index%2===0 ? "" : "even"}`} key={ key }>
                                    <p>{ variations[key][0] }</p>
                                    <p>{ variations[key][1] }</p>
                                </span>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export default Section5;
