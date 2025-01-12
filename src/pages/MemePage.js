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
        <section id="memePage">
            <br />
            <br />
            <ul>
                {filteredData.map((mem) => (
                    <li>
                        <Mem data={mem} setMemes={setMemes}></Mem>
                    </li>
                ))}
            </ul>
        </section>
    );
}