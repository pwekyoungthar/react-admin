import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path="new" element={<New />} />
          <Route path=":userId" element={<Single />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path="new" element={<New />} />
          <Route path=":productId" element={<Single />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
