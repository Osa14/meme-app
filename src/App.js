import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { NavComponent } from "./components/Navigation";
import { ErrorPage } from "./pages/Error";
import { useEffect, useState } from "react";
import { MemePage } from "./pages/MemePage";
import { AddComponent } from "./pages/AddMeme";

function App() {

  const [data, setMemes] = useState(null)

  useEffect(() => {
    fetch('https://osa14.github.io/meme-api/mems.json')
      .then(res => {
        return res.json();
      })
      .then(array => {
        console.log(array);
        setMemes(array)
      })
  }, []);



  return (
    <div className="App">
      {data && <BrowserRouter>
        <NavComponent />
        <main>
          <Routes>
            <Route path="/meme-app/" element={<MemePage data={data} setMemes={setMemes} isHot={false} isFav={false} />} />
            <Route path="/meme-app/regular" element={<MemePage data={data} setMemes={setMemes} isHot={false} isFav={false} />} />
            <Route path="/meme-app/hot" element={<MemePage data={data} setMemes={setMemes} isHot={true} isFav={false} />} />
            <Route path="/meme-app/add" element={<AddComponent data={data} setMemes={setMemes} />} />
            <Route path="/meme-app/fav" element={<MemePage data={data} setMemes={setMemes} isHot={false} isFav={true} />} />
            <Route path="/meme-app/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>}
    </div>
  );
}

export default App;