import React from "react";
import { link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './Components.css';

const Welcome = () => {
    function squareNmuber(num) {
        return num * num;
    }
    return (
        <div>
            <link to="/about">
                <h1>
                    My Name is Jinya
                </h1>
            </link>
            <p>I'm a Web Developer</p>
            <link to="/project">
                <p>Projects</p>
            </link>
            <link to="/skills">
                <p>Skills</p>
            </link>
            <link to="/contact">
                <p>Contact</p>
            </link>
            <h1>{squareNmuber(5)}</h1>

            <button onClick={() => {
                const message = document.querySelector("#message");
                message.style.display = "block";

            }}>Show A Message</button>

            <div style={{ display: "none" }} id="message">
                <p>Hello!</p>
            </div>

        </div >
    )
}

export default Welcome;
