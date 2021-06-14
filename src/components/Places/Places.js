import './Places.css'

function Places ({places, select}){
    return (
        <>
            <div className="places">
                {places && places.map((data, index)=>{
                    return (
                    <div key={index} onClick={()=>{select(data.name)}}>
                        <p>{data.name}</p>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Places;