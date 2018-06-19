import * as React from 'react'

export default function Notifications(props) {
  return <ul className='requestsDisplay'>{props.requests.map((request)=>{
  return  (<li className='requestItem' key={request.senderId}>
    sender Id: {request.senderId}<button onClick = {props.match}>acept</button> </li>)
 })}</ul>

    }
