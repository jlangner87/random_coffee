import { useState } from 'react'
import logo from './assets/jllogo.png'
import './App.css'
import { findByPlaceholderText } from '@testing-library/react'

function App() {
  const [size, setSize] = useState('Size')
  const [drinkType, setDrinkType] = useState('Drink Type')
  const [addShot, setAddShot] = useState('Shots')
  const [milk, setMilk] = useState('Milk')
  const [flavor1, setFlavor1] = useState('Flavor')
  const [flavor2, setFlavor2] = useState('')
  const [mod1, setMod1] = useState('Mod ')
  const [mod2, setMod2] = useState('')

  let sizeOptions = ['Small', 'Medium', 'Large']

  let typeOptions = [
    'Hot Coffee',
    'Cold Brew',
    'Hot Americano',
    'Iced Americano',
    'Hot Latte',
    'Iced Latte',
    'Cappuccino',
    'Frappe',
    'Dirty Chai'
  ]

  let shotOptions = ['An Extra Shot', '2 Extra Shots', 'No Extra Shots']

  let milkOptions = [
    'Whole Milk',
    'Non-fat',
    'Oat Milk',
    'Almond Milk',
    'Soy Milk',
    'Breve'
  ]

  let flavorOptions = [
    'No Flavor',
    'Almond',
    'Amaretto',
    'Butterscotch',
    'No Flavor',
    'Caramel',
    'Cinnamon',
    'Cinnamon Bun',
    'Creme de Menthe',
    'Cupcake',
    'Dark Chocolate',
    'French Vanilla',
    'Gingerbread',
    'Green Mint',
    'No Flavor',
    'Hazelnut',
    'Irish Cream',
    'Macadamia Nut',
    'Maple Spice',
    'Peanut Butter',
    'Peppermint',
    'Pumpkin Pie',
    'Pistachio',
    'Salted Caramel',
    'Toasted Marshmallow',
    'No Flavor',
    'Toffee Nut',
    'Vanilla',
    'Ghirardelli Chocolate Sauce',
    'Ghirardelli White Chocolate Sauce',
    'Ghirardelli Caramel Sauce',
    'Pumpkin Sauce',
    'SF Amaretto',
    'SF Caramel',
    'SF Coconut',
    'SF Gingerbread',
    'SF Hazelnut',
    'No Flavor',
    'SF Irish Cream',
    'SF Macadamia Nut',
    'SF Vanilla',
    'SF Toasted Marshmallow'
  ]

  let modOptions = [
    'No Mods',
    'Whip',
    'Double Whip',
    'Caramel Drizzle',
    'Double Caramel Drizzle',
    'Shots on Top',
    'Chocolate Drizzle',
    'Double Chocolate Drizzle',
    'White Chocolate Drizzle',
    'Cinnamon Sprinkle',
    'No Mods',
    'Nutmeg Sprinkle',
    'Toffee Sprinkles',
    'Half Flavor',
    'Extra Syrup',
    'No Mods',
    'Extra Foam',
    'No Foam',
    '1 Sugar Packet'
  ]

  const buildDrink = () => {
    let flavorChoice =
      flavorOptions[Math.floor(Math.random() * flavorOptions.length)]
    let modChoice = modOptions[Math.floor(Math.random() * modOptions.length)]
    let flavorChoice2 =
      flavorOptions[Math.floor(Math.random() * flavorOptions.length)]
    let modChoice2 = modOptions[Math.floor(Math.random() * modOptions.length)]
    setSize(sizeOptions[Math.floor(Math.random() * sizeOptions.length)])
    setDrinkType(typeOptions[Math.floor(Math.random() * typeOptions.length)])
    setAddShot(
      `Add ${shotOptions[Math.floor(Math.random() * shotOptions.length)]}`
    )
    setMilk(
      `Made with ${milkOptions[Math.floor(Math.random() * milkOptions.length)]}`
    )
    setFlavor1(flavorChoice)
    setMod1(`Add ${modChoice}`)
    if (flavorChoice === 'No Flavor' || flavorChoice === flavorChoice2) {
      setFlavor2('')
    } else if (flavorChoice2 === 'No Flavor') {
      setFlavor2('')
    } else setFlavor2(` & ${flavorChoice2}`)
    if (
      modChoice === 'No Mods' ||
      modChoice2 === 'No Mods' ||
      modChoice === modChoice2
    ) {
      setMod2('')
    } else setMod2(` & ${modChoice2}`)
  }

  return (
    <div className="App">
      <h1 className="title">Mystery Coffee Order</h1>
      <button onClick={buildDrink}>BUILD</button>
      <div className="order">
        <h1 className="subtitle">Your Drink:</h1>
        <p className="attribute">{size}</p>
        <p className="attribute">
          {flavor1}
          {flavor2}
        </p>
        <p className="attribute">{drinkType}</p>
        <p className="attribute">{addShot}</p>
        <p className="attribute">{milk}</p>
        <p className="attribute">
          {mod1}
          {mod2}
        </p>
      </div>
      <button onClick={buildDrink}>REDO</button>
      <div className="footer">
        <a href="https://joshua-langner.com">
          <p className="footer_text">This website was developed by</p>
          <img src={logo} className="logo" />
          <p className="copyright">©2022 All rights reserves.</p>
        </a>
      </div>
    </div>
  )
}

export default App
