import { NavLink, Route,Routes} from 'react-router-dom'
import { useEffect } from 'react';
import products from './API/products';
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/Album/pages";
import NotFound from './components/NotFound/NotFound';
import ListPage from './features/Todo/pages/ListPage/ListPage';
import DetialPage from './features/Todo/pages/DetailPage/DetailPage';
import './app.scss'
import CouterFeature from './features/Counter/Counter';
function App() {

    useEffect(() => {
     const  fetchProducts = async ()=>{
        const productList = await products.getAll({_limit:10})
        console.log(productList)
      }
      fetchProducts()
    }, [])

  return (
    <div className="App">


      <header style={{display:'block'}}>
          <p><NavLink to="/">Home</NavLink></p>
          <p><NavLink to="/todos">Todo List</NavLink></p>
          <p><NavLink to="/albums">albums</NavLink></p>
          <p><NavLink to="/counter">Counter</NavLink></p>
      </header>
        <Routes>
           <Route path="/"/>
            
           <Route path="/todos/*" element={<TodoFeature />}>
              <Route path="todo" element={<ListPage/>}/>
              <Route path=":todoid" element={<DetialPage/>}/>
           </Route>

           <Route path="/albums/*" element={<AlbumFeature />}/>
           
           <Route path="/counter/*" element={<CouterFeature />}/>
           
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
