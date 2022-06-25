import "./App.css";
import Card from "./Components/Card";
import Nav from "./Components/Nav";
import PageContent from "./Components/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  //if state is true, apply theme component
  return (
    <ThemeProvider>
      <PageContent>
        <Nav />
        <Card />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
