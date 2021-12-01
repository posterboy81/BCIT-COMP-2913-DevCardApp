import "./App.css";
import { Router, Outlet, ReactLocation } from "react-location";
import CreateCard from "./CreateCard";
import CardShowcase from "./CardShowcase";
import { useState } from "react";

// Step 1: Create an instance of the ReactLocation Library
const location = new ReactLocation();
// Step 2: Specify the URLS (routes)/Pages for your application


// Step 3: Wrap our entire application in the React Location Library

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    NodeJS: false
  });

  const routes = [
    {
      path: "/",
      element: <CreateCard formData = {formData} setFormData={setFormData}/>
    },
    {
      path: "showcase",
      element: <CardShowcase formData = {formData}/>
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <header>{JSON.stringify(formData)}</header>
      <div>
        <Outlet />
      </div>
    </Router>
  );
}