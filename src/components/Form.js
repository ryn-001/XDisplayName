import {useState} from "react"

export default function Form(){
    const [name,setName] = useState({
        fname: "",
        lname: "",
        submittedFName: "",
        submittedLName: ""
    })

    const handleChange = (e) => {
        setName({
            ...name,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName({
            ...name,
            submittedFName : name.fname,
            submittedLName : name.lname,
        })
    }

    return(
        <>
            <h1>Full Name Display</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name: </label>
                <input required type="text" name="fname" id="fname" onChange={handleChange}/> <br/>

                <label htmlFor="lname">Last Name: </label>
                <input required type="text" name="lname" id="lname" onChange={handleChange}/> <br/>

                <button type="submit" name="submit" id="submit">Submit</button> <br/>
            </form>

            <div className="display-name">{
                (name.submittedFName !== "" && name.submittedLName !== "") ? (`Full Name: ${name.submittedFName} ${name.submittedLName}`) : (``)     
            }</div>
        </>
    )
} 