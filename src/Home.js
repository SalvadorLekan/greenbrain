import "./App.css";
import List from "./components/List";
import Hero from "./assets/hero_image.png";
import Books from "./assets/books.png";
import Calendar from "./assets/calendar.png";
import Network from "./assets/network.png";
import MoneyBag from "./assets/money-bag.png";
import CollectionBox from "./assets/collection_box.png";
import Card from "./components/Card";
import Summary from "./components/Summary";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cardDetails = [
  {
    Avatar: Books,
    text:
      "Our main priority is to make learning materials accessible for students in Nigerian Univeristies. This covers lecture notes/ handouts and exam past question papers as well as project topics and materials.",
    title: "Free access to quality learning materials",
  },
  {
    Avatar: Calendar,
    text:
      "Save your lecture and personal study timetables online for convenient access. Safely store your academic results for private access and automatically generate your GPA for the semester.",
    title: "Stay organised while on campus",
  },
  {
    Avatar: Network,
    text:
      "Connect, interact, and collaborate with people studying the same course as you in other Universities in Nigeria.",
    title: "Create your network while still in school",
  },
  {
    Avatar: MoneyBag,
    text:
      "Upload project materials and get 50% of the sum each time it is downloaded. Uploading more projects increases your chance of earning more money.",
    title: "Make money while you’re at it",
  },
];

const words = [
  "Lecture notes and handouts from all Nigerian Universities",
  "Exam past questions from any University in Nigeria",
  "Project topics and materials in any course",
  "Grow your network: Connect with Students from other Universties",
];

const noteList = [
  { color: "red", link: "/lecturenote", number: 41, note: "Lecture Notes" },
  {
    color: "yellow",
    link: "/lecturenote",
    number: 279,
    note: "Lecture Totals",
  },
  {
    color: "green",
    link: "/pastquestions",
    number: 277,
    note: "Question Papers",
  },
  { color: "blue", link: "/projects", number: 214, note: "Project Materialss" },
];

function App() {
  return (
    <>
      <Header />
      <section className="grid font-sans md:grid-cols-2 gap-2">
        <div className="p-5">
          <h1 className="p-7 leading-7 text-2xl md:text-4xl">
            We connect University students with their most important needs.
          </h1>
          <ul className="list-none">
            {words.map((word) => (
              <List word={word} />
            ))}
          </ul>

          <a
            className="inline-block my-4 mx-8 px-8 py-4 text-white text-lg bg-green-500 hover:bg-green-600 rounded"
            href="/"
          >
            {" "}
            Start Here
          </a>
        </div>
        <div className="hidden md:flex justify-center">
          <img
            width={370}
            src={Hero}
            alt="book"
            className="object-scale-down"
          />
        </div>
      </section>
      <section className="bg-green-100 p-4">
        <h1 className="font-sans text-center p-7 leading-7 text-2xl md:text-4xl">
          Be more productive while in school...
        </h1>
        <div className="grid md:grid-cols-2 gap-2">
          {cardDetails.map(({ ...detail }) => (
            <Card {...detail} />
          ))}
        </div>
      </section>
      <section className="grid md:grid-cols-4 p-6 font-sans">
        {noteList.map(({ ...items }) => (
          <Summary {...items} />
        ))}
      </section>
      <section className="bg-green-100 p-4 ">
        <div className="container mx-auto grid md:grid-cols-3 items-center">
          <div className="text-center my-4">
            <img className="mx-auto" src={CollectionBox} alt="" />
          </div>
          <div className="text-center text-2xl md:text-3xl font-bold my-4">
            Improve your school life, make money by uploading project materials
          </div>
          <div className="text-center ">
            <a
              className="inline-block my-3 mx-auto px-4 py-4 text-white text-lg bg-green-500 hover:bg-green-600 rounded"
              href="/"
            >
              {" "}
              Start Uploading
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
