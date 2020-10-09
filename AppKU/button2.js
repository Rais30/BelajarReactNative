import React from 'react'
import  {Button} from "react-native"

const ButtonCostem=(props)=>{
return(
    <Button title={props.title} color={props.color} onPress={props.onPress}/>
)
}
export{ButtonCostem};