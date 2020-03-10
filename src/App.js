import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import {image} from "./All images";
import './App.css';
import programsPage from "./Programs";
import newsPage from "./News";
import classesBase from "./Classes/Classes";
export default function Homepage() {
    return <Router>
        <head>
            <meta charSet={"utf-8"}/>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
            <meta http-equiv={"X-UA-Compatible"} content={"ie=edge"}/>
            <link rel={"stylesheet"} href={"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"} />
            <title>Walker career center</title>
        </head>

        <div>
            <article id={"topNav"}>
                <div>
                    {/*<img src={('./assets/images/logo-walker.png')} className="center img-responsive" alt="WCC Logo"/>;*/}
                    <img src={image(0)} className="center img-responsive" alt={"WCC Logo"}/>

                </div>
            </article>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark sticky-top"}>
                <NavLink to={"/"}><img src={image(1)} alt={"Wcc Logo"} className={"img-responsive"}/></NavLink>

                <button className={"navbar-toggler navbar-toggler-right"} type={"button"} data-toggle={"collapse"}
                        data-target={"#navb"}>
                    <span className={"navbar-toggler-icon"}/>
                </button>
                <div className={"collapse navbar-collapse"} id={"navb"}/>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item active"}>
                        <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
                    </li>
                    <li className={"nav-item "}>
                        <NavLink to={"/News"} className={"nav-link"}>News</NavLink>
                    </li>
                    <li className={"nav-item "}>
                        <NavLink to={"/Programs"} className={"nav-link"}>Programs</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <div className={"dropdown"}>
                            <a id={"class-search"} className={"btn btn-secondary dropdown-toggle"}
                               href={"www.google.com"}
                               role={"button"}
                               data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>classes</a>
                            <div className={"dropdown-menu"} aria-labelledby={"dropdownMenuLink"}>
                                <NavLink to={"/Classes"} className={"dropdown-item"}>Classes Template</NavLink>
                            </div>
                        </div>
                    </li>
                </ul>
                <form className={"form-inline my-2 my-lg-0"}>
                    <input className={"form-control mr-sm-2"} type={"text"} placeholder={"Search"}/>
                    <button className={"btn my-2 my-sm-0"} type={"button"}>Search</button>
                </form>
                <div>
                    <a href={"https://www.facebook.com/MSDWarrenTownship/"}><img src={image(5)} alt={"social face"}
                                                                                 height={40}/></a>
                    <a href={"https://twitter.com/msdwarren"}><img src={image(6)} height={40} alt={"social twitt"}/></a>
                </div>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path={'/Classes'}>
                    <Classes/>
                </Route>
                <Route path="/News">
                    <News/>
                </Route>
                <Route path="/Programs">
                    <Programs/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    </Router>;
}

function Home() {
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

function News() {
    return newsPage();
}

function Programs() {
  return programsPage();
}

function Classes(){
    return classesBase();
}