import React from "react";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading, startDeletingNote } from "../../actions/notes";


const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const [formValues] = useForm(active);
  const {id} = formValues;

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePicture = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleDelete =()=>{
    dispatch(startDeletingNote(id));
  }

  

  return (
    <div className="notes__appbar">      

      <input
        id="fileSelector"
        name="file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFile}
      />

      <div>
        <button className="btn btn-save" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-picture" onClick={handlePicture}>
          Picture
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
