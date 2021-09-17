import { useState, useEffect} from 'react'
import List from './components/List'



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
   <main className="main">
     <section className="container">
       <h3>0 birthdays todays</h3>
     </section>
   </main>
  );
}

export default App;
