import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
       props.showAlert("converted to Upper Case","success");
    }
    const handleloClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower Case","success");
    }
    const handleclearClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
       let newText="";
        setText(newText)
        props.showAlert("cleared the Text","success");
    }
    const handletoCopy = ()=>{
        let copyText=text;
    
        navigator.clipboard.writeText(copyText);
        props.showAlert("copied to clipboard","success");
       
    }
    const handletoSpaces = ()=>{
        let remov=text.split(/\s+/);
        console.log(remov);
        setText(remov.join(" "));
        props.showAlert("Removed Extra spaces","success");
       
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div> 
            <h1  style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handletoCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
            <button className="btn btn-primary mx-2" onClick={handletoSpaces}>removes extra spaces</button>
        </div>
        <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words {text.length} characters</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:'Enter any text in the above dialog box to preview here'}</p>
       </div>
</>
    )
}
