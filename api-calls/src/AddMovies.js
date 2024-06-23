import React, { useState } from "react";
import "./Addmovies.css";

const AddMovies = (props) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    //console.log(movie);
    props.onAddMovie(movie);
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  };

  return (
    <div className="form">
      <h2>Add a New Movie</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="openingText">Opening Text</label>
        <textarea
          rows="3"
          id="openingText"
          name="openingText"
          value={openingText}
          onChange={(event) => setOpeningText(event.target.value)}
        ></textarea>

        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="text"
          id="releaseDate"
          name="releaseDate"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovies;
