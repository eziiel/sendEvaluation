
import style from "./btnInput.module.css"

function BtnInput ({dados,...props}) {

  return (
    <>
      {dados.map((item) => (
        <button
        className={style.btn}
        key={item}
        {...props}
        >{item}</button>
        ))}
    </>
  )
}

export {BtnInput}