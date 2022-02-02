import Categories from "./components/Categories";
import DealsOfTheDay from "./components/DealsOfTheDay";

import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App h-screen w-full bg-slate-200">
     <Header />
     <Categories />
     <Slider />
     <DealsOfTheDay />

    </div>
  );
}

export default App;
