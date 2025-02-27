import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'

function App() {

  const {t, i18n} = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1>{t("Hello Everyone")}</h1>
      <button onClick={() => changeLanguage("ma")}>Marathi</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("hi")}>Hindi</button>

    </>
  )
}

export default App
