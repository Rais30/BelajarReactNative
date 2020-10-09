import React from 'react'
import {Text} from "react-native";

// const TextCustom= (prompt)=>{
//     return  <Text style={{fontSize:30}}>Hallo Rais</Text>
// }
// export default TextCustom;


const TextCustom= (prompt)=>{
return  <Text style={{color:prompt.color}}>{prompt.title}</Text>
}
export {TextCustom};