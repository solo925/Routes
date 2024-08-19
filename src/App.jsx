import { useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Comments from './pages/comments';
import RecipeDetailsPage from './pages/Deatils';
import RecipePage from './pages/recipes';

  
  

export function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />, // Parent layout component
      children: [
        { path: 'recipe', element: <RecipePage /> }, // Child route for RecipePage
        { path: 'comments', element: <Comments /> }, // Child route for Comments
        { path: 'recipe/:id', element: <RecipeDetailsPage /> }, // Child route for RecipeDetailsPage
      ],
    },
  ]);

  return element;
};



// learn these
// useLocalStorage
// useSessionStorage
// useId
// useCounter
// useOutSideClick


function App() {
  

  return (
    <div className="App">
      {/* <Link to={"/recipe"}>go to recipes page</Link>
      <Link to={"/comments"}>go to comments page</Link>
      <button onClick={()=>navigate('/recipe')}>recipes</button>
      <button onClick={() => navigate('/comments')}>comments</button> */}
      
      {/* <Routes>
        <Route path='/recipe' element={ <RecipePage/>} />
        <Route path='/comments' element={ <Comments/>} />
        <Route path='/recipe/:id' element={ <RecipeDetailsPage/>} />
      </Routes> */}

      <CustomRoutes/>
      
  
    </div>
  );
}

export default App;
