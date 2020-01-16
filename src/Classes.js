import {image} from "./All images";
import React from "react";
 import './classInfo.css';
export default function test2(){
    return  <div>
        <section>
            <h1 className={"jumbotron display-1 text-center class-name"}>
                Program Name
            </h1>
        </section>
        <section>
            <div id={"demo"} className={"carousel slide"} data-ride={"carousel"}>
                <ul className={"carousel-indicators"}>
                    <li data-target={"#demo"} data-slide-to={"0"} className={"active"}/>
                    <li data-target={"#demo"} data-slide-to={"1"}/>
                    <li data-target={"#demo"} data-slide-to={"2"}/>
                </ul>
                <div className={"carousel-inner"}>
                    <div className={"carousel-item active"}>
                        <img src={image(11)} alt={""} width={"100%"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img src={image(11)} alt={""} width={"100%"}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image(11)} alt={""} width={"100%"}/>
                    </div>
                </div>
                <a className={"carousel-control-prev"} href={"#demo"} data-slide={"prev"}>
                    <span className={"carousel-control-prev-icon"}/>
                </a>
                <a className={"carousel-control-next"} href={"#demo"} data-slide={"next"}>
                    <span className={"carousel-control-next-icon"}/>
                </a>
            </div>
        </section>
        <section>
            <div className={"jumbotron overview"}>
                <h1 className={"text- center"}>
                    Program Overview
                </h1>
                <p className={"text-center"}>
                    Lorem ipsum dolor sit amet, consect
                    etur adipiscing elit, sed do eiusmod t
                    empor incididunt ut labore et dolore magna a
                    liqua. Ipsum suspendisse ultrices gravida dictum.
                    Ipsum dolor sit amet consectetur. Neque ornare aenean eu
                    ismod elementum nisi quis eleifend quam. Dictumst vestibulum
                    rhoncus est pellentesque. Sed ullamcorper morbi tincidunt ornare
                    massa eget egestas purus. Sed ullamcorper morbi tincidunt ornare
                    massa eget egestas purus.Sed ullamcorper morbi tincidunt ornare
                    massa eget egestas purus.Sed ullamcorper morbi tincidunt ornare
                    cing elit, sed do eiusmod t
                </p>
            </div>
        </section>
        <section>
            <div id={"main"} className={"row"}>
                <article id={"info"} className={"container col-lg-6"}>
                    <div id={"desc"} className={"frame"}>
                        <br/>
                        <h2 className={"text-center"}>Class Information</h2>
                        <br/>
                        <div>
                            <ul className={"nav nav-tabs"}>
                                <li className={"nav-item"}>
                                    <a className={"nav-link active"} data-toggle={"tab"} href={"#home"}>General</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} data-toggle={"tab"} href={"#menu1"}>Classes</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} data-toggle={"tab"} href={"#menu2"}>Clubs</a>
                                </li>
                            </ul>
                            <div className={"tab-content"}>
                                <div className={"tab-pane container active"} id={"home"}>
                                    <p>
                                        <br/>

                                        {/*<hr style={"border-color: white"}/>*/}
                                    </p>
                                </div>
                                <div className={"tab-pane container fade"} id={"menu1"}>
                                    <p>
                                        <br/>

                                        {/*<hr style={"border-color: white"}/>*/}
                                    </p>
                                </div>
                                <div className={"tab-pane container fade"} id={"menu2"}>
                                    <p>
                                        <br/>

                                        {/*<hr style={"border-color: white"}/>*/}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={"opp-pro"} className={"frame"}>
                        <div className={"container"}>
                            <br/>
                            <h1 className={"text-center"}>Opportunities & Partnerships</h1>
                            {/*<hr style={"border-color: black"}/>*/}
                            <div className={"box"}>
                                <img src={image(11)} alt={""} width={"25%"} className={"center opp"}/>
                                <div className={"overlay"}>
                                    <div className={"opp-info"}>Hello World</div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </article>
                <article id={"teacher-info"} className={"container col-lg-3"}>
                    <div id={"picture"}>
                        <div id={"banner"} className={"text-center"}>
                            <h4>Teacher Name</h4>
                        </div>
                    </div>
                    <div id={"class-news"} className={"frame-a"}>
                        <h1 className={"text-center"}>Student Testimonies</h1>
                        <div className={"media border p-3"}>
                            <div className={"media-body"}>
                                <h4>Mr. Law <small><i>Posted on February 19, 2016</i></small></h4>
                                <p>Auto-Laws are the best.</p>
                            </div>
                            <img src={image(10)} alt={"Mr. Law"} className={"ml-3 mt-3 rounded-circle"}/>
                            <p>I need to get the Auto-Laws food...</p>
                        </div>
                    </div>
                    <div className={"media border p-3"}>
                        <div className={"media-body"}>
                            <h4>Mr. Law <small><i>Posted on February 19, 2016</i></small></h4>
                            <p>Perfect A's for the Auto-Laws!</p>
                        </div>
                        <img src={image(9)} alt={"Mr. Law"} className={"ml-3 mt-3 rounded-circle"}/>
                    </div>
                </article>
            </div>
        </section>
        <footer id={"footer"} className={""}>
            <div className={""}>
                <h1 className={"text-center display-3"}>Footer</h1>

            </div>
        </footer>
    </div>
}