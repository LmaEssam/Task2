import './SelectionWrapper.css'
import Choices from '../Choices/Choicse'
function SelectionWrapper(){
    const Array=[
        {
            choicename:'GitHub',
            uniqueID:1
        },
        {
            choicename:'Frontend Mentor',
            uniqueID:2
        },
        {
            choicename:'LinkedIn',
            uniqueID:3
        },
        {
            choicename:'Twitter',
            uniqueID:4
        },
        {
             choicename:'Instagram',
             uniqueID:5
        },

    ]
    return(
        <div id='selections'>
            {Array.map((choice)=>{
                return(
                    <Choices key={choice.uniqueID} choicename={choice.choicename}></Choices>
                )
            }
            )}

        </div>
    )
    /**return(
        <div id='selections'>
            <Choices choicename='GitHub'></Choices>
            <Choices choicename='Frontend Mentor'></Choices>
            <Choices choicename='LinkedIn'></Choices>
            <Choices choicename='Twitter'></Choices>
            <Choices choicename='Instagram'></Choices>
        </div>
    )**/
}
export default SelectionWrapper