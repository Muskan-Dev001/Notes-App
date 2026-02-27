
function FormHolder({
  FormHandler,
  handleHeading,
  Heading,
  handleDetails,
  details,
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          FormHandler(e);
        }}
        className="notesForm"
      >
        <h1>Add Notes </h1>
        <input
          type="text"
          id="notesHeading"
          name="heading_input"
          autoComplete="off"
          placeholder="Enter Notes Heading"
          value={Heading}
          onChange={(e) => handleHeading(e)}
        />
        <textarea
          placeholder="Enter notes here"
          id="notesDetails"
          value={details}
          onChange={(e) => handleDetails(e)}
        ></textarea>
        <button type="submit" className="addNote">
          Add
        </button>
      </form>
    </>
  );
}

export default FormHolder;
