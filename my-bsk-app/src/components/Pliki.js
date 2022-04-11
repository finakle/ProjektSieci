import React, { useState } from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import { szyfrowanie, deszyfrowanie,wielomianToBit } from "../lfsr";
import Select from "react-select";

const Pliki = () => {
  const [zawartoscPliku, setZawartoscPliku] = useState("");
  const [ziarno, setZiarno] = useState("");
  const [wielomian, SetWielomian] = useState("");
  const [wyborMetoda, SetWyborMetoda] = useState("");
  const[ziarnoWalidacja,setZiarnoWalidacja] = useState("");
  const[wielomianWalidacja,setWielomianWalidacja] = useState("");
  const[wyborWalidacja,setWyborWalidacja] = useState("")
  const[plikWalidacja,setPlikWalidacja] = useState("")
  const[walidacja,setWalidacja] = useState(true)

  const opcje = [
    { value: 1, label: "Szyfruj" },
    { value: 2, label: "Deszyfruj" },
  ];

  const szyfr = (e) => {
    e.preventDefault();

    setWielomianWalidacja("")
    setZiarnoWalidacja("")
    setWyborWalidacja("")
    setPlikWalidacja("")
    setWalidacja(true)

    if(wyborMetoda===""){
        setWyborWalidacja("Wybierz metodę")
        setWalidacja(false)
    }

    if(ziarno===""){
        setZiarnoWalidacja("Wypełnij to pole")
        setWalidacja(false)
    }
    if(zawartoscPliku===""){
      setPlikWalidacja("Dodaj plik")
      setWalidacja(false)
    }
    if(!tylkoBity(ziarno)){
      setZiarnoWalidacja("Pole musi zawierać ciąg bitów")
      setWalidacja(false)
    }


    if(wielomian===""){
        setWielomianWalidacja("Wypełnij to pole")
        setWalidacja(false)
    }
    else if(!wielomian.includes(",")){
      setWielomianWalidacja("Wielomian musi być podany w postaci oddzielanej przecinkiem")
      setWalidacja(false)
  }

    if(ziarno.length!==wielomianToBit(wielomian).length){
        setZiarnoWalidacja("Wielomian i ziarno muszą być równe")
        setWielomianWalidacja("Wielomian i ziarno muszą być równe")
        setWalidacja(false)
    }


    if (wyborMetoda === "Szyfruj"&&walidacja) {
      pobierzPlikTxt(szyfrowanie(zawartoscPliku, ziarno, wielomian))
    } else if (wyborMetoda === "Deszyfruj"&&walidacja) {
      pobierzPlikTxt(deszyfrowanie(zawartoscPliku, ziarno, wielomian))
    }
  };

  const tylkoBity = string => [...string].every(c => '01'.includes(c));


  const handlePlikChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file)
      reader.onload=()=>{
        setZawartoscPliku(reader.result)
      }
  }

  const pobierzPlikTxt = (str) => {
    const element = document.createElement("a");
    const file = new Blob([str], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "plik.txt";
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
              SetWyborMetoda(e.label);
            }}
            options={opcje}
            placeholder="Szyfruj/Deszyfruj"
          />
          {wyborWalidacja!==""?<p style={{color: "red"}}>{wyborWalidacja}</p>:null}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formFile" className="mb-3">
          <Form.Control onChange={(e)=>{handlePlikChange(e)}} type="file" />
          {plikWalidacja!==""?<p style={{color: "red"}}>{plikWalidacja}</p>:null}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
          <FloatingLabel controlId="floatingPassword" label="ziarno">
            <Form.Control
              onChange={(e) => setZiarno(e.target.value)}
              type="text"
              placeholder="ziarno"
              required
            />
          </FloatingLabel>
          {ziarnoWalidacja!==""?<p style={{color: "red"}}>{ziarnoWalidacja}</p>:null}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
          <FloatingLabel controlId="floatingPassword" label="Wielomian">
            <Form.Control
              onChange={(e) => SetWielomian(e.target.value)}
              type="text"
              placeholder="Wielomian"
              required
            />
          </FloatingLabel>
          {wielomianWalidacja!==""?<p style={{color: "red"}}>{wielomianWalidacja}</p>:null}
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

export default Pliki