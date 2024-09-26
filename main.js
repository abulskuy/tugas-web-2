import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import  {goodbyeMsg, helloMsg } from './helloMsg.js'
import { changeText } from './changeText.js'
import $ from "jquery";

$('#app').html(`
  <div>
    <div class="kotak-utama">
        <h2 id="judul">Tekan tombol untuk ubah teks</h2>
        <button id="tombolUbahTeks" class="tombol-ubah">Klik Saya</button>
    </div>
  </div>
`)

changeText($('#tombolUbahTeks'), $('#judul'))
