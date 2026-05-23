async function fetchTasks(done) {
    const url = `http://127.0.0.1:3000/task?done=${done}`;
    try {
        const res = await fetch(url, {
            method: "GET"
        });
        return res;
    } catch (e) {
        console.log(e);
    }
}

function main() {
    fetchTasks(false);
}

main();