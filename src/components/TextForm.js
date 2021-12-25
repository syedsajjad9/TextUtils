import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted u","success")
    }

    const handleLoClick=()=>{
      
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted l","success")
    }
    const handleClearClick=()=>{
      
        let newText="";
        setText(newText)
        props.showAlert(" Converted clear","success")
    }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert(" Converted first","success")
    }

    const handleExtraSpaces = ()=>{
      let  newText = text.replace(/\s+/g, ' ').trim();//text.split(/[ ]+/)
        setText(newText)//newText.json(" ")
        }
        const onRemoveDuplicatesClick = (e) => {
            let newText = text.split(' ').filter(function(item,i,allItems){
                return i === allItems.indexOf(item);
            }).join(' ');
    
            setText(newText)
            props.showAlert(" Converted removed","success")
        }

       
        const handlefontClick=()=>{
            let font=()=>{
              let val=document.getElementById('myBox');
              val.style.fontStyle="italic";
              
            }
            font(); 
            props.showAlert(" Converted font","success")
          }
       
        const handleboldClick=()=>{
            let font=()=>{
              let val=document.getElementById('myBox');
              val.style.fontWeight="bold";
              
            }
            font(); 
            props.showAlert(" Converted bold","success")
          }

          const handleReverseText = () => {
            console.log("Warning your data can be revesed .But don't worry because you can again reverse it to get the correct data.Thank you for using this function.");
           let Text = text.split("");
            let reverseText = Text.reverse().toString().replaceAll(",", "");
    
    
            console.log(Text.reverse().toString().replaceAll(",", ""));
            setText(reverseText)
            props.showAlert(" Converted reversed","success")
        }

        const rmvSpecailCharacters = () => {
            let newText = text.replace(/[^a-zA-Z 0-9]/g, "");
            setText(newText);
            props.showAlert(" Converted special","success")
         }

         const copyit=(event)=>{
            setText(event.target.value);
            let newtext=navigator.clipboard.writeText(text);
            console.log(newtext);
            alert("text copied successfully");
            props.showAlert(" Converted copy","success")
          
    };
    const handleToRepeat = () => {
        let newText = text.concat(" ");
        setText(newText.repeat(2));
        props.showAlert(" Converted repeat" ,"success")
    }

    const handleUnderscore = ()=>{
        let newText = text.replace(/ /g,  "_");
        setText(newText);
        props.showAlert(" Converted under","success")
    } 
    
    const handle_1stChar_Click = () => {
        const arr = text.split(". ");
    
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newtext3 = arr.join(". ");
        setText(newtext3);
        props.showAlert(" Converted 1st char","success")
      }

      const handleColorBlue = () => {
        
        document.getElementById('myBox').style.color = "blue";
        let newText = text;
        setText(newText)
        props.showAlert(" Converted blue","success")
    }
    const setCopyText = () => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Converted copytext","success")
      };
    
    const handleOnChange=(event)=>{
        console.log("handleOnChange was clicked")
        setText(event.target.value)
        
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
       <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading} </h1>
           <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Convert to LowerCase</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleClearClick}>Clear Text</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={intoTitleCase}>Capitalized form</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}>Remove Extra Space</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={onRemoveDuplicatesClick}>Remove Duplicate</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handlefontClick}>Italic</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleboldClick}>Bold</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleReverseText}>Reverse Text</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={rmvSpecailCharacters}>Remove Speacial Characters</button>
     
             <button  className="btn btn-primary mx-2 my-2"  onClick={copyit}>Copy And Remove</button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleToRepeat }>To Repeat </button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleUnderscore }>Under Score </button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handle_1stChar_Click }>FirstCharCapital </button>
             <button className="btn btn-primary mx-2 my-2"  onClick={handleColorBlue }>ColorBlue </button>
             <button className="btn btn-primary mx-2 my-2"  onClick={setCopyText }>Copy Text </button>

           
           
       </div>
       <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
           <h2>Your text summary</h2>
           <p> {text.split(" ").length} words and {text.length} characters</p>
           <p> {0.008 * text.split(" ").length } Minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
       </div>
       </>
    )
}
