const data = {
    title: 'Builder',
    possibleSquaresData: {
        numberOfSquares: 8,
        data: [
            {
                label: 'A',
                color: `lightcoral`,
            },
            {
                label: 'B',
                color: `lightpink`,
            },
            {
                label: 'C',
                color: `palevioletred`
            },
            {
                label: 'D',
                color: `salmon`
            },
            {
                label: 'E',
                color:`indianred`
            },
            {
                label: 'F',
                color:`crimson`
            },
            {
                label: 'G',
                color:`lightsalmon`
            },
            {
                label: 'H',
                color:`black`
            },
        ]
    },
    targetGridData: {
        hSquares: 5,
        vSquares: 8,
        onOverlap: 'move' //replace or move
    },
}

export default data;