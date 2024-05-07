import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Room from "./Room/Room";
import Facilities from "./Facilities/Facilities";
import Groupevents from "./GROUPEVENTS/Groupevents";
import Guide from "./Guide/Guide";
import About from "./About/About";
// import ScrollTop from "./ScrollTop";
import ScrollToTop from "./ScrollTop";

function Main(){
    return(
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}/>
                    {/* <Route path="/" element={<Room />}/> */}
                    <Route path="Hotel">
                        <Route index element={<Room />}/>
                    </Route>
                    <Route path="Coffee">
                        <Route index element={<Facilities />}/>
                    </Route>
                    <Route path="Wedding/Show">
                        <Route index element={<Groupevents />}/>
                    </Route>
                    <Route path="Interesting">
                        <Route index element={<Guide />}/>
                    </Route>
                    <Route path="ABOUT">
                        <Route index element={<About />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main