import logo from './logo.svg';
import './App.css';
import React,{useState} from  'react';
import { Component } from 'react';


function App() {
 

const [fPos, setFPos] = useState('');
const [fWynik, setFWynik] = useState('');

function calculateFib(){
    var a=1;
    var b=1;
    if(fPos<1)setFWynik('Podano liczbę niedodatnią');
    if(fPos==1||fPos==2)setFWynik('1');
    if(fPos>2){
        var wynik=0;
        for(var i=2;i<fPos;++i){
            wynik=a+b;
            a=b;
            b=wynik;
        }
        setFWynik(wynik);
    }
    
}

    return (
        <div>
            Podaj numer pozycji w ciągu Fibonacii'ego
            <br />
           
                <input type="number" min="0" onChange={event =>setFPos(event.target.value)}/>
                <br />
                <input type="button" value="Oblicz" onClick={calculateFib}/>
                <br/>
                Wartość ciągu dla elementu ciągu o pozycji {fPos}
                <br/>
                <input type="text" disabled={true} value={fWynik}/>
                
               
        </div>
    );
}

export default App;

