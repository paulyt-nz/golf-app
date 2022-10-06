import React, { useEffect, useState } from 'react'
import { pauatahanui, redwood, initialButtonState, initialOptions } from './initialValues'
import MainScorecardDisplay from './MainScorecardDisplay';
import NavBar from './NavBar';

import { Paper } from '@mui/material';
import RoundSetUpForm from './RoundSetUpForm';
import FinalScoreCard from './FinalScoreCard';
import { Player, Scorecard, NumHoles, Course, ButtonState, RoundType, ScorecardOptions} from './commonTypes'
import { StringifyOptions } from 'querystring';


function GolfApp(): JSX.Element {

// *************************************************************************************//
// State    

    const [currentHoleIndex,    setCurrentHoleIndex]   = useState(0)
    const [isRoundSetUp,        setIsRoundSetUp]       = useState(false)
    const [showScorecard,       setShowScorecard]      = useState(false)
    const [courseInfo,          setCourseInfo]         = useState<Course>(redwood)
    const [players,             setPlayers]            = useState<Player[]>([])
    const [scorecard,           setScorecard]          = useState<Scorecard>([]) 
    const [isButtonSelected,    setIsButtonSelected]   = useState<ButtonState>(initialButtonState)
    const [numHoles ,           setNumHoles]           = useState<NumHoles>(18)
    const [round ,              setRound]              = useState('')
    const [options,             setOptions]            = useState<ScorecardOptions>(initialOptions)

    const [value, setValue] = useState(0);

// *************************************************************************************//
// Functions

    const updateScorecard = (score: number, playerIndex: number, holeIndex: number) => {
        let newScorecard = [...scorecard];
        newScorecard[holeIndex][playerIndex] = score;
        setScorecard(newScorecard)
    }

    const useSelectThisButtonAndDeselectTheRestOfThem = (indexOfThisButton: number, playerIndex: number) => {
        let newButtonsSelected = isButtonSelected
        newButtonsSelected[playerIndex] = [ false, false, false, false, false, false]
        newButtonsSelected[playerIndex][indexOfThisButton] = true
        setIsButtonSelected(newButtonsSelected)
        setValue(value => value + 1)
    }

    const nextHole = (currentHoleIndex: number, scorecard: Scorecard) => {
        let isThereEmptyScores = scorecard[currentHoleIndex].some(score => score === 0) // should give true or false
        if (isThereEmptyScores) {
            return alert('Oi, check all the players scores!')  // can make a better system for this later
        }
        if (currentHoleIndex < courseInfo.numHoles - 1) {
            setCurrentHoleIndex(currentHoleIndex + 1);
        } else {
            toggleScorecard()
        }

        const resetButtons = createBlankButtonStateArray(players.length)
        setIsButtonSelected(resetButtons);
    }

    const toggleScorecard = () => {
        setShowScorecard(!showScorecard)
    }

    const reset = () => {        
        setCurrentHoleIndex(0);
        setShowScorecard(false)
        let blankButtonStateArray = createBlankButtonStateArray(4)
        setIsButtonSelected(blankButtonStateArray)
        setIsRoundSetUp(false)
        setPlayers([])
        setScorecard([])
    }

    const addPlayerToRound = (newPlayerName: Player): void => {
        let newPlayers = [...players, newPlayerName]
        setPlayers(newPlayers)
    }

    const startNewRound = (numPlayers: number, numHoles: number): void => {
        if (!players.length) return  // a little hacky maybe but it works for now

        setIsRoundSetUp(true)
        let newScorecard = createBlankScorecardArray(numPlayers, numHoles)
        setScorecard(newScorecard)
        let blankButtonStateArray = createBlankButtonStateArray(numPlayers)
        setIsButtonSelected(blankButtonStateArray)
        setValue(value => value + 1)
    }

    const createBlankScorecardArray = (numPlayers: number, numHoles: number): Scorecard => {
        let blankScorecard = new Array(numHoles).fill(0).map(i =>  new Array(numPlayers).fill(0));
        return blankScorecard
    }

    const createBlankButtonStateArray = (numPlayers: number): ButtonState => {
        let playerButtons = new Array(6).fill(false);
        let blankButtonArray = new Array(numPlayers).fill(playerButtons);
        return blankButtonArray
    }

    const generateNewScorecard = (numPlayers: number, numHoles: number): void => {
        let newScorecard = createBlankScorecardArray(numPlayers, numHoles)
        setScorecard(newScorecard)
    }

    const setRoundHoles = (roundType: string) => {
        setRound(roundType)
        if (roundType === '9-once' || roundType === '9-front' || roundType === '9-back') {
            setNumHoles(9)
        } else {
            setNumHoles(18)
        }        
    }

    useEffect(() => {
        generateNewScorecard(players.length, numHoles)
        startNewRound(players.length, numHoles)
        setRoundOptions(round)
        console.log('use effect is running')
    }, [round])

    
    const setRoundOptions = (roundType : string) => {
        let tableHeadArray = courseInfo.holes.map((hole : any) => hole.name)

        if (roundType === '18-fullround') {
            
            options.tableHeadFirstNine = tableHeadArray.slice(0,9),
            options.tableHeadSecondNine = tableHeadArray.slice(9),
            options.tableTitleTop = "Front Nine",
            options.tableTitleBottom = "Back Nine",
            options.topScorecard = scorecard.slice(0,9),
            options.bottomScorecard = scorecard.slice(9)

            // options.tableHeadFirstNine = tableHeadArray.slice(0,9),
            // options.tableHeadSecondNine = tableHeadArray.slice(9),
            // options.tableTitleTop = "Front Nine",
            // options.tableTitleBottom = "Back Nine",
            // options.topScorecard = scorecard.slice(0,9),
            // options.bottomScorecard = scorecard.slice(9)
            
        } else if (roundType === '9-once'){
            
            options.tableHeadFirstNine = tableHeadArray.slice(0,9),
            options.tableHeadSecondNine = null,
            options.tableTitleTop = "Front Nine",
            options.tableTitleBottom = null,
            options.topScorecard = scorecard,
            options.bottomScorecard = scorecard
            

        } else if (roundType === '9-front'){
            
            options.tableHeadFirstNine = tableHeadArray.slice(0,9),
            options.tableHeadSecondNine = null,
            options.tableTitleTop = "Front Nine",
            options.tableTitleBottom = null,
            options.topScorecard = scorecard,
            options.bottomScorecard = scorecard
            
        } else if (roundType === '9-back'){
            
            options.tableHeadFirstNine = tableHeadArray.slice(9),
            options.tableHeadSecondNine = null,
            options.tableTitleTop = "Back Nine",
            options.tableTitleBottom = null,
            options.topScorecard = scorecard,
            options.bottomScorecard = scorecard
            
        } else { // last one is round twice on a nine hole
            
            options.tableHeadFirstNine = [...tableHeadArray],
            options.tableHeadSecondNine =  [...tableHeadArray],
            options.tableTitleTop = "First Nine",
            options.tableTitleBottom = "Second Nine",
            options.topScorecard = scorecard.slice(0,9),
            options.bottomScorecard = scorecard.slice(9)
        }
    }

// *************************************************************************************//
// Styles

    const paperStyles: React.CSSProperties = {
        padding: 0,
        margin: 0,
        height: "100%", // may need to go back to 100vh 
        backgroundColor: "#fafafa",
    }

// *************************************************************************************//
// Conditional rendering of main page

    let mainPageRender: JSX.Element;

    if (isRoundSetUp === false) {
        mainPageRender = <RoundSetUpForm 
            addPlayerToRound={addPlayerToRound}
            players={players}
            startNewRound={startNewRound}
            generateNewScorecard={generateNewScorecard}
            setRoundHoles={setRoundHoles}
            numHoles={numHoles}
            courseInfo={courseInfo}
            />

    } else if (showScorecard === true) {
        mainPageRender = <FinalScoreCard 
            courseInfo={courseInfo}
            players={players}
            scorecard={scorecard}
            numHoles={numHoles}
            round={round}
            options={options}
            />

    } else {
        mainPageRender = (<MainScorecardDisplay 
            holeIndex={currentHoleIndex}
            name={courseInfo.holes[currentHoleIndex].name} 
            par={courseInfo.holes[currentHoleIndex].par}
            strokeIndex={courseInfo.holes[currentHoleIndex].strokeIndex}
            tee={courseInfo.holes[currentHoleIndex].tee}
            players={players}
            updateScorecard={updateScorecard}
            nextHole={nextHole}
            scorecard={scorecard}
            useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem}
            isButtonSelected={isButtonSelected}
            />)
    } 

// *************************************************************************************//
// Return

    return(
        <Paper style={paperStyles}elevation={0}>
            <NavBar toggleScorecard={toggleScorecard} scorecard={scorecard} reset={reset} />            
            {mainPageRender}
        </Paper>
    )
}

export default GolfApp;