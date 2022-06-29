import "./App.css";
import Card from "./components/card/Card.js";
import cardData from "./components/card/card-data.js";
import Overview from "./components/overview/Overview.js";
import overviewData from "./components/overview/overview-data.js";
import Header from "./components/Header";

function App() {
  const card = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  const overview = overviewData.map((item) => {
    return <Overview key={item.name} {...item} />;
  });

  return (
    <>
      <Header />
      <main>
        <div className="[ main ] [ container ]">
          <div className="[ cards ] [ grid ]">{card}</div>

          <h2 className="custom-heading">Overview - Today</h2>

          <div className="[ cards ][ grid ]">{overview}</div>
        </div>
      </main>
    </>
  );
}

export default App;
