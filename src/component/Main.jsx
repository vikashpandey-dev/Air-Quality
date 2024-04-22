import React from 'react'
import Header from './Maps/Component/Header'
import Mapprop from "./Maps/Component/Mapprop"
import Message from './Maps/Component/Message'
function Main() {
  return (
    <div>
<div>
    <Header/>
</div>
<div>
    <Mapprop/>
</div>
<div className="">
    <Message/>
</div>
    </div>
  )
}

export default Main