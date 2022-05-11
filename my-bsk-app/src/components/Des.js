import React, { useEffect, useState } from 'react'
import {Form,Row,FloatingLabel, Col,Button} from 'react-bootstrap'
import { takeIn,takeOut, } from '../des';
import Select from 'react-select'; 

const Des = () => {
    const[text,setText] = useState("");
    const[zakodowanaWiadomosc,setZakodowanaWiadomosc] = useState("");
    const[klucz,setKlucz] = useState("");
    const[textWalidacja,setTextWalidacja] = useState("");
    const[zakodowanaWiadomoscWalidacja,setZakodowanaWiadomoscWalidacja] = useState("");
    const[kluczWalidacja,setKluczWalidacja] = useState("");
    const[wynik,setWynik] = useState("");
    const[wybranaMetoda,SetWybranaMetoda] = useState("")
    // const[ifValidated,setIfValidated] = useState(false)

    const opcje = [
        {value:1, label:"Szyfruj"},
        {value:2, label:"Deszyfruj"},

    ]


    useEffect(()=>{
        if(text===""){
            setTextWalidacja("Wypełnij to pole")
        }
        // else{
        //     setTextWalidacja("")
        // }
    },[text])



    const sprawdzWalidacjeSzyfrowania =  () => {
        let ifValidated = true
        if(text===""){
            setTextWalidacja("Wypełnij to pole")
            ifValidated=false
        }

        if(klucz===""){
            setKluczWalidacja("Wypełnij to pole")
            ifValidated=false
        }

        else if(klucz.trim().length!==64){
            setKluczWalidacja("Klucz musi mieć 64 bity")
            ifValidated=false
        }

        if(!bitsOnly(klucz)){
            setKluczWalidacja("Pole musi zawierać ciąg bitów")
            ifValidated=false
        }
        
        if(wybranaMetoda==="Szyfruj"&&ifValidated){
            setWynik(takeIn(text,klucz.trim()))
        }
    }

    const sprawdzWalidacjeDeszyfrowania =  () => {
        let ifValidated = true


        if(zakodowanaWiadomosc===""){
            setZakodowanaWiadomoscWalidacja("Wypełnij to pole")
            ifValidated=false
        }

        
        if(!bitsOnly(zakodowanaWiadomosc)){
            setZakodowanaWiadomoscWalidacja("Pole musi zawierać ciąg bitów")
            ifValidated=false
        }

        if(klucz===""){
            setKluczWalidacja("Wypełnij to pole")
            ifValidated=false
        }

        else if(klucz.trim().length!==64){
            setKluczWalidacja("Klucz musi mieć 64 bity")
            ifValidated=false
        }

        if(!bitsOnly(klucz)){
            setKluczWalidacja("Pole musi zawierać ciąg bitów")
            ifValidated=false
        }
        
        if(wybranaMetoda==="Deszyfruj"&&ifValidated){
            setWynik(takeOut(zakodowanaWiadomosc,klucz.trim()))
        }
    }

    const szyfr = (e) => {
        e.preventDefault()

        if(wybranaMetoda==="Szyfruj"){
          sprawdzWalidacjeSzyfrowania()
        }
        else if(wybranaMetoda==="Deszyfruj"){
          sprawdzWalidacjeDeszyfrowania()
        }

    }

    const bitsOnly = string => [...string].every(c => '01'.includes(c));

    const handleWybierz = (e) => {
      SetWybranaMetoda(e.label);

        setTextWalidacja("")
        setZakodowanaWiadomoscWalidacja("")
      }

      const handleText = (e) => {
        setText(e.target.value);

        if(e.target.value===""){
            setTextWalidacja("Wypełnij to pole")
        }
        else{
            setTextWalidacja("")
        }
      }

      
      const handleZakodowanaWiadomosc = (e) => {
        setZakodowanaWiadomosc(e.target.value);

        if(e.target.value===""){
            setZakodowanaWiadomoscWalidacja("Wypełnij to pole")
        }
        
        if(!bitsOnly(e.target.value)){
            setZakodowanaWiadomoscWalidacja("Pole musi zawierać ciąg bitów")
        }
      }

      const handleKlucz = (e) => {
        setKlucz(e.target.value);

        if(e.target.value===""){
            setKluczWalidacja("Wypełnij to pole")
        }
        else if(!bitsOnly(e.target.value)){
            setKluczWalidacja("Pole musi zawierać ciąg bitów")
        }
        else if(e.target.value.trim().length!==64){
            setKluczWalidacja("Klucz musi mieć 64 bity")
        }
        else{
            setKluczWalidacja("")
        }


      }

  return (
    <div>
      <Form onSubmit={(e) => szyfr(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <Select
              onChange={(e) => {
                handleWybierz(e)
              }}
              options={opcje}
              placeholder="Szyfruj/Deszyfruj"
            />
          </Form.Group>
        </Row>
        {wybranaMetoda==="Szyfruj"?(
        <>
            <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Tekst">
              <Form.Control
              style={{height: "250px"}} as="textarea" rows={6}
              onChange={(e)=>handleText(e)}
                type="text"
                placeholder="Tekst"
                required
              />
            </FloatingLabel>
            {textWalidacja!==""?<p style={{color: "red"}}>{textWalidacja}</p>:null}
          </Form.Group>
        </Row>
        <Row className="mb-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Klucz(64bity)">
                  <Form.Control
                    onChange={(e) => handleKlucz(e)}
                    type="text"
                    placeholder="Klucz(64bity)"
                    required
                  />
                </FloatingLabel>
                {kluczWalidacja!==""?<p style={{color: "red"}}>{kluczWalidacja}</p>:null}
              </Form.Group>
              </Row>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Wynik">
              <Form.Control
              style={{height: "250px"}} as="textarea" rows={6}
                value={wynik}
                type="text"
                placeholder="Wynik"
                readOnly
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
          <Button
            className="ps-4 pe-4"
            onClick={(e) => {
              szyfr(e);
            }}
            variant="primary"
            type="submit"
          >
            Szyfruj
          </Button>
          
        </div>
        </>) : null}
        {wybranaMetoda==="Deszyfruj"?
          (
            <>
            <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Zakodowana wiadomość">
              <Form.Control
              style={{height: "250px"}} as="textarea" rows={6}
              onChange={(e)=>handleZakodowanaWiadomosc(e)}
                type="text"
                placeholder="Zakodowana wiadomość"
              />
            </FloatingLabel>
            {zakodowanaWiadomoscWalidacja!==""?<p style={{color: "red"}}>{zakodowanaWiadomoscWalidacja}</p>:null}
          </Form.Group>
        </Row>
        <Row className="mb-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Klucz(64bity)">
                  <Form.Control
                    onChange={(e) => setKlucz(e.target.value)}
                    type="text"
                    placeholder="Klucz(64bity)"
                    required
                  />
                </FloatingLabel>
                {kluczWalidacja!==""?<p style={{color: "red"}}>{kluczWalidacja}</p>:null}
              </Form.Group>
              </Row>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Wynik">
              <Form.Control
              style={{height: "250px"}} as="textarea" rows={6}
                value={wynik}
                type="text"
                placeholder="Wynik"
                readOnly
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
          <Button
            className="ps-4 pe-4"
            onClick={(e) => {
              szyfr(e);
            }}
            variant="primary"
            type="submit"
          >
            Deszyfruj
          </Button>
          
        </div>
        </>) : null}
      </Form>
      
     
    </div>
  )
}

export default Des