import {useState} from "react";
function StateProps()
{
    const[name,setName] = useState("John");
    const[num,setNum] = useState(12);
    const[student,setStudent] = useState({name:"Mike",age:17});

    //change name
    const namehandler=()=>{
        setName("Mike");
    };

    //increment num
    const numhandler=()=>{
        let value=num;
        setNum(++value);
    };

    //change student
    const studenthandler=()=>
    {
        setStudent({name:"Subramani",age:12});
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>Age is {num}</h2>
            <h2>Student is {student.name} and age is {student.age}</h2>

            <button onClick={namehandler}>Change name</button>
            <button onClick={numhandler}>Increment number</button>
            <button onClick={studenthandler}>Change student details</button>
        </div>
    )
}

export default StateProps;