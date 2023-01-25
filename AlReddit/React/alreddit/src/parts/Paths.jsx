import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Check from './Loginpage/Check';

export default function Paths() {
    return(
        <Routes>
          <Route path="log">
            <Route path="" element={<Check />}/>
          </Route>
          <Route path='your-home'>
            <Route path='' element={<h1>Work in progress!</h1>} />
          </Route>
        </Routes>
    )
}