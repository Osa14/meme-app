import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { NavComponent } from "./components/Navigation";
import { ErrorPage } from "./pages/Error";
import { RegularPage } from "./pages/Regular";
import { HotPage } from "./pages/Hot";



function App() {

  const memData = [
    {
      title: 'Mem 1',
      upvotes: '6',
      downvotes: '0',
      img: 'https://d-art.ppstatic.pl/kadry/k/r/1/1c/0b/5f9ff4956beab_o_large.jpg',
    },
    {
      title: 'Mem 2',
      upvotes: '3',
      downvotes: '4',
      img: 'https://d-art.ppstatic.pl/kadry/k/r/1/85/77/5f9ff441708ce_o_large.jpg',
    },
    {
      title: 'Mem 3',
      upvotes: '7',
      downvotes: '1',
      img: 'https://paczaizm.pl/content/wp-content/uploads/w-swieta-najwazniejsze-jest-odkupienie-win-kwasniewski.jpg',
    },
    {
      title: 'Mem 4',
      upvotes: '3',
      downvotes: '4',
      img: 'https://i.ytimg.com/vi/rtQKP1we-Dk/maxresdefault.jpg',
    },
    {
      title: 'Mem 5',
      upvotes: '7',
      downvotes: '0',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wikipedia_Meme-pl.png/640px-Wikipedia_Meme-pl.png',
    },
    {
      title: 'Mem 6',
      upvotes: '3',
      downvotes: '4',
      img: 'https://justjoin.it/blog/wp-content/uploads/2021/08/191748854_2860332700871857_8861298208624190856_n.jpg',
    },
  ]

  const hotData = memData.filter((memData) => {
    return memData.upvotes - memData.downvotes > 5
  })
  const regularData = memData.filter((memData) => {
    return memData.upvotes - memData.downvotes <= 5
  })

  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <main>
          <Routes>
            <Route path="/" element={<RegularPage data={regularData} />} />
            <Route path="/hot" element={<HotPage data={hotData} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;