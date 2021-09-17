import { useState, useEffect} from 'react'
import List from './components/List'
import Button from './components/Button'


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

  const clearBirthdays = async () => {

    birthdays.forEach( (birthday) => {
      fetch(`http://localhost:5000/birthdays/${birthday.id}`, {
      method: 'DELETE'
    })
    updateBirthdays(birthdays)
    })

  }
  return (
   <main className="main">
     <section className="container">
       <h3>{birthdays.length} birthdays todays</h3>
       <List data={birthdays}/>
       <Button onClick={clearBirthdays}/>
     </section>
   </main>
  );
}

export default App;
