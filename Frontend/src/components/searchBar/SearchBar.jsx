import React from "react";
import './searchbar.scss'
import { useState } from 'react';
function SearchBar() {




    const submitHandler = async () => {


        const data = {
            location: document.getElementsByName('location')[0].value,
            Area: document.getElementsByName('Area')[0].value,
            time: document.getElementsByName('time')[0].value
        }
        console.log(data)



    }


    return (
        <div className="searchBar">
            <div className="type">
                <form onSubmit={submitHandler}>
                    <input type="text" name="location" placeholder="City Location" />
                    <input type="number" name="Area" min={0} max={10000000} placeholder="Area Needed (BHK)" />
                    <input type="number" name="time" min={0} max={10000000} placeholder="Time Required (DAYS)" />
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;