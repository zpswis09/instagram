import React, {Component} from "react";
import './NavBar.css';
import Search from "./Search/Search";
import img from "./img/insta_logo.png";
import Modal from "./Modal/Modal";
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'navbar'}>
                <div className="navbar__barContent">
                    <div className='logo-containers'>
                        <div className={'logo-container'}>
                            <Link to={'/instagram'}>
                                <img className='navbar_logo' src={img} alt='logo' />
                            </Link>
                        </div>
                    </div>
                    <div className='Search-container'>
                        <Search/>
                    </div>
                    <div className='modal-container'>
                        <Modal/>
                    </div>
                </div>
            </div>
        )
    }
}


export default NavBar;

