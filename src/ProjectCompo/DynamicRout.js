import React, { useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Store } from "../ContextAPI/ContexApi";

const Navigate = () => {
    const [newitem] = useContext(Store);
    const { id } = useParams();
    const itemId = parseInt(id);
    const navii = useNavigate()
    const selectedItem = newitem.find((item) => item.id === itemId);
    const categorynew = selectedItem ? selectedItem.category : "";
    const relatedItems = newitem

        .filter(
            (item) =>
                item.category === categorynew &&
                (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
        )
        .slice(1, 4);
    console.log(categorynew);

    return (
        <div>
            <div className="ParentTop">
                <div className="detail">
                    <h1>{selectedItem.name}</h1>
                    <h1>{selectedItem.title}</h1>
                    <div className="socialProfile">


                        <div className="Profile">
                            <img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" className="pic"
                                alt="Not Found"></img>
                            <h4 className="name">Rohit Yadav</h4>
                        </div>
                        <div className="Socialmedia">
                            <a href="https://www.facebook.com/profile.php?id=100016012260785" target="_blank" rel="noopener noreferrer">
                                <img className="sicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="Not Found" />
                            </a>

                            <a href="https://github.com/rohit-yadav-4099" target="_blank" rel="noopener noreferrer">
                                <img className="sicon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='Not Found' />
                            </a>

                            <a href="https://www.instagram.com/rohit_yadav_4099/" target="_blank" rel="noopener noreferrer">
                                <img className='sicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found' />
                            </a>

                            <a href="https://www.linkedin.com/in/rohit-yadav-21404124b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bzmc3vt9IR4ug2%2FdBZVF5gQ%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img className="sicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found" />
                            </a>

                        </div>
                    </div>
                    <img
                        className="NavigateImg"
                        src={selectedItem.image}
                        alt="not found"

                    />
                    <br />
                    <p className="navitext">{selectedItem.text}</p>
                    <p>{selectedItem.content}</p>
                </div>
                <div className="rightDetails"></div>
            </div>
            <div className="LatestDiv  navigateimg2">
                {relatedItems.map((item, index) => (
                    <div key={index} className="HomeLatest">
                        <NavLink to={`/Navigate/${item.id}`}>
                            <img className="latestimage" src={item.image} alt="Not Found" />
                            <div className="text4">
                                <h2>{item.title}</h2>
                                <h2>{item.name}</h2>
                                <p>{item.text.slice(0, 180)}</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className="btn">
                <button onClick={() => navii(-1)} className="backbutton">Back</button>
            </div>
        </div>
    );
};

export default Navigate;