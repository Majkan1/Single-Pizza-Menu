  interface SinglePizzaData {
    name:string,
    ingredients:string,
    price:number,
    photoName:string,
    soldOut:boolean
  }
  interface MenuProps {
    pizza:SinglePizzaData[]
  }
const pizzaData:SinglePizzaData[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false
  },
];

function Header(){
  return(
    <div>
      <p>Fast react pizza co.</p>
    </div>
  )
}

function Footer(){
  return(
    <>
      <footer>We are open till 10 p.m</footer>
    </>
  )
}

function Pizza(){
  return (
    <div>
      <img src = "/public/focaccia.jpg" alt = "Pizza focotia"/>
      <p>Pizza Focatia</p>
      <p>Tomato,mozarella,tortilla</p>
    </div>
  )
}

function Menu({pizza}:MenuProps){
  return(
    <div>
      {pizza.map((item,index)=>(
        <p key = {index}>{item.name}</p>
      ))}
    </div>
  )
}

function App() {

  return (
    <div>
      <Pizza />
      <Header/>
      <Menu pizza = {pizzaData}/>
      <Footer/>
    </div>
  )
}

export default App