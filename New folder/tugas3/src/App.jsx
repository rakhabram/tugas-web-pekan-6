import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './componen/CardMahasiswa.jsx'
import Conter from './componen/counter.jsx'
import CardMahasiswa from './componen/CardMahasiswa.jsx'

function App() {


  return (
    <>
    <Card />
    <Conter />
    <CardMahasiswa nama="rakha" nim="12345" />
    <CardMahasiswa nama="budi" nim="54321" jurusan="rpl" />
      
    </>
  )
}

export default App

