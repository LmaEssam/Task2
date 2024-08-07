import './Choices.css'
function Choices(props){
    return(
       <button className='btns'>
        <label >{props.choicename}</label>
       </button>

    )
}
export default Choices