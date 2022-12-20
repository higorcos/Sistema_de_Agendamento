import React,{ createContext, useState} from "react";

export const BookingContext = createContext()


export  const BookingProvicer =({children})=> {
    const [statusBooking, setStatusBooking] = useState(false)
    
    const setStatus =(mode)=>{
        setStatusBooking(mode)  
    }
    return(
      <BookingContext.Provider value={{statusBooking,setStatus}}>
    {children}
    </BookingContext.Provider>
    )
}