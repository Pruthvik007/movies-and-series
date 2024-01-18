import "./App.css";
import Router from "./Router";
import Modal from "./components/common/Modal";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <div className="bg-base-300" id="App">
      <ContextProvider>
        <Router />
        <Modal />
      </ContextProvider>
    </div>
  );
}

export default App;
