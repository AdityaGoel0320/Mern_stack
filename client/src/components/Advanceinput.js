import React, { useState } from 'react'

export default function Advanceinput() {
    const [val1, setval1] = useState()
    const [val2, setval2] = useState()
    const [text, settext] = useState()
    const [arr, setarr] = useState([])

    const [obj, setobj] = useState({
        title: "",
        content: "",
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


    let onclick = () => {
        setarr((predata) => {
            return [...predata, obj]
        })
    }

    return (
        <div>


            <input type="text" value={obj.title} name="title" onChange={onchange} placeholder="first" />

            <input type="text" value={obj.content} name="content" onChange={onchange} placeholder="second" />

            <button onClick={onclick}>Click me</button>


            {obj.title}
            {obj.content}

            {/* {text} */}
            <h1>
                {arr.map((x) => {
                    return x;

                })}
            </h1>
        </div>

    )
}