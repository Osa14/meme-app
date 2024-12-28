import Mem from "../components/Mem";
import { useEffect, useRef, useState } from "react";



export  function HotPage(props) {

  const dane = props.data
  

  return (
    <div>
      <ul>
        {dane.map((mem) => (
          <li>
            <Mem data={mem}></Mem>
          </li>
        ))}
      </ul>
    </div>
  );
}


