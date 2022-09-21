import React from 'react'
import './home.css'
import {Social} from "../home/Social"
import {Data} from "../home/Data"

export const Home = () => {
    return (
        <section className="home section" id="home">

            <div className="home__containter container grid">

                <div className="home__content grid">

                    <Social />
                    <img></img>
                    <Data />
                </div>
            </div>
        </section>
    )
}
