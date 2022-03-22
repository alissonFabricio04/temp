import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [creditsWallet, setCreditsWallet] = useState(0)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({name, email, creditsWallet})
    fetch('http://localhost:3333/add', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
      },
      body: JSON.stringify({name, email, creditsWallet})
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.status) {
        alert("Tudo Ok :)")
      } else {
        alert("Algo deu errado :(")
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <form action="" method="post" onSubmit={handleSubmit}>

        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={(event) => {
            setName(String(event.target.value))
          }}
        />
        <br />
          
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={(event) => {
            setEmail(String(event.target.value))
          }} 
        />
        <br />

        <label htmlFor="creditsWallet">Credits Wallets: </label>
        <input type="number" name="creditsWallet" id="creditsWallet" onChange={(event) => {
            setCreditsWallet(Number(event.target.value))
          }}
        />
        <br />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
