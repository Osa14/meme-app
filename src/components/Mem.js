
export default function Mem({ data, setMemes }) {

  const handleFav = (e) => {

    setMemes((d) => {
      return d.map((mem) => {
        if (mem.title === data.title) {
          return { ...mem, isfav: Boolean(e.target.checked) };
        } else {
          return mem;
        }
      });
    });
  }

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
        <img src={data.img} alt="Image goes here." />
        <ul className="memMenu">
          <li>
            <label className="star">
              <input type="checkbox" checked={data.isfav} onChange={handleFav} ></input>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z" />
              </svg>
            </label>
          </li>
          <li className="upVote">
            {data.upvotes} &#129045;
          </li>
          <li>
            <button onClick={addUpVote}>Upvote</button>
          </li>
          <li className="downVote">
            {data.downvotes} &#129047;
          </li>
          <li>
            <button onClick={addDownVote}>Downvote</button>
          </li>
        </ul>
      </div>
    </section>
  );
}