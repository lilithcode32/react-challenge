import React from "react";


function doAFlip(){
console.log("d-d-d-d-d-debounce");
}

export default function SearchBox() : React.ReactElement{



    return <div><input type="text" onChange={doAFlip} /></div>
}
