import { db } from "../firebase/firebaseConfig";


export const loadNotes = async(uid) => {

  const notesSnap = await db.collection(`${uid}/task/notes`).get();
  const notes =[];

  notesSnap.forEach(snapHijo => {
      console.log(snapHijo.data());
  })


  return notes;
}