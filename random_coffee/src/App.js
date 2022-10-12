import { useState } from 'react'
import logo from './assets/jllogo.png'
import './App.css'

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
    'Plain',
    'Almond',
    'Amaretto',
    'Butterscotch',
    'Plain',
    'Caramel',
    'Cinnamon',
    'Cinnamon Bun',
    'Creme de Menthe',
    'Cupcake',
    'Dark Chocolate',
    'French Vanilla',
    'Gingerbread',
    'Green Mint',
    'Plain',
    'Hazelnut',
    'Turkish Hazelnut',
    'Irish Cream',
    'Macadamia Nut',
    'Maple Spice',
    'Mojito',
    'Peanut Butter',
    'Peppermint',
    'Pumpkin Pie',
    'Pistachio',
    'Salted Caramel',
    'Toasted Marshmallow',
    'Plain',
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
    'Plain',
    'SF Irish Cream',
    'SF Macadamia Nut',
    'SF Vanilla',
    'SF Toasted Marshmallow'
  ]

  let modOptions = [
    'No Mods',
    'Whip',
    'Caramel Drizzle',
    'Shots on Top',
    'Chocolate Drizzle',
    'White Chocolate Drizzle',
    'Cinnamon Sprinkle',
    'No Mods',
    'Nutmeg Sprinkle',
    'Sprinkles',
    'Toffee Sprinkles',
    'Half Flavor',
    'Extra Syrup',
    'No Mods',
    'Extra Foam',
    'No Foam'
  ]

  const buildDrink = () => {
    let flavorChoice =
      flavorOptions[Math.floor(Math.random() * flavorOptions.length)]
    let modChoice = modOptions[Math.floor(Math.random() * modOptions.length)]
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
    if (flavorChoice === 'Plain') {
      setFlavor2('')
    } else
      setFlavor2(
        ` & ${flavorOptions[Math.floor(Math.random() * flavorOptions.length)]}`
      )
    if (modChoice === 'No Mods') {
      setMod2('')
    } else
      setMod2(` & ${modOptions[Math.floor(Math.random() * modOptions.length)]}`)
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
        <p className="footer_text">This wrbsite was developed by</p>
        <a href="https://joshua-langner.com">
          <img src={logo} className="logo" />
        </a>
        <p className="copyright">©2022 All rights reserves.</p>
      </div>
    </div>
  )
}

export default App
