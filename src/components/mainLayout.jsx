
import React from "react"
import style from "./mainLayout.module.css"
import foto from "../img/icon-star.svg"
import { BtnInput } from "./btnInput"
import { Link } from "react-router-dom"
import { Head } from "./head"



const dados = [1,2,3,4,5]
const MainSub =() => {
  const [value, setValue ] = React.useState(0)

  function handleBtn ({target}) {
    setValue(Number(target.innerText))
  }
  function handleClick (event) {
    if(!value) event.preventDefault()
  }

  return (
    <section className={style.mainSection}>
        <Head title = 'Evaluation' description='product evaluation'/>
        <div className={style.content}>
          
          <img 
          className={`${style.iconStar}`}
          src={foto} alt="icone estrela" />
          
          
          <main className={style.mainContent}>
            <h1>How did we do</h1>
            <p>
              Please, let us know how we did with the support request. All feedback is aprreciated to help us improve our offering!
            </p>
          </main>


          <div className={style.contentSub}>
            
            <div className={style.btns}>
             <BtnInput 
             onClick ={handleBtn}
             dados={dados}/>
            </div>

            <Link
              className={style.btnSub}
              to = {`/response/${value}`}
              onClick={handleClick}
              > Submit
            </Link>
            
          </div>
        </div>
      </section>
  )
}

export { MainSub }