import { useState, useEffect} from 'react'



function App() {

  const [birthdays, updateBirthdays]= useState([])

  useEffect(()=> {
    const getBirthdays = async () =>{ 
      const data = await fetchBirthdays()
      updateBirthdays(data)
    } 
    getBirthdays()
  }, [])

  const fetchBirthdays = async () => {
    const res = await fetch('http://localhost:5000/birthdays')
    const data = await res.json();
    return data
  }

  return (
   <h1>Hello React</h1>
  );
}

export default App;
