
import axios from "axios";
import React, { useState ,useEffect} from "react";
import Output from "./output";
import Book from "./book";
import Verses from "./verses";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



const App = () =>{
  
  return (
    <>
    {/* <Router> */}
    
    {/* <> */}
    {/* <Input setPlace={setPlace} /> */}
    {/* <Book data={data}/>
    <Output data={data}/>
     */}

           {/* <Switch>
          <Route path="/Output">
            <Output />
          </Route>
        </Switch>
    
    
    </Router> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/chapters/:chapter" element={<Output />} />
      <Route path="/verses/:lines" element={<Verses />} />

      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
    
  </BrowserRouter>,
    </>
    
  )
}
export default App;

