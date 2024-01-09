import { useState } from "react";
import './Card.css';

function Card({id, name,info,pic,price, removetour}){
   
    const [readmore, setreadmore] = useState(false);

    const description  = readmore ? info :`${info.substring(0,200)}...`;
    function readmorehandler(){
        setreadmore(!readmore);
    }
    return(
        <div className="topcard">
             <div className="card">
            <div className="img">
                <img src={pic}alt="image was here" width={350} height={320}></img>
            </div>
            <div className="tour-details">
                <div className="price">{price}</div>
                <div className="name">{name}</div>
                <div className="desc">
                    {description}
                <span className="readmore" onClick={readmorehandler}>
                    {readmore ? `show less` : `show more`}
                </span>
                    </div>
            </div>
           <button onClick={() => removetour(id)}>Not Interested</button>

        </div>
        </div>
       
    );
}
export default Card;