import { useEffect, useRef, useState } from "react";

export default function Mem(props) {

  const dane = props.data

  const [upCounter, setUpCounter] = useState(dane.upvotes);
  const [downCounter, setDownCounter] = useState(dane.downvotes);

  const handleClick1 = () => {
    setUpCounter(upCounter - (-1));
  };


  const handleClick2 = () => {
    setDownCounter(downCounter - (-1));
  };

  return (
    <section className="mem">
      <div>
        <h1>{dane.title}</h1>
        <img src={dane.img} />
        <p>Upvotes: {upCounter}</p>
        <p>DownVotes: {downCounter}</p>
        <button onClick={handleClick1}>Upvote</button>
        <button onClick={handleClick2}>Downvote</button>
      </div>
    </section>
  );
}