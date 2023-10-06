import './style.css'
function F1()
{
    const myStyle={
        color:"blue",
        backgroundColor:"black"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline Styling</h1>
            <h1 style={myStyle}>Internal Style</h1>
            <h1 className='c1'>External Style</h1>
            
        </div>
    )
}

export default F1; 