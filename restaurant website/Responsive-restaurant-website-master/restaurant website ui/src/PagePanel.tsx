import "./css/PagePanel.css"


interface ComponentNames {
    names: string[];
    
}

function PagePanel({names}: ComponentNames){

    return <>
        <div id="container">
            {names.map((name) => (
                <p id ="pages">
                    {name}
                </p>
            ))}
        </div>

    </>
}

export default PagePanel