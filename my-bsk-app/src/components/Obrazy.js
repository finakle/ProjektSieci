import React, { useState } from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import { szyfrowanie, deszyfrowanie,wielomianToBit } from "../lfsr";
import Select from "react-select";

const Obrazy = () => {
  const [text, setText] = useState("");
  const [ziarno, setZiarno] = useState("");
  const [wielomian, setWielomian] = useState("");
  const [wynik, setWynik] = useState("");
  const [odszyfrowanyObraz, setOdszyfrowanyObraz] = useState("");
  const [imageBase64, setObrazBase64] = useState("");
  const [wyborMetoda, setWyborMetoda] = useState("");
  const[ziarnoWalidacja,setZiarnoWalidacja] = useState("");
  const[wielomianWalidacja,setWielomianWalidacja] = useState("");
  const[textWalidacja,setTextWalidacja] = useState("")
  const[plikWalidacja,setPlikWalidacja] = useState("")

  const opcje = [
    { value: 1, label: "Szyfruj" },
    { value: 2, label: "Deszyfruj" },
  ];

  const szyfr = (e) => {
    e.preventDefault();

    setWielomianWalidacja("")
    setZiarnoWalidacja("")
    setTextWalidacja("")
    setPlikWalidacja("")

    if(text===""){
      setTextWalidacja("Wypełnij to pole")
    }

    if(ziarno===""){
        setZiarnoWalidacja("Wypełnij to pole")
    }
    if(imageBase64===""){
      setPlikWalidacja("Dodaj zdjęcie")
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

    if (wyborMetoda === "Szyfruj") {
      setWynik(szyfrowanie(imageBase64, ziarno, wielomian));
      console.log(wynik)
    } else if (wyborMetoda === "Deszyfruj") {
      setOdszyfrowanyObraz(deszyfrowanie(text, ziarno, wielomian));
      console.log(wynik)
    }
  };

  const tylkoBity = string => [...string].every(c => '01'.includes(c));


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
    setWyborMetoda(e.label);
    
    setWielomianWalidacja("")
    setZiarnoWalidacja("")
    setTextWalidacja("")
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
        {wyborMetoda==="Szyfruj"?(
        <>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formFile" className="mb-3">
            <Form.Control onChange={(e)=>{handlePlikChange(e)}} type="file" />
            {plikWalidacja!==""?<p style={{color: "red"}}>{plikWalidacja}</p>:null}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <FloatingLabel controlId="floatingPassword" label="Ziarno">
              <Form.Control
                onChange={(e) => setZiarno(e.target.value)}
                type="text"
                placeholder="Ziarno"
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
                onChange={(e) => setWielomian(e.target.value)}
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
            <FloatingLabel controlId="floatingPassword" label="Wynik">
              <Form.Control
              style={{height: "250px"}} as="textarea" rows={6}
                value={wynik}
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
        {wyborMetoda==="Deszyfruj"?
          (
            <>
             <Row className="mb-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Zakodowane zdjęcie">
                  <Form.Control
                  style={{height: "250px"}} as="textarea" rows={6}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Zakodowane zdjęcie"
                  />
                </FloatingLabel>
                {textWalidacja!==""?<p style={{color: "red"}}>{textWalidacja}</p>:null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Ziarno">
                  <Form.Control
                    onChange={(e) => setZiarno(e.target.value)}
                    type="text"
                    placeholder="Ziarno"
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
                    onChange={(e) => setWielomian(e.target.value)}
                    type="text"
                    placeholder="Wielomian"
                    required
                  />
                </FloatingLabel>
                {wielomianWalidacja!==""?<p style={{color: "red"}}>{wielomianWalidacja}</p>:null}
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

export default Obrazy;
