import React, {Component} from "react";
import {NavBar} from "../NavBar/NavBar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Fotter/Footer";
import {Banner} from "../Banner/Banner";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}