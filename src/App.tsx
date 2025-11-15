import "./App.css";
import ThemeChangeBtn from "./Components/ThemeChangeBtn";
import ThemeContent from "./Components/ThemeContent";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ThemeChangeBtn />
      <ThemeContent />
    </div>
  );
}

export default App;
