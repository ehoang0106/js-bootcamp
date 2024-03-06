
const currenDate = new Date();

const currentTime = currenDate.getHours();


function Heading() {
    return <h1>Good asd</h1>;
}

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
            <Heading></Heading>
        </div>
    );
}

export default Test
