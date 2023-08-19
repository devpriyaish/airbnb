import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import CardData from './data'
import './App.css'

function App() {
  /* This a also a way of passing data but in this way
      our Card.jsx will become cluttery 
      => cardData={cardData}
  */
  const cardDataElements = CardData.map((cardData) => {
    return (
      <Card
        key={cardData.id}
        {...cardData}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Header />
      <section className='cards'>
        {cardDataElements}
      </section>
    </>
  )
}

export default App
