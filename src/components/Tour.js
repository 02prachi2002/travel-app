import Card from "./Card";
import './Tour.css';
function Tour({tours, removetour}){
    return(
        <div>
            <div className="heading">
                <h1>Plan my Tours</h1></div>
            <div className="carddiv">
                {
                    tours.map((tour) => {
                        return <Card {...tour} removetour={removetour}></Card>
                    }

                    )
                }
            </div>
        </div>
    );
}
export default Tour;