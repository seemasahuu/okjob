import {useState} from 'react'
 

const Editpage = ({getimgurl,setgetimgurl}) => {
    const [showPreviewButton, setShowPreviewButton] = useState("");

    const handlePreviewClick=()=>{
        setgetimgurl("")
    }
  return (
    <>
     <h1 className='text-red-700'>Editpage</h1>
  <img src={getimgurl} alt="" width={"200px"}  />
  <button className='cursor-pointer' onClick={handlePreviewClick}>Show Preview</button>
  
  </>
 
  )
}

export default Editpage