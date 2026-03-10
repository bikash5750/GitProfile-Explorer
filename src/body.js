import { useEffect, useState } from "react"

function Body(){

    const [profile , setprofile] = useState([])
    const [numberofprofile , setnumberofprofile] = useState("") 
    async function generateprofile(count){

        if(!isNaN(count) && count !== ""){
             const ran = Math.floor(1+Math.random()*10000)
             const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
             const data = await response.json()

        setprofile(data)
        }
        else{
           const response = await fetch(
            `https://api.github.com/users/${count}`
             )
             const data = await response.json()
             if(data.message === "Not Found"){
                 setprofile([])
                 alert("User not found")
                }
                else{
                setprofile([data])
                }
        }
        
    }

     
    useEffect(()=>{
        generateprofile(10)
    },[])

    return(
        <>
         <div className="butt">
            <input type="text" className="inputtype" placeholder="Search here" value={numberofprofile} onChange={(e)=>setnumberofprofile(e.target.value)}/>
            <button onClick={()=>generateprofile(numberofprofile)}>Search Profile</button>
         </div>
         <div className="profiles">
                {profile.map((value) => (
                    <div key={value.id} className="cards">
                        <img src={value.avatar_url} />
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">
                            View Profile
                        </a>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Body
//all done