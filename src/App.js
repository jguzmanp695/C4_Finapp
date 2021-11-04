import React, {useState, Fragment, useRef, useEffect} from "react"
import ContactList from "./components/ContactList"
import { v4 as uuid } from 'uuid'

export function App(){
    const [contacts, setContacts] = useState([
        // {id: 1, name: 'Ana Sofía'},
        // {id: 2, name: 'Ana Sofía'},
        // {id: 3, name: 'Ana Sofía'},
    ])
    const KEY = 'contacts'
    const contactRef = useRef()

    //Recuperar los registros ingresados en el navegador
    useEffect(()=>{
        const storedContacts = JSON.parse(localStorage.getItem('KEY'))
        if(storedContacts){
            setContacts(storedContacts)
        }
    }, [])

    //Srive para guardar la información de los registros en el navegador.
    useEffect(()=>{
        localStorage.setItem('KEY', JSON.stringify(contacts))
    }, [contacts])

    //
    const addContact = ()=>{
        const name = contactRef.current.value
        if(name === '') return
        setContacts((oldContacts)=>{
            return [...oldContacts, {id: uuid(), name}]
        })
        contactRef.current.value = null
    }

    // return ( <div>Hola React</div> )
    return (
        <Fragment>
        <ContactList contacts={contacts} />
        <input ref={contactRef} type="text" placeholder= "nuevo contacto" />
        <button onClick={addContact}>🙎‍♂️Add</button>
        </Fragment>
    )
}