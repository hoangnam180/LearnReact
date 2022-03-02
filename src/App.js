import {Route,Routes} from 'react-router-dom'
import { createContext, useState } from 'react';
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/Album/pages";
import NotFound from './components/NotFound/NotFound';
import ListPage from './features/Todo/pages/ListPage/ListPage';
import DetialPage from './features/Todo/pages/DetailPage/DetailPage';
import './app.scss'
import CouterFeature from './features/Counter/Counter';
import Header from 'components/Header/Header';
import ProductFeature from 'features/Product';
import Listpage from 'features/Product/pages/ListPage/ListPage';
import DetailPage from 'features/Product/pages/DetailPage/DetailPage';

function App() {
  const [messHead,setMessHead] = useState('')
  const [mess,setMess] = useState('') 
  const [background,setBackground] = useState('success')
  const [toast,setToast] = useState(false);
  const value = {toast,setToast,background,setBackground,mess,setMess,messHead,setMessHead}

   const toastContext = createContext()
  return (

    <div className="App">
       <toastContext.Provider value={value}>
            <Header toastContext={toastContext}/>
        </toastContext.Provider> 
        <Routes>
           <Route path="/"/>
            
           <Route path="/todos/*" element={<TodoFeature />}>
              <Route path="todo" element={<ListPage/>}/>
              <Route path=":todoid" element={<DetialPage/>}/>
           </Route>

           <Route path="/albums/*" element={<AlbumFeature />}/>

           <Route path="/products/*" element={<ProductFeature />}>
              <Route path="*" element={<Listpage/>}/>
              <Route path=":productid" element={<DetailPage/>}/>
           </Route>
           
           <Route path="/counter/*" element={<CouterFeature />}/>
           
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}


export default App;
