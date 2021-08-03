import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea-input"
        />
        <div className="notes__image">
          <img
            src="https://www.mangaforever.net/wp-content/uploads/2017/12/utena.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
