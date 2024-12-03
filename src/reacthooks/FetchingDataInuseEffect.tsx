import React, { useEffect } from 'react'

const FetchingDataInuseEffect = () => {

    // Define data for count and setCount
    const [ count, setCount ] = React.useState<number>(0);

    // Define data for data and setData
    const [data, setData] = React.useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [data, count]); // useEffect will run every time the data changes or the count changes
        
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <p>
            {data.name}
        </p>
    </div>
  )
}

export default FetchingDataInuseEffect