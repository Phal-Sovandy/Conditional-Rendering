import Statistic from "./Statistic.jsx";

function Scores(props){
    return(
    <div className="scores">
        <h1>{props.courseName}</h1>

        <table>
        <thead>
            <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {props.courseResults.map(element => (
                    <tr key={element.lastName}>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td className={element.score < 50 ? "warning" : ""}>{element.score}</td>
                    </tr>
                )
            )}
        </tbody>
        </table>
        <Statistic courseResults={props.courseResults} />
    </div>
    );
}

export default Scores;