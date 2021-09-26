import React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.less";

import Headers from "./components/Headers.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import Section3 from "./components/Section3.jsx";
import Section4 from "./components/Section4.jsx";
import Section5 from "./components/Section5.jsx";
import Section6 from "./components/Section6.jsx";
import Footers from "./components/Footers.jsx";

import headerJSONData from '../json_data/header_json_data.json';
import sectionsJSONData from '../json_data/sections_json_data.json';
import footerJSONData from '../json_data/footer_json_data.json';

const theme = createTheme()

const App = () => {
    const { section_1, section_2, section_3, section_4, section_5, section_6 } = sectionsJSONData;

    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Container maxWidth={ false }>
                <Headers JSONData={ headerJSONData } />
                <Section1 JSONData={ section_1 } />
                <Section2 JSONData={ section_2 } />
                <Section3 JSONData={ section_3 } />
                <Section4 JSONData={ section_4 } />
                <Section5 JSONData={ section_5 } />
                <Section6 JSONData={ section_6 } />
                <Footers JSONData={ footerJSONData } />
            </Container>
        </ThemeProvider>
    );
}


export default App;
