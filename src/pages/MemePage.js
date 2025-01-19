import Mem from "../components/Mem";

export function MemePage({ data, setMemes, distinction }) {

    let filteredData = []

    if (distinction === "hot") {
        filteredData = data.filter((memData) => {
            return memData.upvotes - memData.downvotes > 5
        })
    } else if (distinction === "favorite") {
        filteredData = data.filter((memData) => {
            return memData.isfav === true
        })
    } else if (distinction === "regular") {
        filteredData = data.filter((memData) => {
            return memData.upvotes - memData.downvotes <= 5
        })
    }





    return (
        <section className="memePage">
            <ul>
                <li className="memePageSpace">

                </li>
                {filteredData.map((mem) => (
                    <li key={mem.id}  >
                        <Mem data={mem} setMemes={setMemes}></Mem>
                    </li>
                ))}
            </ul>

        </section>
    );
}