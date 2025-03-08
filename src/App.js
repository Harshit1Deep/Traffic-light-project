import React  from "react";
import Trafficlight from "./Trafficlight";
import "./style.css";


const trafficstates ={
  red:{
    duration:4000,
    backgroundColor:"red",
    next:"green"
  },
  yellow:{
    duration:600,
    backgroundColor:"yellow",
    next:"red"
  },
  green:{
    duration:5000,
    backgroundColor:"green",
    next:"yellow"
  }
};
export default function App()
{
  return(
    <div className="wrapper" >
      <Trafficlight trafficstates={trafficstates}/>
    </div>
  );
}
