import { Link, useNavigate, useRoutes } from 'react-router-dom';
import './App.css';
import RecipePage from './pages/recipes';


function CustomeRoute() {
  const element = useRoutes([
    {
      path:"/recipe",element:<RecipePage/>   }
  ])
  return element
}

// learn these
// useLocalStorage
// useSessionStorage
// useId
// useCounter
// useOutSideClick


function App() {
  
  const navigate = useNavigate();
  // const dispatch = dispatchEvent();
  return (
    <div className="App">
      <Link to={"/recipe"}>go to recipes page</Link>
      <Link to={"/comments"}>go to comments page</Link>
      <button onClick={()=>navigate('/recipe')}>recipes</button>
      <button onClick={() => navigate('/comments')}>comments</button>
      
      {/* <Routes>
        <Route path='/recipe' element={ <RecipePage/>} />
        <Route path='/comments' element={ <Comments/>} />
        <Route path='/recipe/:id' element={ <RecipeDetailsPage/>} />
      </Routes> */}

      <CustomeRoute/>
      
  
    </div>
  );
}

export default App;
