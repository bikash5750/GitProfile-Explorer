import { useEffect, useState } from "react"

function Body(){

    const [profile , setprofile] = useState([])

    async function generateprofile(){
        const response = await fetch("https://api.github.com/users?per_page=10")
        const data = await response.json()

        setprofile(data)
    }

     
    useEffect(()=>{
        generateprofile()
    },[])

    return(
        <div className="profiles">
            {
                profile.map((value)=>(
                    <div key={value.id} className="cards">
                        <img src={value.avatar_url} />
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">
                            View Profile
                        </a>

                    </div>
                ))
            }
        </div>
    )
}

export default Body