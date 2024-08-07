import './InfoWrapper.css'
import jessica from '../../assets/avatar-jessica.jpeg'
function InfoWrapper(){
    return(
        <div id='Info'>
            <img src={jessica} />
            <h1>Jessica Randall</h1>
            <h4>London, United Kingdom</h4>
            <label id='intro'>"Front-end developer and avid reader."</label>

        </div>

    )
}
export default InfoWrapper