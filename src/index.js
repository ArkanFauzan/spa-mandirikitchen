import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import BarangContext
import {BarangContext} from "./barangContext"

import context from 'react-bootstrap/esm/AccordionContext';

const barang = {barang:[
      {
          kategori:"area memasak",
          nama:"Exhaust Hood w/ Filter dan tidak dengan Filter, termasuk lampu penerangan",
          img: "img/1.jpg",
          deskripsi:"List daftar harga per-meternya adalah sebagai berikut:",
          harga:"img/1a.jpg"
      },
      {
          kategori:"area memasak",
          nama:"Kwali Range Single, Double dan Triple",
          img: "img/2.jpg",
          deskripsi:"List daftar harga untuk kwali range adalah sebagai berikut: ",
          harga:"img/2a.jpg"
      },
      {
          kategori:"area mencuci",
          nama:"Solid dan Slotted Pan Rack 4 Tier",
          img: "img/10.jpg",
          deskripsi:"List daftar harga per-meternya adalah sebagai berikut: ",
          harga:"img/10a.jpg"
      },
      {
          kategori:"area mencuci",
          nama:"Sink",
          img: "img/11.jpg",
          deskripsi:"List daftar harga Sink adalah sebagai berikut : ",
          harga:"img/11a.jpg"
      },
    ]}

ReactDOM.render(
  <React.StrictMode>
    <BarangContext.Provider value={barang}>
    <App />
    </BarangContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
