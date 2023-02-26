import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState= (props)=>{
  const host="http://localhost:5000"
    const notesInitial= []
      const [notes, setNotes] = useState(notesInitial)


      //Get all note
      const getNotes=async ()=>{
           //api call
           const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNDU5ZjNmYzM0NTEyNzc3ZTdmM2RhIn0sImlhdCI6MTY3Mjc2Mzg5MX0.H2K7-Zi89gbO4khRvIvNWMyCOYCPss7SNLuS4g_9Y_o",
            },
          });
          const json=await response.json();
          console.log(json)   
          setNotes(json)
       
      }
      //Add a note
      const addNote=async (title,description,tag)=>{
        //Api call
           //api call
           const response = await fetch(`${host}/api/notes/addingnote`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNDU5ZjNmYzM0NTEyNzc3ZTdmM2RhIn0sImlhdCI6MTY3Mjc2Mzg5MX0.H2K7-Zi89gbO4khRvIvNWMyCOYCPss7SNLuS4g_9Y_o",
            },
            body: JSON.stringify({title,description,tag}), 
          });
          // const json= response.json();   
        const note= {
          "_id": "63b5aa5710baac419141bae7",
          "user": "63b459f3fc34512777e7f3da",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-01-04T16:33:27.845Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      //Delete a note
      const deleteNote=async (id)=>{
        //Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNDU5ZjNmYzM0NTEyNzc3ZTdmM2RhIn0sImlhdCI6MTY3Mjc2Mzg5MX0.H2K7-Zi89gbO4khRvIvNWMyCOYCPss7SNLuS4g_9Y_o",
          },
        });
        const json= response.json();  
        console.log("Deletingnode"+id);
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)


      }
      //Edit a note
      const editNote=async (id,title,description,tag)=>{
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNDU5ZjNmYzM0NTEyNzc3ZTdmM2RhIn0sImlhdCI6MTY3Mjc2Mzg5MX0.H2K7-Zi89gbO4khRvIvNWMyCOYCPss7SNLuS4g_9Y_o",
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const json= response.json();   
        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
          
        }

      }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;