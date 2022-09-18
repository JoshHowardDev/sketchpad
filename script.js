const gridContainer = document.querySelector('.gridContainer')
const setWidthBtn = document.querySelector('#setWidthBtn')
const clearBtn = document.querySelector('#clearBtn')

setWidthBtn.addEventListener('click', setNewWidth)
clearBtn.addEventListener('click', clearGrid)

function createGrid(width, parentElement) {
    let newDiv;
    let newRow;
    for (let i = 1; i <=width; i++) {
        newRow = document.createElement('div')
        newRow.classList.add('row')
        for (let j = 1; j <= width; j++) {
            newDiv = document.createElement('div')
            newDiv.classList.add('box')
            newDiv.addEventListener('mouseover', addHoverColor)
            newRow.appendChild(newDiv)
        }
        parentElement.appendChild(newRow)
    }
}

function addHoverColor(element) {
    this.classList.add('hoverColor')
}

function setNewWidth() {
    const newWidth = prompt('Enter a new width below.')
    
    //Check for appropriate width before proceeding
    if (4 > newWidth > 100) {
        alert('Width must be at least 4 and no more than 100.')
        return;
    }

    //Clear current grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }

    createGrid(newWidth, gridContainer)
}

function clearGrid() {
    let coloredBoxes = document.querySelectorAll('.hoverColor')

    coloredBoxes.forEach(box => {
        box.classList.remove('hoverColor')
    })
}

createGrid(16, gridContainer)