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
    <header className="mt-10 text-center">
      <div className="flex items-center justify-center gap-6 text-[#c89a2b]">
        <span className="h-px w-16 bg-[#c89a2b]" />
        <h1 className="font-display text-2xl sm:text-3xl tracking-[0.35em] uppercase">
          Fast React Pizza Co.
        </h1>
        <span className="h-px w-16 bg-[#c89a2b]" />
      </div>
    </header>
  )
}

function Footer(){
  //const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  return(
    <>
    <p>We are currnetly open from {openHours} to {closeHours}. Come and visit us</p>
    <button className="bg-yellow-300 rounded-lg w-24 h-auto">Order</button>
    </>
  )
}

function Menu({pizza}:MenuProps){
  return(
    <div className="w-full max-w-3xl">
      <div className="flex justify-center items-center">
        <p className="relative font-bold text-xl m-2.5 p-2">
          <span className="absolute left-0 -top-1 h-px w-full bg-[#c89a2b]" />
          Our menu
          <span className="absolute left-0 -bottom-1 h-px w-full bg-[#c89a2b]" />
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 p-2 place-items-start">
        {pizza.map((item,index)=>(
        <div key = {index} className="w-full">
          <div className="flex items-start">
            <div>
              <img className="w-24"
                src = {`${import.meta.env.BASE_URL}${item.photoName.replace(/^\//, "")}`}
                alt = {item.name}
              />
            </div>
            <div>
              <p className="m-3">{item.name}</p>
              <p className="m-3">{item.ingredients}</p>
              <p className="m-3">{item.price}</p>
              <p className="m-3">{item.soldOut===true?'sold out':''}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="min-h-screen w-full px-6 flex flex-col items-center font-body">
      <Header/>
      <Menu pizza = {pizzaData}/>
      <Footer/>
    </div>
  )
}

export default App