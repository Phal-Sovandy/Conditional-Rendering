
function Statistic({courseResults}){
    return (
        <div class="statistic">
            <span class="average">
                <p>AVERAGE</p>
                <h1>{(courseResults.reduce((acc, element) => acc + element.score, 0) / courseResults.length).toFixed(2)}</h1>
            </span>
            <span class="minimum">
                <p>MIN</p>
                <h1>{courseResults.reduce((acc, element) => Math.min(acc, element.score), courseResults[0].score)}</h1>
            </span>
            <span class="maximum">
                <p>MAX</p>
                <h1>{courseResults.reduce((acc, element) => Math.max(acc, element.score), courseResults[0].score)}</h1>
            </span>
        </div>
    );
}

export default Statistic