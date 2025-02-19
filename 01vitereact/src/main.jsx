import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

//As we have created our own React element so, we also need a custom render for our custom element, thus this is not valid to render by .render()
/*
const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  }, 
  children: 'Click me to visit google'
}
*/

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "parth narkar"

//Thus, this format is acceptable by .render()
const reactElement = React.createElement(
  'a' ,
  {href: 'https://google.com' , target: '_blank'},
  'Click me to Visit Google',
  anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).
render(

   reactElement

)