import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success");
    }
    const handleLoClick = () => {
        console.log("Uppercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        console.log("Uppercase");
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!", "success");
    }
    const handleOnChange = (event) => {
        console.log("Change");
        setText(event.target.value);
        // event cause we can change the state of the text written onchanges
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#1f1f57' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#153b72' : 'white', color: props.mode === 'dark' ? 'white' : '#1f1f57' }} id="MyBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f57' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length} Time to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something"}</p>
            </div>

        </>
    )
}


// /\s+/ means any white spacess or new lines