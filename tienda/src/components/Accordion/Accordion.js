import { useState } from "react";
import { GoChevronDown , GoChevronUp } from "react-icons/go";

export default function Accordion ({content}) {

    const [isVisible, setIsVisible] = useState(false);

    function handleListaCanciones() {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

    let tracks = "";
    for (let song of content) {
        tracks += `${song}, `;
    }
    tracks = tracks.slice(0,(tracks.length - 2));

    const icon = <span className="text-info">{isVisible ? <GoChevronUp/> : <GoChevronDown/>}</span>

    return (
        <div>
            <div onClick={handleListaCanciones}>Lista de canciones {icon}</div>
            {isVisible && <div>{tracks}</div>}
        </div>
    )
}