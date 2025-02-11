import { useEffect } from "react";

const About = () => {
  useEffect(() => {


    // after going in different component setInterval doesn't stop , to clean setInterval we have to user 
    let timer=setInterval(()=>{
      console.log("dsfa")
    },1000)

    //* by using this function we can clean the setInterval from continous execution  and this is working as a componentdidunmount
    return()=>{
      clearInterval(timer)
    }
  },[])




  return (
    <div className="about">
      <h1>About Us</h1>
      <h2>This is a about page</h2>
    </div>
  );
};
export default About;
