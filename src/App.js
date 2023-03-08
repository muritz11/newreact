import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes"
import "./assets/styles/style.css"

function App() {
  // const name = "victor"
  return (
    <div>
      <RouterProvider router={Routes()} />
    </div>
  );
}

export default App;
