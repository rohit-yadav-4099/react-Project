import React, { useContext } from "react";
import { Store } from "../ContextAPI/ContexApi";
import { NavLink } from "react-router-dom";
import Footer from "../ContextAPI/Footer";

const Homecom = () => {
    const [Data] = useContext(Store);
    return (
        <div className="Container">
            <div className="MAIN-IMAGE">
                <div className="aghori-img">
                    <img
                        src="https://s1.dmcdn.net/v/Up9ne1a9p7nl-ooxh/x1080"
                        alt="not found"
                    />
                </div>
                <div className="top-img">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg"
                        alt="not found"
                        height="160px"
                        width="460px"
                    />
                    <img
                        src="https://cdn.wallpapersafari.com/95/85/vjDSMT.jpg"
                        alt="not found"
                        height="160px"
                        width="460px"
                    />
                </div>
            </div>

            <h1 className="Latest-head">Latest</h1>
            <div className="LatestDiv">
                {Data.filter((item) => item.id >= 65 && item.id <= 67).map(
                    (item, index) => {
                        return (
                            <div key={index} className="HomeLatest">
                                <NavLink to={`/Navigate/${item.id}`}>
                                    <img
                                        className="latestimage"
                                        src={item.image}
                                        alt="Not Found"
                                    />
                                    <h2 className="Latest-txt-head">{item.name}</h2>
                                    <p className="Latest-txt">{item.text}</p>

                                </NavLink>
                            </div>
                        );
                    }
                )}
            </div>
            <h1 className="Article-head">Latest Articles</h1>
            <div className="ArticleContainer">
                <div className="secondcolum">
                    {Data.filter((item) => item.id >= 72 && item.id <= 77).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={`/Navigate/${item.id}`}>
                                        <div className="Article">
                                            <img
                                                className="Articleimages"
                                                src={item.image}
                                                alt="Not Found"
                                            />
                                            <div className="Articletext">
                                                <h1>{item.name}</h1>
                                                <p className="text">{item.text.slice(0, 90)}..</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        }
                    )}

                    <img
                        className="largeimg"
                        src="https://rukminim2.flixcart.com/image/850/1000/kylvr0w0/poster/a/t/k/medium-allu-arjun-pushpa-movie-matte-finish-poster-original-imagasp46rzdkhsn.jpeg?q=90"
                        alt="not found"
                    />
                </div>
                <div className="thirdcolumn">
                    <div className="Advertisement">
                        <h1>{"Advertisement"}</h1>
                    </div>
                    <div className="Toppost">
                        <h1>Top Posts</h1>
                        {Data.filter((item) => item.id >= 72 && item.id <= 75).map(
                            (item, index) => {
                                return (
                                    <div key={index} className="toppostArticle">
                                        <NavLink to={`/Navigate/${item.id}`}>
                                            <div className="toparticle">
                                                <img
                                                    className="TopArticleimg"
                                                    src={item.image}
                                                    alt="Not Found" />
                                                <div className="textt">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.text.slice(0, 60)}..</p>
                                                </div>
                                                <div className="number">
                                                    <h1>{index + 1}</h1>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
            <h1 className="Storiehead">Latest Stories</h1>
            <div className="StoriesDiv">
                {Data.filter((item) => item.id % 10 === 0 && item.id <= 30).map(
                    (item, index) => {
                        return (
                            <div key={index} className="HomeLatest">
                                <NavLink to={`/Navigate/${item.id}`}>
                                    <img
                                        className="latestimage"
                                        src={item.image}
                                        alt="Not Found" />
                                    <div className="last">
                                        <h2>{item.name}</h2>
                                        <p>{item.text.slice(0, 100)}..</p>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                )}

            </div>
        </div>
    );
};

export default Homecom;
