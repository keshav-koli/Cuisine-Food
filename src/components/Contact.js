import UserClass from "./UserClass";
import React from "react";
class Contact extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor");
        
    }

    componentDidMount(){
        console.log("parent component did mounted");
    }

    render(){
        console.log("parent render");
        return(
            
            <div className="contact">
            <h1>Contact Us</h1>
            <h2>+91 78451596324</h2>
            <UserClass  name={"keshav"} location={"newdelhi"}/>
            {/* <UserClass name={"ram"} location={"olddelhi"}/> */}
        </div>
        )
    }
}



// const Contact=()=>{
//     return(
//         <div className="contact">
//             <h1>Contact Us</h1>
//             <h2>+91 78451596324</h2>
//             <UserClass  name={"keshav"} location={"newdelhi"}/>
//         </div>
//     );
// };
export default Contact;