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
      <p className="text-red-600 text-5xl uppercase">Fast react pizza co.</p>
    </div>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  return(
    <>
      <footer>{new Date().toLocaleTimeString()}We are open till 10 p.m</footer>
      {hour>=openHours && hour<=closeHours?
      <p>('We are conrently open')</p>:
      <p>('We are curently closed')</p>}
    </>
  )
}

function Menu({pizza}:MenuProps){
  return(
    <div>
      {pizza.map((item,index)=>(
        <div key = {index}>
          <img
            src = {`${import.meta.env.BASE_URL}${item.photoName.replace(/^\//, "")}`}
            alt = {item.name}
          />
          <p>{item.name}</p>
          <p>{item.ingredients}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header/>
      <Menu pizza = {pizzaData}/>
      <Footer/>
    </div>
  )
}

export default App