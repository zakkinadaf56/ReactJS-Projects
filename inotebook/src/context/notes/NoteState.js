import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState= (props)=>{
    const notesInitial= [
        {
          "_id": "63b5aa5710baac419141bae7",
          "user": "63b459f3fc34512777e7f3da",
          "title": "My title",
          "description": "Hey SSUP",
          "tag": "personal",
          "date": "2023-01-04T16:33:27.845Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;