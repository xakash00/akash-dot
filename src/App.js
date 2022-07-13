import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Index from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
