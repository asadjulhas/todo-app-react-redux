import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import TodoListCompleted from "./components/TodoListCompleted";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navigation/>
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <Header/>
        <hr className="mt-4" />
        <TodoList/>
        <hr className="mt-4" />
        <Footer/>
      </div>
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <TodoListCompleted/>
        
      </div>
    </div>
    </Provider>
  );
}

export default App;
