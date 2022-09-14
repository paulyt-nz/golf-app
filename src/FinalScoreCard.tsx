import React from 'react';

interface FinalScoreCardProps {
    scorecard: number[][]
}

function FinalScoreCard({scorecard}: FinalScoreCardProps) {
    // render out a table with everyones scores for each hole and overall score and par comparisons

    // will also need to drop the navbar scorecard button when a round is completed
    return (
        <>
        <h2>Final Scorecard!</h2>
        <p>{scorecard[0]}</p>
            <p>{scorecard[1]}</p>
            <p>{scorecard[2]}</p>
            <p>{scorecard[3]}</p>
            <p>{scorecard[4]}</p>
            <p>{scorecard[5]}</p>
            <p>{scorecard[6]}</p>
            <p>{scorecard[7]}</p>
            <p>{scorecard[8]}</p>
        </>
    )

}

export default FinalScoreCard
