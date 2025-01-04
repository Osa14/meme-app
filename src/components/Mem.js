import { useEffect, useRef, useState } from "react";

export default function Mem({data, setMemes}) {

  const addUpVote = () => {
    // setMemes(data.upvotes + 1)
  }

  const addDownVote = () => {
    // setMemes(data.downvotes + 1)
  }

  return (
    <section className="mem">
      <div>
        <h1>{data.title}</h1>
        <img src={data.img} />
        <p>Upvotes: {data.upvotes}</p>
        <p>DownVotes: {data.downvotes}</p>
        <button onClick={addUpVote}>Upvote</button>
        <button onClick={addDownVote}>Downvote</button>
      </div>
    </section>
  );
}