import React,{useCallback,useEffect,useState} from "react";
import reactDOM from "react-dom/client"
import "./style.css"
import Header from "./src/header";
import Body from "./src/body";

function GithubProfile(){


    return(
        <>
            <Header></Header>
            <Body></Body>

        </>
    )

}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<GithubProfile/>)