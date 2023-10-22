import React, { useContext } from "react";
import { Store } from "../ContextAPI/ContexApi";
import { NavLink } from "react-router-dom";
const Fitness = () => {
    const [Data] = useContext(Store);
    console.log(Data);
    return (
        <>
            <h1 className="headingcompo">Fitness </h1>
            <div className="maindiv">
                <div className="Imagemain">
                    {Data.filter((item) => item.id >= 43 && item.id <= 56).map(
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
                                                <p>{item.text.slice(0, 80)}...</p>
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
                            {Data.filter((item) => item.id >= 44 && item.id <= 44).map(
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
                        {Data.filter((item) => item.id >= 45 && item.id <= 51).map(
                            (item, index) => {
                                return (
                                    <div key={index} className="toppostdiv">
                                        <NavLink to={`/Navigate/${item.id}`}>
                                            <div className="Top2series">
                                                <img
                                                    src={item.image}
                                                    alt="Not Found"
                                                    height="120px"
                                                    width="200px"
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

export default Fitness;