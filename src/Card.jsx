function Card(props) {
  return (
    <div className="card">
      <img 
        src={props.image} 
        alt={props.name} 
        className="card-image"
      />
      <div className="card-content">
        <h2>{props.name}</h2>
        <p>{props.country}</p>
        <a 
          href={props.website} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button>View Website</button>
        </a>
      </div>
    </div>
  )
}

export default Card