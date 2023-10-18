import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🥝 Kiwi",
      color: "Green",
    },
    {
      id: 1341,
      name: "🍋 Lemon",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
