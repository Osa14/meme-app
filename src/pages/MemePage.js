import Mem from "../components/Mem";

export function MemePage({ data, setMemes, isHot, isFav }) {

    let filteredData = []

    if (isHot) {
        filteredData = data.filter((memData) => {
            return memData.upvotes - memData.downvotes > 5
        })
    } else if (isFav) {
        filteredData = data.filter((memData) => {
            return memData.isfav === true
        })
    } else {
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
                    <li key={mem.id}>
                        <Mem data={mem} setMemes={setMemes}></Mem>
                    </li>
                ))}
            </ul>

        </section>
    );
}