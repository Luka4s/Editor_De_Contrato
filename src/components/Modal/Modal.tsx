import React from 'react';

export interface MyModal{
    open: boolean;
}
export function Modal(open:MyModal){
    
    if(open){ 
        return (
             <div>
                Modal
                <div>Modal</div>
                <div>Modal</div>
            </div>
            
    )} else {
        return null
    }
    
    
}