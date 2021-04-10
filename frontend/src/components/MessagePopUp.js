import React from 'react';

function  MessagePopUp(props) {
   const handleClick = () => {
       props.toggleMessageClosed();
       };   

        return(  
            <div className="modal3">
            <div className="modal_content3">    
            <span className="close" onClick={handleClick}>
              &times;
             </span>
             {console.log(props.messageContent)}
             <div>{props.messageContent}</div>
            
                </div>
                </div>
    )
    }

export default MessagePopUp