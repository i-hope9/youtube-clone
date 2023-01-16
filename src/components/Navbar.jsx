import React from "react";
import { Link } from 'react-router-dom';
import Search from "./Search";

export default function Navbar() {
    return <>
        <nav>
            <Link to='/'>Youtube</Link >
            <Search />
        </nav>
    </>
};