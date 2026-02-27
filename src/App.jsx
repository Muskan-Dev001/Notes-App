import { useState, useEffect } from "react";
import "./App.css";
import FormHolder from "./components/FormHolder";
import RecentNotes from "./components/RecentNotes";
function App() {
  const [Heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState(() => {
    try {
      let savedNotes = localStorage.getItem("notes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  function handleHeading(e) {
    let headingVal = e.target.value;
    setHeading(headingVal);
  }
  function handleDetails(e) {
    let DetailsVal = e.target.value;
    setDetails(DetailsVal);
  }

  function handleClick() {
    if (details !== "" && Heading !== "") {
      let Notes = { Heading, details };
      setNotes((prev) => [...prev,Notes]);
      setHeading("");
      setDetails("");
    }
  }

  function handleDeleteBtn(idx){
    const newNotes = [...notes];
    newNotes.splice(idx,1);
    setNotes(newNotes);
  }

  return (
    <>
      <div className="MainBody">
        <FormHolder
          FormHandler={handleClick}
          handleHeading={handleHeading}
          Heading={Heading}
          handleDetails={handleDetails}
          details={details}
        />
        <RecentNotes notes={notes} handleDeleteBtn={handleDeleteBtn} />
      </div>
    </>
  );
}

export default App;
