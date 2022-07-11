import React,{useState} from 'react'

export default function Textbox(props) {
    const [text, changeText] = useState("");
    const [num, counter] = useState(0)

    // funcion to count the number of words in the enterd text
    function WordCount() {
      let enText = text;
      let textsize = enText.length;
      let count = 0, i = 0, j = 0;
      while (i < textsize) {
          j = i;
          if (enText[j] === " " || enText[j] === "\n") {
              while (j < textsize && (enText[j] === " " || enText[j] === "\n")) {
                  j++;
              }
              i = j;
          }
          else {
              while (j < textsize && (enText[j] !== " " && enText[j] !== "\n")) {
                  j++;
              }
              i = j;
              count++;
          }
      }
      counter(count);
    }

    const changeHandler =(event)=>{
        changeText(event.target.value);
    }

    const wrodcounter = ()=>{
        WordCount();
    }

    const UpCase = ()=>{
        let newtext = text.toUpperCase();
        changeText(newtext);
    }

    const LowCase = ()=>{
        let newtext = text.toLowerCase();
        changeText(newtext);
    }
  return (
    <div>
        <div className="container">
            <div className="mt-5 mb-2">
                <h4 className="h4 text-danger">{props.heading}</h4>
                <textarea   className="form-control" name="" id="textbox" cols="30" rows="10" value={text} onChange={changeHandler} onKeyUp={wrodcounter} placeholder="Start typing here..."></textarea>
            </div>
            <span className="h5">{props.outputmsg}</span><span id="msg">{num}</span>
        </div>
        <div className="container text-center mt-4">
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Modify,text from here ...
                </button>
                <ul className="dropdown-menu">
                    <li className="btn btn mb-2" onClick={UpCase}>Change to UPPER CASE</li>
                    <li className="btn btn" onClick={LowCase}>Change to lower case</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
