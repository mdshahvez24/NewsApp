import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/Images/no pic.jpg"
export default function NewsItem(props) {
    return (
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
            <div className="card">
                <img src={props.pic ? props.pic : pic} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title heading">{props.title ? props.title.slice(0, 100) + "..." : ""}</h5>
                    <p className="card-text text-center" style={{ fontSize: "13px" }}>Date : {props.date}</p>
                    <p className="card-text source">{props.source}</p>
                    <p className="card-text desc">{props.description}</p>
                    <Link to={props.url} className="btn mybtn background text-light w-100">Read Full Article</Link>
                </div>
            </div>
        </div>
    )
}
