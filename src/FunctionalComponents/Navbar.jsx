import React, { useState } from 'react'
import "../assets/css/style.css"
import { Link } from "react-router-dom"
export default function Navbar(props) {
    let [input, setinput] = useState("None")
    function getData(e) {
        setinput(e.target.value)
    }
    function search(e) {
        e.preventDefault()
        props.changeSearch(input)
    }
    return (
        <nav className="navbar navbar-expand-lg background sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to="/">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/politics">Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/crime">Crime</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/education">Education</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/technology">Technology</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/science">Science</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Jokes">Jokes</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Article-Size
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changePageSize("8")}>8</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changePageSize("12")}>12</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changePageSize("16")}>16</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => props.changePageSize("20")}>20</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={search}>
                        <input className="form-control me-2" onChange={getData} name='input' type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
