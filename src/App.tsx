import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
// import EditCharacterPage from './pages/EditCharacterPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/characters' element={<CharactersPage />} />
        {/* <Route path='/add-character' element={<AddCharacterPage />} /> */}
        {/* <Route path='/edit-character/:id/' element={<EditCharacterPage />}/> */}
        <Route path='/characters/:id' element={<CharacterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
