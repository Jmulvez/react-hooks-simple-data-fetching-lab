import { useEffect } from "react";

function App() {
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then(data => console.log(data))
    }, []);
}

export default App;