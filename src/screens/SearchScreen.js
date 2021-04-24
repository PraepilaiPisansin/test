import React, { Component } from "react";


export default class SearchScreen extends Component {
    render() {
        return (
            <div class="search">
                <form action="#">
                    <input type="text"
                        placeholder=" Search"
                        name="search"/>
                        <button>
                        <i class="bi bi-search"></i>
                        </button>
            </form>
        
            </div>
        );
    }
}