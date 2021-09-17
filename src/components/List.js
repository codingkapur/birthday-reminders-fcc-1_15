function List({ data}) {

    return(
        <>
                {data.map((d)=>{
                const {id, name, age} = d
                return <div key = {id} className="list">
                        
                        <p>{id}</p>
                        <p>{name}</p>
                        <p>{age}</p>
                        </div>
                })
                }
        </>
    )
}

export default List