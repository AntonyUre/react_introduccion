import Logo from "./img/larnu_logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card.js";

function App() {
  const API_URL = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";
  const [courses, updateCourses] = useState([]);

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories);
        });
    });
  }

  async function getCourses() {
    const courses = await getCoursesApi();
    console.log(courses);
    updateCourses(courses);
  }

  useEffect(() => {
    console.log("consumir una api");
    getCourses();
  },);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container__nav">
          <nav className="container__nav--nav">
            <header>
              <img className="nav__logo" src={Logo} alt="Logo LarnU" />
            </header>
            <ul>
              <li>
                <a href="https://larnuapp.web.app/">Larnu bootcamp</a>
              </li>
            </ul>
          </nav>
        </div>
        <main className="container__main">
          <div className="container__Course left">
            <div className="container__cards">
              {
                courses.map(course => <Card course={course} />)
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;