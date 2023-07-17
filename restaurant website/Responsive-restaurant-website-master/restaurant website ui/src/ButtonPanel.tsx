import "./css/ButtonPanel.css"


interface ComponentNames {
    names: string[];
    
}

function ButtonPanel({names}: ComponentNames){

    return <>
        <ul>
            {names.map((name) => (
                <li>
                    <button>{name}</button>
                </li>
            ))}
        </ul>

    </>
}

export default ButtonPanel