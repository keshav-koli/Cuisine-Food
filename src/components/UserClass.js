import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
    this.state = {
      // count:0,
      userInfo: {
        name: "ram",
        location: "delhi",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name+" component did mount");

    //* Github Api Logic for understanding class based life cycle
    let response = await fetch("https://api.github.com/users/keshav-koli");
    let data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
  }

  componentWillUnmount(){
    console.log("Component will unmount");
    
  }

  render() {
    // const {name,location}=this.props;
    // const{count}=this.state
    // console.log(this.props.name+" render");

    const { name, location,avatar_url } = this.state.userInfo;

    return (
      <div className="UserClass">
        <h1>contact page</h1>
        //!===========================
        {/* <h3>count :{count}</h3>
        <button onClick={()=>{
          // Never update the state variable directly
          this.setState({
             count:this.state.count+1,
          })
        }}> count increase</button> */}
        <h2>Hello</h2>
        <h1>Name :{name}</h1>
        <h4>Location :{location}</h4>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
