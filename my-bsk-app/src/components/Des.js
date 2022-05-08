import React, { useEffect, useState } from 'react'
import {Form,Row,FloatingLabel, Col,Button} from 'react-bootstrap'
import { takeIn } from '../des';
import Select from 'react-select'; 

const Des = () => {
    const[text,setText] = useState("");
    const[zakodowanaWiadomosc,setZakodowanaWiadomosc] = useState("");
    const[klucz,setKlucz] = useState("");
    const[wynik,setWynik] = useState("");
    const[wybranaMetoda,SetWybranaMetoda] = useState("")

    const opcje = [
        {value:1, label:"Szyfruj"},
        {value:2, label:"Deszyfruj"},

    ]


    const Szyfrowanie =  () => {
        if(wybranaMetoda==="Szyfruj"){
            setWynik(takeIn(text,klucz.trim()))
        }
    }

    const Deszyfrowanie =  () => {
        if(wybranaMetoda==="Deszyfruj"){

        }
    }

    const szyfr = (e) => {
        e.preventDefault()

        if(wybranaMetoda==="Szyfruj"){
          Szyfrowanie()
        }
        else if(wybranaMetoda==="Deszyfruj"){
          Deszyfrowanie()
        }

    }

    const bitsOnly = string => [...string].every(c => '01'.includes(c));

    const handleWybierz = (e) => {
      SetWybranaMetoda(e.label);
      }

      const handleText = (e) => {
        setText(e.target.value);
      }

      
      const handleZakodowanaWiadomosc = (e) => {
        setZakodowanaWiadomosc(e.target.value);
      }

      const handleKlucz = (e) => {
        setKlucz(e.target.value);
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