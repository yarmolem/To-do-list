import '../css/componentes.css';
import redCard from '../assets/red_back.png';

export const saludar = ( nombre )=> {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, como estas ? ${nombre}`;
    document.body.append(h1);
    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = redCard;
    document.body.append(nuevaCarta)

}