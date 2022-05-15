import React, { useState } from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import Select from "react-select";
import { takeIn, takeOut } from "../des";

const DesPliki = () => {
  const [zawartoscPliku, setZawartoscPliku] = useState("");
  const [klucz, setKlucz] = useState("");
  const [wybranaMetoda, SetWybranaMetoda] = useState("");
  const[walidacjaKlucza,setWalidacjaKlucza] = useState("");
  const[selectValidation,setSelectValidation] = useState("")
  const[walidacjaPliku,setWalidacjaPliku] = useState("")
  const[walidowany,setWalidowany] = useState(true)
  const options = [
    { value: 1, label: "Szyfruj" },
    { value: 2, label: "Deszyfruj" },
  ];

  const szyfr = (e) => {
    e.preventDefault();

    setWalidacjaKlucza("")
    setSelectValidation("")
    setWalidacjaPliku("")
    setWalidowany(true)

    if(wybranaMetoda===""){
        setSelectValidation("Wybierz metodę")
        setWalidowany(false)
    }

    if(klucz===""){
        setWalidacjaKlucza("Wypełnij to pole")
        setWalidowany(false)
    }
    if(klucz.length!==64){
        setWalidacjaKlucza("Klucz musi mieć 64 bity")
        setWalidowany(false)
    }
    if(zawartoscPliku===""){
      setWalidacjaPliku("Dodaj plik")
      setWalidowany(false)
    }
    if(!bitsOnly(klucz)){
        setWalidacjaKlucza("Pole musi zawierać ciąg bitów")
      setWalidowany(false)
    }


    if (wybranaMetoda === "Szyfruj"&&walidowany) {
      pobierzTxtPlik(takeIn(zawartoscPliku, klucz))
    } else if (wybranaMetoda === "Deszyfruj"&&walidowany) {
      pobierzTxtPlik(takeOut(zawartoscPliku, klucz))
    }
  };

  const bitsOnly = string => [...string].every(c => '01'.includes(c));


  const handlePlikChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file)
      reader.onload=()=>{
        setZawartoscPliku(reader.result)
      }
  }

  const pobierzTxtPlik = (str) => {
    const element = document.createElement("a");
    const file = new Blob([str], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
    
  return (
    <div>
    <Form onSubmit={(e) => szyfr(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
          <Select
            onChange={(e) => {
              SetWybranaMetoda(e.label);
            }}
            options={options}
            placeholder="Szyfruj/Deszyfruj"
          />
          {selectValidation!==""?<p style={{color: "red"}}>{selectValidation}</p>:null}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formFile" className="mb-3">
          <Form.Control onChange={(e)=>{handlePlikChange(e)}} type="file" />
          {walidacjaPliku!==""?<p style={{color: "red"}}>{walidacjaPliku}</p>:null}
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
          {walidacjaKlucza!==""?<p style={{color: "red"}}>{walidacjaKlucza}</p>:null}
        </Form.Group>
      </Row>
      <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Zawartość pliku">
                    <Form.Control value={zawartoscPliku} style={{height: "250px"}} as="textarea" rows={6} type="text" placeholder="Zawartość pliku"/>
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
          Wykonaj
        </Button>
      </div>
    </Form>
  </div>
  )
}

export default DesPliki