
const currenDate = new Date(2024, 1, 1, 11);

const currentTime = currenDate.getHours();




const h1Style = {
    color: "Red",
    fontSize: "20px",
}

const partOfDay = {
    part: "Morning"
}

if (currentTime >= 12 && currentTime <= 18){
    partOfDay.part = "Afternoon";
    h1Style.color = "Green";
} else if (currentTime > 18 && currentTime <= 24) {
    partOfDay.part = "Evening";
    h1Style.color = "Blue";
}



const Test = () => {
    return (
        <div>
            <h1 style={h1Style}>Good {partOfDay.part}</h1>
            
        </div>
    );
}

export default Test
