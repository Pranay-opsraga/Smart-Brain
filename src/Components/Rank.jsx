const Rank = ({ name, entries }) => {
    return (
        <div className="rank-container">
            <p>{name}, your current entry count is...</p>
            <p className="rank-number">#{entries}</p>
        </div>
    )
}

export default Rank;