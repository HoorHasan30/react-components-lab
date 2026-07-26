1
function Weather({day, img, condition, time}){
    return(
        <>
          <h2>{day}</h2>
          <img src={img} alt="" />
          <p><span>conditions: </span>{condition}</p>
          <p><span>time: </span>{time}</p>
        </>
    )
}

export default Weather