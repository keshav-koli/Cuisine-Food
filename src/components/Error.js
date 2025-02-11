import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    
    return(
        <div className="error">
            <h1>404 Error</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            {/* <p>{err.error[0]}</p> */}
        </div>
    );
};
export default Error;
