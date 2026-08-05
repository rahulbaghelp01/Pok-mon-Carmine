

import frame from "../assets/svg-border/frame.svg"

function Card({ name,image }) {

    return (
        <div className="h-90 w-60 p-2 bg-[var(--gold)] rounded">
            <div className="relative h-full w-full bg-[image:var(--paper)]">

                <div className="relative h-full w-full relative">
                    <div className="absolute top-0 left-0 w-48 h-14 overflow-hidden  ">
                        <img
                            src={frame}
                            className="absolute left-[-42px] top-[-4px]"
                        />
                    </div>
                    <p className="left-1 absolute top-0 text-[var(--gold)] font-bold">{name}</p>

                    <img className="w-full h-full object-cover" src={image} alt={`${name} img`} />
                </div>
            </div>
        </div>
    )

}



export default Card;




