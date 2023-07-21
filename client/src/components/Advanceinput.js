import React, { useState } from 'react'

export default function Advanceinput() {
    const [x, setx] = useState(0)

    const [obj, setobj] = useState({
        title: "",
        name: "",
    });

    // ab sabke liye ek hi onchange bana na hai
    let onchange = (e) => {

        const { name, value } = e.target;

        setobj((predata) => {
            return {
                ...predata,
                [name]: value,
            }

        })
    }


    let onclick = (e) => {
        console.log("btn clicked")
        setx(x + 1);
        e.preventDefault();
    }

    return (
        <div>
            <form action="POST">


                <input type="text" value={obj.title} name="title" onChange={onchange} placeholder="first" />

                <input type="text" value={obj.name} name="name" onChange={onchange} placeholder="second" />

                <button type='submit' onClick={onclick}>Click me {x} times</button>
            </form>

            <br />
            <span>Title is :- </span> {obj.title}
            <br />
            <span>Name is : -</span> {obj.name}


        </div>

    )
}