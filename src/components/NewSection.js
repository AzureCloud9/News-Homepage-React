import React, { useState } from 'react';

function SpecialSection({title, desc}) {
  return (
    <div className="special-style">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default function NewSection () {
    const [info, setInfo] = useState([
        {title: 'Hydrogen VS Electric Cars', desc: 'Will hydrogen-fueled cars ever catch up to EVs?', id:1},
        {title: 'The Downsides of AI Artistry', desc: 'What are the possible adverse effects of on-demand AI image generation?', id:2},
        {title: 'Is VC Funding Drying Up?', desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.', id:3,}
    ])

    return (
        <div className="newSection">
            <div className='newTitle'><h1>New</h1></div>  
            <div className='box'>
                {info.map((infos => 
                    <>
                        {infos.id === 3 ? <SpecialSection title={infos.title} desc={infos.desc} /> : 
                            <>
                                <h1>{infos.title}</h1>
                                <p>{infos.desc}</p>
                            </>}
                    </>
                ))}
            </div>
            
        </div>
    )
}
