import { Route, Routes } from 'react-router-dom';


import HomeScreen from './Home/HomeScreen'
//Home screen

import LoadLink from './Home/LoadLink';
//Redirects to the reddit link

import Check from './Log/Check';
//Logs the user

import ErrorPages from "../GeneralUse/ErrorPages";

import NavBar from "./NavBar" 
//Unlogged user's navbar

export default function UnloggedPaths() {
    return(
        <Routes>
            
            <Route path='*' element={<><NavBar/><HomeScreen /></>} />

            <Route path='load-link' element={<><NavBar/><LoadLink /></>}/>

            <Route path='login-error' element={
                <>
                    <ErrorPages Title="Whoops! An error ocurred!" Txt="It seems our servers or Reddit's are down. Please stand by and try again!" />
                </>} />

            <Route path="log">
                <Route path="" element={
                    <> <Check /> </>}/>

                <Route path="not-authorized" element={
                    <>
                    <NavBar />
                    <ErrorPages Title="Whoops! Authorization is missing" Txt="Try logging in again! Remember to authorize us to access your frontpage!" />
                    </>} />

            </Route>    

        </Routes>)
}