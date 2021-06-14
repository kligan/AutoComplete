import './Places.css'

function Places ({places, select}){
    return (
        <>
            <div className="places">
                {/*render the list of the countries name which match the value from the input*/}
                {places && places.map((data, index)=>{
                    return (
                    <div className="item" key={index} onClick={()=>{select(data.name)}}>
                        <p>{data.name}</p>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Places;