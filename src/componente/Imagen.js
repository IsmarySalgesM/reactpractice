import React, { Component } from 'react'
import '/home/laboratoria/react-practice/src/style.css';
class Example extends Component {
    render() {
        const people = [{
            nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
        }, {
            nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
        }, {
            nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
        }, {
            nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
        }]
        let cardNum = 1;
        return (
            people.map((southpark) => {
                return (
                    <div className="Example-print">
                        <h4>Información</h4>
                        <p>Tarjeta N°{cardNum++}: {southpark.nombre}</p>
                        <img src={southpark.foto} alt="" />
                    </div>
                )
            }
            ))
    }
}

export default Example;
