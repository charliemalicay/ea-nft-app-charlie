import React from "react";

import Box from '@mui/material/Box';

import "./Section3.less";


const Section3 = ({ JSONData }) => {
    const { background_image, content_categories } = JSONData;
    const { category_1, category_2, category_3 } = content_categories;

    return(
        <Box className="section-3-container" style={{ backgroundImage: `url(${background_image})` }}>
            <Box className="text-handler">
                <p className="bold-text margin-top-50">Our Focus</p>
                <h1>How we do it</h1>
                <p className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper
                    turpis. Maecenas sed neque vitae metus sagittis convallis vitae convallis diam. Vestibulum a
                    augue commodo, auctor quam a, condimentum magna. Aliquam lacinia, justo ac suscipit aliquet, urna
                    ipsum vulputate leo, fringilla volutpat diam dolor sodales magna. In diam urna, aliquet facilisis
                    arcu id, pellentesque porta nulla. Maecenas quis odio ipsum. Nullam ut sapien dapibus, rhoncus
                    ipsum et, blandit tellus.
                </p>
            </Box>
            <Box className="image-handler">
                <div className="image-item image-1" style={{ backgroundImage: `url(${ category_1.image_url })` }}>
                    <p>{ category_1.description }</p>
                </div>
                <div className="image-item image-2" style={{ backgroundImage: `url(${ category_2.image_url })` }}>
                    <p>{ category_2.description }</p>
                </div>
                <div className="image-item image-3" style={{ backgroundImage: `url(${ category_3.image_url })` }}>
                    <p>{ category_3.description }</p>
                </div>
            </Box>
        </Box>
    );
}


export default Section3;
