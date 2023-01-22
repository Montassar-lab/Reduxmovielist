import { CHANGETITRE, CHANGETOILE, HANDLEADD, HANDLEDELETE, HANDLERESET } from "./Actiontype"


export const handledelete = (payload)=>{
    return (
        {
            type : HANDLEDELETE,
            payload
        }
    )
}

export const handleadd = (payload)=>{
    return(
        {
            type : HANDLEADD,
            payload
        }
    )
}

export const changetitre =(payload)=>{
    return(
        {
            type: CHANGETITRE,
            payload
        }
    )
}

export const changetoile =(payload)=>{
    return(
        {
            type: CHANGETOILE,
            payload
        }
    )
}

export const handlereset = ()=>{
    return(
        {
            type: HANDLERESET
        }
    )
}