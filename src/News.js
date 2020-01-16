import {image} from "./All images";
import React from "react";

export default function test3() {
    return <div>
        <section>
            <div id={"main"} className={"container row"}>
                <article id={"annoucements"} className={"col-lg-5 frame"} >
                    <h2 className={"text-center"}>Upcoming Events</h2>
                    <hr/>
                    <div>
                        <div className={"media border p-3"}>
                            <div className={"media-body"}>
                                <h4>March 11</h4>
                                <p>Make Things Pretty</p>
                            </div>
                            <img src={image(8)} alt={"John Doe"} className={"ml-3 mt-3 rounded-circle cal-logo"}/>
                        </div>
                        <div className={"media border p-3"}>
                            <img src={image(8)} alt={"John Doe"} className={"ml-3 mt-3 rounded-circle cal-logo"}/>
                            <div className={"media-body"}>
                                <h4>March 12</h4>
                                <p>Therapy Melody</p>
                            </div>
                        </div>
                        <div className={"media-body"}>
                            <h4>March 13</h4>
                            <p>Yell at Github</p>
                            <img src={image(8)} alt={"John Doe"} className={"ml-3 mt-3 rounded-circle cal-logo"}/>
                        </div>
                        <div className={"media border p-3"}>
                            <img src={image(8)} alt={"John Doe"} className={"ml-3 mt-3 rounded-circle cal-logo"}/>
                            <div className={"media-body"}>
                                <h4>March 15</h4>
                                <p>Spring Breaaaaak!</p>
                            </div>
                        </div>
                        <div className={"media-body"}>
                            <h4>March 18 - March 29</h4>
                            <p>Spring Break</p>
                            <img src={image(8)} alt={"John Doe"} className={"ml-3 mt-3 rounded-circle cal-logo"}/>
                        </div>
                    </div>
                </article>
                <article className={ "col-lg-2"}/>
                <article className={"col-lg-5 frame"}>
                    <h2 className={"text-center"}>Teacher Messages</h2>
                    <hr/>
                    <div>
                        <div className={"media border p-3"}>
                            <div className={"media-body"}>
                                <h4>Mr. Law <small><i>Posted on February 19, 2016</i></small></h4>
                                <p>Auto-Laws are the best.</p>
                            </div>
                            <img src={image(9)} alt={"Mr. Law"} className={"ml-3 mt-3 rounded-circle"}/>
                        </div>
                        <div className={"media border p-3"}>
                            <div className={"media-body"}>
                                <h4>Mr. Law <small><i>Posted on February 19, 2016</i></small></h4>
                                <p>Perfect A's for the Auto-Laws!</p>
                            </div>
                            <img src={image(9)} alt={"Mr. Law"} className={"ml-3 mt-3 rounded-circle"}/>
                        </div>
                        <div className={"media border p-3"}>
                            <div className={"media-body"}>
                                <img src={image(10)} alt={"Mr. Law"} className={"ml-3 mt-3 rounded-circle"}/>
                                <h4>Mr. Espich <small><i>Posted on February 19, 2016</i></small></h4>
                                <p> This website is cool.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <footer id={"footer"}>
            <div className={""}>
                <h1 className={"text-center display-3"}>Footer</h1>
            </div>
        </footer>
    </div>;
}