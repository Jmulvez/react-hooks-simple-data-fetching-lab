import { useEffect } from "react";

function App() {
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then(data => console.log(data))
    }, []);
}

return <div>
    <p>
        Loading...
    </p>
    <img>
        
    </img>
</div>

export default App;