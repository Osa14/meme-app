import { useEffect, useRef, useState } from "react";

export default function Mem({data, setMemes}) {

  const addUpVote = () => {
    setMemes((d) => {
      return d.map((mem) => {
        if (mem.title === data.title) {
          return { ...mem, upvotes: Number(mem.upvotes) + 1 };
        } else {
          return mem;
        }
      });
    });
  };

  const addDownVote = () => {
    setMemes((d) => {
      return d.map((mem) => {
        if (mem.title === data.title) {
          return { ...mem, downvotes: Number(mem.downvotes) + 1 };
        } else {
          return mem;
        }
      });
    });
  };

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