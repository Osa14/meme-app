import { useState } from "react";
import Mem from "../components/Mem";

export function AddComponent({ data,setMemes }) {

    const [newTitle, setNewTitle] = useState("");
    const [newImg, setNewImg] = useState("");

    function addMeme() {

        const newMeme = {
            title: newTitle,
            upvotes: '0',
            downvotes: '0',
            isfav: false,
            img: newImg,
            id: data.length
        };

        if ((newTitle === "") || (newImg === "")) {
            alert("Mem powinien być śmieszny a nie pusty!")
        } else {
            console.log(newMeme)
            setMemes(d => [...d, newMeme]);
        }

    }

    function handleTitleChange(event) {
        setNewTitle(event.target.value)
    }

    function handleImgChange(event) {
        setNewImg(event.target.value)
    }




    return (
        <section className="add">
            <ul>
                <li className="addMemeSpace">
                </li>
                <li>
                    <p>Title:</p>
                    <input type='text' value={newTitle} onChange={handleTitleChange} placeholder="Enter title" />
                </li>
                <li>
                    <p>ImgURL:</p>
                    <input type='text' value={newImg} onChange={handleImgChange} placeholder="Enter ImgURL" />
                </li>
                <li>
                    <button onClick={addMeme}>Submit</button>
                </li>
                <li>

                </li>
                <li>

                </li>
                <li>
                    Preview:
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
        </section>
    );
}