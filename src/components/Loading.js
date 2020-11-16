import React from 'react'


function Loading() {
    return <div className="loading"><div className="Loading__spinner"></div></div>

}
export function Intro() {
    return <div className="loading">Attendi qualche secondo</div>

}
export function Main() {
    return <div className="loading">Clicca su una scheda per accedere al profilo</div>

}

export default Loading;
