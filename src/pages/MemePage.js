import Mem from "../components/Mem";

export function MemePage({ data, setMemes, isHot }) {

    let filteredData = []

    if (isHot) {
        filteredData = data.filter((memData) => {
            return memData.upvotes - memData.downvotes > 5
        })
    } else {
        filteredData = data.filter((memData) => {
            return memData.upvotes - memData.downvotes <= 5
        })
    }


    return (
        <div>
            <ul>
                {filteredData.map((mem) => (
                    <li>
                        <Mem data={mem} setMemes={setMemes}></Mem>
                    </li>
                ))}
            </ul>
        </div>
    );
}