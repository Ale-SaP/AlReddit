import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Homepage/HomeScreen';
import LoadLink from './Homepage/LoadLink';
import Check from './Loginpage/Check';
import LoginErrorScreen from './Loginpage/LoginErrorScreen';
import LoginNotAuthorized from './Loginpage/LoginNotAuthorized';

export default function Paths() {
    return(
        <Routes>
          <Route path='/home'>
            <Route path='' element={<HomeScreen />} />
            <Route path='login-error' element={<LoginErrorScreen />} />
            <Route path='load-link' element={<LoadLink />}/>
          </Route>

          <Route path="log">
            <Route path="" element={<Check />}/>
            <Route path="not-authorized" element={<LoginNotAuthorized />} />
          </Route>

          <Route path='your-home'>
            <Route path='' element={<h1>Work in progress!</h1>} />
          </Route>

        </Routes>
    )
}