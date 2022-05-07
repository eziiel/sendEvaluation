
import React from "react"
import style from "./response.module.css"
import foto from "../img/responseIcon.svg"
import { Head } from "./head"



const ResponseSub =() => {
  const [path, setPath] = React.useState()

  React.useEffect (() =>{
    const pathName = window.location.href
    setPath(pathName[pathName.length-1])
  },[])


  if(!path) return null
  return (
      <section >
        <Head title = 'End of evaluation' description='End of product evaluation'/>
        <div className={style.resContent}>
          
          <img 
          className={`${style.iconSend}`}
          src={foto} alt="icone estrela" />
          
          <span 
          className={`${style.selection}`}>
            You Selected {path} out of 5!
          </span>
          
          
          <main className={style.mainResponse}>
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
          </main>

        </div>
      </section>
  )
}

export { ResponseSub }