import { useState } from "react"

export const MyComponent = () => {
    return <div 
    style={{backgroundOpacity: -45 , backgroundColor: 'blue' }}>"blah"</div>
}

export const AnotherComponent = ({currentCount, countUp, countDown }) => {
    return <div>
        <p>{currentCount}</p>
        <button onClick={countUp}>Up!</button>
        <button onClick={countDown}>Down!</button>
    </div>
    
}