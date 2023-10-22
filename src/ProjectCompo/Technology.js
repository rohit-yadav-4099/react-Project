import React, { useContext } from "react";
import { Store } from "../ContextAPI/ContexApi";
import { NavLink } from "react-router-dom";
const Technology = () => {
    const [Data] = useContext(Store);
    console.log(Data);
    return (
        <>
            <h1 className="headingcompo">Technology</h1>
            <div className="maindiv">
                <div className="Imagemain">
                    {Data.filter((item) => item.id >= 57 && item.id <= 70).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={`/Navigate/${item.id}`}>
                                        <div className="Container1">
                                            <img
                                                className="AllImages"
                                                src={item.image}
                                                alt="Not Found"
                                            />
                                            <div className="AllText">
                                                <h2>{item.name}</h2>
                                                <p>{item.text.slice(0, 85)}...</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        }
                    )}
                </div>
                <div className="TopMain2">
                    <div>
                        <h1 className="Top">Top Post</h1>
                        <div>
                            {Data.filter((item) => item.id >= 59 && item.id <= 59).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="ArticleAllOne">
                                                <img
                                                    className="singleImageForAll"
                                                    src={item.image}
                                                    alt="Not Found"
                                                />
                                                <div className="ArticletextAllone1">
                                                    <h2>{item.text.slice(0, 60)}</h2>
                                                    <h1 className="bigno">{index + 1}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        {Data.filter((item) => item.id >= 60 && item.id <= 66).map(
                            (item, index) => {
                                return (
                                    <div className="toppostdiv">
                                        <div key={index} >
                                            <NavLink to={`/Navigate/${item.id}`}>
                                                <div className="Top2series">
                                                    <img
                                                        src={item.image}
                                                        alt="Not Found"

                                                        className="topsmallimg " />
                                                    <div className="Top2Text">
                                                        <h2>{item.name}</h2>
                                                        <p>{item.text.slice(0, 50)}</p>
                                                    </div>

                                                    <div className="number">
                                                        <h1>{index + 2}</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                        <div className="Advertise">
                            <h1>{"Advertisement"}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Technology;