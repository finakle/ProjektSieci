import React, { useState } from 'react'
import {Form,Row,FloatingLabel, Col,Button} from 'react-bootstrap'
import { szyfrowanie,deszyfrowanie,wielomianToBit } from '../lfsr';
import Select from 'react-select'; 

const Szyfr = () => {
    const[text,setText] = useState("");
    const[textWalidacja,setTextWalidacja] = useState("");
    const[ziarnoWalidacja,setZiarnoWalidacja] = useState("");
    const[wielomianWalidacja,setWielomianWalidacja] = useState("");
    const[wyborWalidacja,setWyborWalidacja] = useState("")
    const[ziarno,setZiarno] = useState("");
    const[wielomian,setWielomian] = useState("");
    const[wynik,setWynik] = useState("");
    const[wyborMetoda,setWyborMetoda] = useState("")

    const opcje = [
        {value:1, label:"Szyfruj"},
        {value:2, label:"Deszyfruj"},
    ]

    const szyfr = (e) => {
        e.preventDefault();

        setWielomianWalidacja("")
        setZiarnoWalidacja("")
        setTextWalidacja("")
        setWyborWalidacja("")

        if(wyborMetoda===""){
            setWyborWalidacja("Wybierz metodę")
        }

        if(text===""){
            setTextWalidacja("Wypełnij to pole")
        }

        if(ziarno===""){
            setZiarnoWalidacja("Wypełnij to pole")
        }
        if(!tylkoBity(ziarno)){
            setZiarnoWalidacja("Pole musi zawierać ciąg bitów")
        }


        if(wielomian===""){
            setWielomianWalidacja("Wypełnij to pole")
        }

        else if(!wielomian.includes(",")){
            setWielomianWalidacja("Wielomian musi być podany w postaci oddzielanej przecinkiem")
        }

        if(ziarno.length!==wielomianToBit(wielomian).length){
            setZiarnoWalidacja("Wielomian i ziarno muszą być równe")
            setWielomianWalidacja("Wielomian i ziarno muszą być równe")
        }
        

        if(wyborMetoda==="Szyfruj"){
            setWynik(szyfrowanie(text,ziarno,wielomian))
        }
        else if(wyborMetoda==="Deszyfruj"){
            setWynik(deszyfrowanie(text,ziarno,wielomian))
        }
        
    }

    const tylkoBity = string => [...string].every(c => '01'.includes(c));

  return (
    <div>
          <Form onSubmit={(e)=> szyfr(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setWyborMetoda(e.label)}} options={opcje} placeholder="Szyfruj/Deszyfruj"/>
                    {wyborWalidacja!==""?<p style={{color: "red"}}>{wyborWalidacja}</p>:null}
            </Form.Group>
        </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tekst    ">
                    <Form.Control onChange={(e) => setText(e.target.value)} type="text" placeholder="Tekst" required/>
                </FloatingLabel>
            {textWalidacja!==""?<p style={{color: "red"}}>{textWalidacja}</p>:null}
            </Form.Group>
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Ziarno">
                    <Form.Control onChange={(e) => setZiarno(e.target.value)} type="text" placeholder="Ziarno" required/>
                </FloatingLabel>
                {ziarnoWalidacja!==""?<p style={{color: "red"}}>{ziarnoWalidacja}</p>:null}
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Wielomian">
                    <Form.Control onChange={(e) => setWielomian(e.target.value)} type="text" placeholder="Wielomian" required/>
                </FloatingLabel>
                {wielomianWalidacja!==""?<p style={{color: "red"}}>{wielomianWalidacja}</p>:null}
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Wynik">
                    <Form.Control value={wynik} type="text" placeholder="Wynik"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" onClick={(e)=>{szyfr(e)}} variant="primary" type="submit">
                  Wykonaj
            </Button> 
        </div>
    </Form>
    </div>
  )
}

export default Szyfr