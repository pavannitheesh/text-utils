import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        let str=word;
        return str.charAt(0).toUpperCase()+word.slice(1);


    }
  return (

<div style={{height:'50px'}}>
  { props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
  
  <div>
   <strong>{capitalize(props.alert.type)}: </strong> {  props.alert.msg}
  </div>
</div>}
</div>
  )
}

export default Alert