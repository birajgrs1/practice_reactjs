const ShowTime = () => {
    let currentTime = new Date(); 
    return <p className="fw-normal lead">This is the current time: {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</p>;
};

export default ShowTime;
