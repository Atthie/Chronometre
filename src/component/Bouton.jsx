
function Bouton(props){
    return (
        <button className={props.style} onClick={props.function} type={props.type}> {props.nom} </button>
    )
}

export default Bouton;