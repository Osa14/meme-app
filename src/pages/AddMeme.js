import { useState } from "react";
import Mem from "../components/Mem";

export function AddComponent({ setMemes }) {

    const [newTitle, setNewTitle] = useState("");
    const [newImg, setNewImg] = useState("");

    function addMeme() {

        const newMeme = {
            title: newTitle,
            upvotes: '0',
            downvotes: '0',
            img: newImg
        };

        if((newTitle === "")&&(newImg === "")){
            alert("Mem powinien być śmieszny a nie pusty!")
        } else {
            setMemes(d => [...d, newMeme]);
        }
        
        // alert("Mem powinien być w formcie .jpg")
    }

    function handleTitleChange(event) {
        setNewTitle(event.target.value)
    }

    function handleImgChange(event) {
        setNewImg(event.target.value)
    }

    function showMeme() {

    }


    return (
        <div id="add">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ul>
                <li>
                    Title:
                    <input type='text' value={newTitle} onChange={handleTitleChange} placeholder="Enter title" />
                </li>
                <li>
                    ImgURL:
                    <input type='text' value={newImg} onChange={handleImgChange} placeholder="Enter ImgURL" />
                </li>
                <li>
                    <button onClick={addMeme}>Submit</button>
                </li>
                <li>
                    Meme:
                    <Mem setMemes={setMemes}
                        data={
                            {
                                title: newTitle,
                                upvotes: '0',
                                downvotes: '0',
                                img: newImg
                            }
                        } />
                </li>
            </ul>
        </div>
    );
}