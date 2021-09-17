function Button({onClick}) {
    return (
        <button className="btn clear-btn" onClick = {()=> onClick()}>Clear All</button>
    )
}

export default Button