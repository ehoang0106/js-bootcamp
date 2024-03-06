const name = 'Khoa Hoang';
const currenDate = new Date();
const year = currenDate.getFullYear();

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "2px solid black"
}

const List = () => {
    return (
        <div>
            <p style={customStyle}>Create by: {name}</p>
            <p>Copyright {year}</p>
            
        </div>
    );
}

export default List
