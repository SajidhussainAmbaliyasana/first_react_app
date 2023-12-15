import './style.css';

function Alert(props) {
  return (
    <div className='alert-outer'> 
   { props.alert &&
    <div className='alert-box'>
      <p>{props.alert.type}:{props.alert.msg}</p>
    </div>}
    </div>
  )
}

export default Alert;
