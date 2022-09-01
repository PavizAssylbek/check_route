import { Route, Routes } from 'react-router-dom';
import { LayoutHome } from './layouts';
import {  Home, Journal } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route
            index
            element={
                <Home />
            }
          />
          <Route
            path=":idParam"
            element={
              <Journal />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
