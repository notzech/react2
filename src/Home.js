import {image} from "./All images";
import React from "react";

export default function test4() {
    return <div>
        <section>
            <div id={"demo"} className={"carousel slide"} data-ride={"carousel"}>
                <ul className="carousel-indicators">
                    <li data-target={"#demo"} data-slide-to={"0"} className={"active"}/>
                    <li data-target={"#demo"} data-slide-to={"1"}/>
                    <li data-target={"#demo"} data-slide-to={"2"}/>
                </ul>
                <div className={"carousel-inner"}>
                    <div className={"carousel-item active"}>
                        <img src={image(2)} alt={"Homepage  1"} width={"100%"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img src={image(3)} alt={"Homepage  2"} width={"100%"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img src={image(4)} alt={"Homepage  3"} width={"100%"}/>
                    </div>
                    <a className={"}carousel-control-prev"} href={"#demo"} data-slide={"prev"}>
                        <span className={"carousel-control-prev-icon"}/>
                    </a>
                    <a className={"carousel-control-next"} href={"#demo"} data-slide={"next"}>
                        <span className={"carousel-control-next-icon"}/>
                    </a>
                </div>
            </div>
        </section>
        <section>
            <div className={"jumbotron about"}>
                <h1 className={"text-center display-3"}>
                    About
                </h1>
                <p className={"text-center"}>
                    The Walker Career Center is an educational establishment based in Indianapolis, Indiana. Walker
                    Career
                    Center serves students from Warren Central, New Palestine, Greenfield, Triton Central, Morristown
                    and
                    Mt. Vernon High Schools. The career center offers twenty programs that utilize state-of-the-art
                    equipment and technology that meet or exceeds industry standards. This website serves to give
                    insight
                    into what students do in daily life at the Walker Career Center and give better information for
                    students
                    about what they are signing up for instead of simply glancing at the course guide.
                </p>
            </div>
        </section>
        <section>
            <div id={"main"} className={"container-fluid row"}>

                <article className="col-lg-3 frame odd spacing">
                    <h2 className="text-center">Calendar</h2>
                    <hr/>
                    <div>
                        <div className="media border p-3">
                            <div className="media-body">
                                <h4>March 11</h4>
                                <p>Make Things Pretty</p>
                            </div>
                            <img src={image(7)} alt="John Doe"
                                 className="ml-3 mt-3 rounded-circle cal-logo"/>
                        </div>
                        <div className="media border p-3">
                            <img src={image(7)} alt="John Doe"
                                 className="mr-3 mt-3 rounded-circle cal-logo"/>
                            <div className="media-body">
                                <h4>March 12</h4>
                                <p>Therapy Melody</p>
                            </div>
                        </div>
                        <div className="media border p-3">
                            <div className="media-body">
                                <h4>March 13</h4>
                                <p>Yell at Github</p>
                            </div>
                            <img src={image(7)} alt="John Doe"
                                 className="ml-3 mt-3 rounded-circle cal-logo"/>
                        </div>
                        <div className="media border p-3">
                            <img src={image(7)} alt="John Doe"
                                 className="mr-3 mt-3 rounded-circle cal-logo"/>
                            <div className="media-body">
                                <h4>March 15</h4>
                                <p>Spring Breaaaaaak!</p>
                            </div>
                        </div>
                        <div className="media border p-3">
                            <div className="media-body">
                                <h4>March 18 - March 29</h4>
                                <p>Spring Break</p>
                            </div>
                            <img src={image(7)} alt="John Doe"
                                 className="ml-3 mt-3 rounded-circle"
                                 width={"width:60px;"}/>
                        </div>
                    </div>
                </article>


                <article className="col-lg-6 frame even">
                    <h2 className="text-center">Announcements</h2>
                    <div>

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#home">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu1">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu2">Clubs</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane container active" id="home">
                                <p className="text-center">
                                    empty
                                </p>
                            </div>
                            <div className="tab-pane container fade" id="menu1">
                                <p className="text-center">
                                    empty
                                </p>
                            </div>
                            <div className="tab-pane container fade" id="menu2">
                                <p className="text-center">
                                    empty
                                </p>
                            </div>
                        </div>
                    </div>
                </article>


                <article className="col-lg-3 frame odd spacing">
                    <h2 className="text-center">Social Media</h2>
                    <hr/>
                    <div>

                    </div>
                </article>
            </div>
        </section>


        <footer id={"footer"}>


            <div>
                <p className={"text-center"}>
                    blank
                </p>
            </div>
        </footer>
    </div>;
}