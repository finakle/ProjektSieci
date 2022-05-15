import React, { useState } from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import Select from "react-select";
import { takeIn, takeOut } from "../des";

const DesObrazy = () => {
  const [text, setTekst] = useState("");
  const [klucz, setKlucz] = useState("");
  const [result, setRezultat] = useState("");
  const [odszyfrowanyObraz, setOdszyfrowanyObraz] = useState("");
  const [obrazBase64, setObrazBase64] = useState("");
  const [wybranaMetoda, setWybranaMetoda] = useState("");
  const[kluczWalidacja,setKluczWalidacja] = useState("");
  const[tekstWalidacja,setTeksWalidacja] = useState("")
  const[plikWalidacja,setPlikWalidacja] = useState("")

  const opcje = [
    { value: 1, label: "Szyfruj" },
    { value: 2, label: "Deszyfruj" },
  ];

  const szyfr = (e) => {
    e.preventDefault();

    setKluczWalidacja("")
    setTeksWalidacja("")
    setPlikWalidacja("")

    if(text===""){
      setTeksWalidacja("Wypełnij to pole")
    }

    if(klucz===""){
        setKluczWalidacja("Wypełnij to pole")
    }
    if(klucz.length!==64){
        setKluczWalidacja("Klucz musi mieć 64 bity")
    }
    if(obrazBase64===""){
      setPlikWalidacja("Dodaj zdjęcie")
    }
    if(!bitsOnly(klucz)){
        setKluczWalidacja("Pole musi zawierać ciąg bitów")
    }


    if (wybranaMetoda === "Szyfruj") {
      setRezultat(takeIn(obrazBase64, klucz));
      console.log(result)
    } else if (wybranaMetoda === "Deszyfruj") {
      setOdszyfrowanyObraz(takeOut(text, klucz));
      console.log(result)
    }
  };

  const bitsOnly = string => [...string].every(c => '01'.includes(c));


  const handlePlikChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file)
      
      reader.onload=()=>{
        setObrazBase64(reader.result)
        console.log(reader.result)
      }
  }

  const handleWybor = (e) => {
    setWybranaMetoda(e.label);

    setKluczWalidacja("")
    setTeksWalidacja("")
    setPlikWalidacja("")

  }

  return (
    <div>
      <Form onSubmit={(e) => szyfr(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <Select
              onChange={(e) => {
                handleWybor(e)
              }}
              options={opcje}
              placeholder="Szyfruj/Deszyfruj"
            />
          </Form.Group>
        </Row>
        {wybranaMetoda==="Szyfruj"?(
        <>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formFile" className="mb-3">
            <Form.Control onChange={(e)=>{handlePlikChange(e)}} type="file" />
            {plikWalidacja!==""?<p style={{color: "red"}}>{plikWalidacja}</p>:null}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Klucz(64bity)">
              <Form.Control
                onChange={(e) => setKlucz(e.target.value)}
                value={klucz}
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
                value={result}
                type="text"
                placeholder="Wynik"
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
                <FloatingLabel controlId="floatingPassword" label="Zakodowane zdjęcie">
                  <Form.Control
                  style={{height: "250px"}} as="textarea" rows={6}
                    onChange={(e) => setTekst(e.target.value)}
                    type="text"
                    placeholder="Zakodowane zdjęcie"
                  />
                </FloatingLabel>
                {tekstWalidacja!==""?<p style={{color: "red"}}>{tekstWalidacja}</p>:null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Klucz(64bity)">
                  <Form.Control
                    onChange={(e) => setKlucz(e.target.value)}
                    value={klucz}
                    type="text"
                    placeholder="Klucz(64bity)"
                    required
                  />
                </FloatingLabel>
                {kluczWalidacja!==""?<p style={{color: "red"}}>{kluczWalidacja}</p>:null}
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
            {odszyfrowanyObraz!==""?
            <img src={odszyfrowanyObraz} alt="img" />:
            null}
            </>):null}
      </Form>
      
     
    </div>
  );
};

export default DesObrazy;