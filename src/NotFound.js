import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>Page could not be found.....</p>
            <Link to="/">Back to home page..!</Link>
        </div>
     );
}
 
export default NotFound;