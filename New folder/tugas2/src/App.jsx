import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sapaan from './commponen/Sapaan.jsx';
import PersegiPanjang from './commponen/Persegipanjang.jsx'


function App() {

  return (
    <>
      <section>
        <div>
          <h1 className='judul'>halo, react!</h1>
        </div>
        <Sapaan />
        <PersegiPanjang />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )

}
export default App
