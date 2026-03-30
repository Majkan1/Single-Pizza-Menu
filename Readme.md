# 🍕 Fast React Pizza Co.

A lightweight React + TypeScript pizza menu app built. Displays a static menu of Italian pizzas with real-time open/closed status based on the current hour.

---

## Tech Stack

- **React** — component-based UI
- **TypeScript** — typed props and data structures
- **Tailwind CSS** — utility-first styling
- **Vite** — fast dev server and build tool

---

## Features

- Static pizza menu rendered from a typed data array
- Real-time clock in the footer
- Open/closed status based on current hour (12:00–22:00)
- Sold-out state tracked per pizza
- TypeScript interfaces for all data and component props

---

## Project Structure

```
src/
├── App.tsx         # Root component — renders Header, Menu, Footer
├── main.tsx        # Entry point
└── index.css       # Global styles
public/
├── focaccia.jpg
├── margherita.jpg
├── spinaci.jpg
├── funghi.jpg
├── salamino.jpg
└── prosciutto.jpg
```

---

## Components

| Component | What it does |
|---|---|
| `App` | Root, composes all components |
| `Header` | Displays restaurant name |
| `Menu` | Maps over `pizzaData` and renders pizza names |
| `Pizza` | Renders a single hardcoded pizza (Focaccia) |
| `Footer` | Shows current time and open/closed alert |

---

## Data Model

```typescript
interface SinglePizzaData {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Known Issues / Planned Improvements

- [ ] `Footer` uses `p` — replace with a UI banner component
- [ ] `Pizza` component is hardcoded — connect it to `pizzaData`
- [ ] Menu only shows pizza names — add image, ingredients, price, sold-out badge
- [ ] Add Tailwind styling to all components
- [ ] Add filtering by sold-out status

---

## Author

Built by Mikołaj Michalak using React + Typescript.
