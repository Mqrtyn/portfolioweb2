import React from 'react';
import '../Experience.css'; // Importiere die CSS-Datei für die Header-Komponente
import Image from '../images/codeCode.jpg';
import Image1 from '../images/desk.jpg';
import Image2 from '../images/software-developer.jpg';
import Image3 from '../images/sourceCode.jpg';
import Image4 from '../images/security.jpg';
import Image5 from '../images/binary-3725324_1920.jpg';
import Image6 from '../images/Mqrtyn_1Portfolio.pdf';
import Image7 from '../images/Mqrtyn_2Portfolio_Algo:VS:DB.pdf';
import Image8 from '../images/Mqrtyn_2Portfolio_SE.pdf';
import Image9 from '../images/Mqrtyn_2Portfolio_HCI:MD:WP.pdf';
import Image10 from '../images/Mqrtyn_2Portfolio_WE12.pdf';
import Image11 from '../images/CV.pdf';


export function Experience() {
  return (
    <div id="experience" class="hidden">
    <div class="container">
        <h1 class="sub-title">Meine <u>Erfahrung</u> im Studium</h1>
        <div class="erfahrung2-list">
            <div class="erf">
                <img src={Image}/>
                 <div class="layer">
                    <h3><b>Programmierung 1/2</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image6} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
            <div class="erf">
                <img src={Image1}/>
                <div class="layer">
                    <h3><b>Algo / Datenbanken / Verteilte Systeme</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image7} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
            <div class="erf">
                <img src={Image2}/>
                <div class="layer">
                    <h3><b>Software-Engineering 1/2 / Wahlpflicht</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image8} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
            <div class="erf">
                <img src={Image3}/>
                <div class="layer">
                    <h3><b>HCI / Mediendesign / Wahlpflicht</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image9} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
            <div class="erf">
                <img src={Image4}/>
                <div class="layer">
                    <h3><b>Web-Engineering 1/2</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image10} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
            <div class="erf">
                <img src={Image5}/>
                <div class="layer">
                    <h3><b>Alle Projekte</b></h3>
                    <p>Klick für PDF mit Informationen</p>
                    <a href={Image11} target="_blank" rel="noopener noreferrer" className="btn1"><br/>KLICK</a> 
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Experience;
//Weiter machen, Header irgendwie anpassen, download anders machen so dass die pdf einfach angezeigt wird, contact machen und allgemein alles anpassen