import React from "react"

export default function Contact({contact}){
    const {id, name} = contact
    return <li>{name}</li>
}