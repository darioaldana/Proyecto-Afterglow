import { useState } from 'react'
import './HomePage.css'
import Navbar from "../../components/NavBar/Navbar"
import Hero from "../../components/Hero/Hero"

function HomePage() {
  // const [count, setCount] = useState(0)
  return (<>
    <div>
      <Navbar />
      <Hero/>
    </div>
    </>
  );
}

export default HomePage