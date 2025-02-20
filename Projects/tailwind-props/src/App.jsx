import './App.css'
import Cards from './components/Cards'

function App() {
  let myObj = {
    username: "parth" , 
    age: 21
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Cards username = "parthnarkar" someObj = {myObj} someObj1 = {newArr} />
    </>
  )
}

export default App
