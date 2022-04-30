import React, { useState, useEffect } from 'react';

/* axios */
import axios from 'axios';
import { baseURL } from '../userapi/UserApi';

const Main = () => {

    /* useEffect */
    useEffect(() => {
        axios.get(`${baseURL}/phonestore`)
            .then(res => {
                console.log(
                    "%cResponse:",
                    `background:linear-gradient(#e66465,#9198e5);
                    padding: 1rem;
                    color:#fff;
                    border-radius: 0.5em;
                    `,
                    res
                );
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>Main</div>
    )
}

export default Main
