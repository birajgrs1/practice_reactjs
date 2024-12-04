import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


const Demo = (props) => {
    let foodItems = props.foodItems; 
    
    //   let foodItems = [];

    //   Using conditions / conditional rendering
    /*
    if(foodItems.length === 0){
        return <h3>No fooditems available here!!!</h3>
    }
    */

    return (
        /*
        <React.Fragment>
         <h2>Child-1</h2>   
        <p> Child-2</p> 
        ...
        ...
        </React.Fragment>

        using shorthand:
        <>
        ...
        ...
        ...
        </>
        */

        // Using map method

        <>
            <h2>Healthy Foods</h2>
            {/* Using ternary operator */}
            {foodItems.length === 0 ? <h2>No Fooditems available here!</h2> : null}
            <ul className="list-group">
                {/* <li className="list-group-item">Roti</li>
                <li className="list-group-item">Dal</li>
                <li className="list-group-item">Green Vegetables</li>
                <li className="list-group-item">Milk</li>
                <li className="list-group-item">Rice</li> */}

                {foodItems.map((items, index) => (
                    <li key={index} className="list-group-item">
                        {items}
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Demo;
