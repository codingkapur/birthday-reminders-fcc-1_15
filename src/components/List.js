function List({ data}) {

    return(
        <>
                {data.map((d)=>{
                const {id, name, age} = d
                return <div key = {id} className="list">
                        
                        <p className="id">{id}</p>
                        <div className="list-right">
                        <p className="name">{name}</p>
                        <p className="age">{age}</p>
                        </div>
                    </div>
                })
                }
        </>
    )
}

export default List