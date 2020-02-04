import React from 'react';
import ReactDOM from 'react-dom';
import './classInfo.css';
import logo from "./assets/images/logo-walker.png";
import worded from "./assets/images/WCC-worded-logo.png";
import facebooklogo from "./assets/images/facebook-logo.png";
import twitterlogo from "./assets/images/twitter-logo.png";


function template() {

    return <div>
        <article id={"topNav"}>
            <div>
                {/*<img src={('./assets/images/logo-walker.png')} className="center img-responsive" alt="WCC Logo"/>;*/}
                <img src={logo} className="center img-responsive" alt={"WCC Logo"}/>

            </div>
        </article>
        <nav className={"navbar navbar-expand-sm bg-dark navbar-dark sticky-top"}>
            <a className={"navbar-brand"} href={"./public/index.html"}><img src={worded} alt={"Wcc Logo"}
                                                                            className={"img-responsive"}/></a>
            <button className={"navbar-toggler navbar-toggler-right"} type={"button"} data-toggle={"collapse"}
                    data-target={"#navb"}>
                <span className={"navbar-toggler-icon"}/>
            </button>

            <div className={"collapse navbar-collapse"} id={"navb"}/>
            <ul className={"navbar-nav mr-auto"}>
                <li className={"nav-item active"}>
                    <a className={"nav-link"} href={".public/index.html"}>
                        Home
                    </a>
                </li>
                <li className={"nav-item "}>
                    <a className={"nav-link"} href={"./src/news.html"}>
                        News
                    </a>
                </li>
                <li className={"nav-item "}>
                    <a className={"nav-link"} href={"./src/pathways-clubs.html"}>
                        Programs
                    </a>
                </li>
                <li className={"nav-item"}>
                    <div className={"dropdown"}>

                        <a id={"class-search"} className={"btn btn-secondary dropdown-toggle"} href={"www.google.com"}
                           role={"button"}
                           data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>classes</a>

                        <div className={"dropdown-menu"} aria-labelledby={"dropdownMenuLink"}>
                            <h6 className={"dropdown-header"}>Completed Pages</h6>
                            <div className={"dropdown-divider"}/>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Cosmetology</a>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Commercial Photography</a>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Radio Broadcasting &
                                Production</a>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Nutrition & Wellness</a>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Computer Science</a>
                            <a className={"dropdown-item"} href={"./public/index.html"}>Health Science</a>
                            <br/>
                            <h6 className={"dropdown-header"}>Incomplete Pages</h6>
                            <div className={"dropdown-divider"}/>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Welding</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Dental</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>PLTW</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Finance</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Video Broadcasting</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Graphic design</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Culinary Arts</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Education Profession</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Threshold</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Robo</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Auto Collision Repair</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Architectural Drafting & Design</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Computer Networking</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Auto Service Tech</a>
                            <a id={"dropdown-item"} href={"./public/index.html"}>Early Childhood Ed</a>

                        </div>
                    </div>
                </li>
            </ul>
            <form className={"form-inline my-2 my-lg-0"}>
                <input className={"form-control mr-sm-2"} type={"text"} placeholder={"Search"}/>
                <button className={"btn my-2 my-sm-0"} type={"button"}>Search</button>
            </form>
            <div>
                <a href={"https://www.facebook.com/MSDWarrenTownship/"}><img src={facebooklogo} alt={"social face"}
                                                                             height={40}/></a>
                <a href={"https://twitter.com/msdwarren"}><img src={twitterlogo} height={40} alt={"social twitt"}/></a>
            </div>

        </nav>


    </div>
}


export default template();