import './style.css'

function Heading(props){
    return(
        <div className={`heading-container-light`}>
            <p>{props.title}</p>
        </div>
    )
}

export default Heading;