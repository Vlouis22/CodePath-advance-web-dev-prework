import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import NoPage from "./pages/NoPage";
import Homepage from "./pages/homepage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="showcreator" element={<ShowCreators />} />
        <Route path="addcreator" element={<AddCreator />} />
        <Route path="editcreator/:userId" element={<EditCreator />} />
        <Route path="viewCreator/:userId" element={<ViewCreator />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

