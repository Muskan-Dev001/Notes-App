import bgImage from "./../assets/background-image.jpg";
function RecentNotes({notes,handleDeleteBtn}){
    return (<>
    <div className="yourNotesContainer"
    style={{background:`url(${bgImage})`,backgroundSize:"cover"}}>
    <h1 className="heading">Your Notes</h1>
    <div className="notesContainer">

    {notes.map((note,idx) => {
        return(<div className="cardBody" key={idx} >
            <h2>{note.Heading}</h2>
            <p>{note.details}</p>
            <button className="deleteBtn" onClick={() => handleDeleteBtn(idx)}>Delete</button>
        </div>)
    })}
        
       
    </div>
    </div>
    </>)
}

export default RecentNotes;