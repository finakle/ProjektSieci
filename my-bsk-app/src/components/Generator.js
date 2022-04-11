import React, { useState } from 'react'
import {Form,Row,FloatingLabel, Col,Button} from 'react-bootstrap'
import { lfsr,wielomianToBit } from '../lfsr';

const Generator = () => {
    const[ziarno,setZiarno] = useState("");
    const[wielomian,setWielomian] = useState("");
    const[wynik,setWynik] = useState("");
    const[ziarnoWalidacja,setZiarnoWalidacja] = useState("");
    const[wielomianWalidacja,setWielomianWalidacja] = useState("");


    const generuj = async (e) => {
        e.preventDefault();

        setWielomianWalidacja("")
        setZiarnoWalidacja("")

        if(ziarno===""){
            setZiarnoWalidacja("Wypełnij to pole")
        }
        else if(!tylkoBity(ziarno)){
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
        else {
            for(let i=0;i<100;i++){
                setWynik(lfsr(ziarno,wielomian,i).join(''))
                await opoznienie(1000);
        }

        }
    }

    const tylkoBity = string => [...string].every(c => '01'.includes(c));

    
    function opoznienie(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }


  return (
    <div>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="ziarno">
                    <Form.Control onChange={(e) => setZiarno(e.target.value)} type="text" placeholder="ziarno" required/>
                </FloatingLabel>
                {ziarnoWalidacja!==""?<p style={{color: "red"}}>{ziarnoWalidacja}</p>:null}
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Wielomian (oddziel cyfry przecinkami)">
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
            <Button className="ps-4 pe-4" onClick={(e)=>{generuj(e)}} variant="primary" type="submit">
                    Generuj
            </Button> 
        </div>
    </Form>
    </div>
  )
}

export default Generator