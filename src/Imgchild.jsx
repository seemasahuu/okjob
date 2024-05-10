import React, { useEffect, useState } from 'react' //ye multipal pitures ke liye

const Imgchild = ({setgetimgurl}) => {
    
     const [array,setarry]=useState([])
 
  

  
     const handleimg=(e)=>{
        let rrr = URL.createObjectURL(e.target.files[0])
        let abc =[...array]
        let def =abc.concat(rrr)
        setarry(def)

        localStorage.setItem('imeges', JSON.stringify(def));
     }

     useEffect(() => {
        // Load images from local storage on component mount
        const storedArray = JSON.parse(localStorage.getItem('imeges')) || [];
        setarry(storedArray);
      }, []);
     
      const imgclick=(e)=>{
        setgetimgurl(e)
      }

    
  return (
    <>
   <input className='py-3 pb-0 px-7' type="file"  onChange={handleimg}/>


   {array.map((e)=>{
    return(
        <>
        <img className='h-28 w-64 my-9 mx-5' src={e} alt="" width={"200px"} onClick={()=>imgclick(e)}/>
        </>
    )
   })}
 
    </>
  )
}

export default Imgchild