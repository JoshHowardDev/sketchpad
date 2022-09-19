const gridContainer = document.querySelector('.gridContainer')
const setWidthBtn = document.querySelector('#setWidthBtn')
const clearBtn = document.querySelector('#clearBtn')
const blackRadio = document.querySelector('#standardBlack')
const rainbowRadio = document.querySelector('#rainbow')
const opacityRadio = document.querySelector('#growingOpacity')
const colorRadios = document.querySelectorAll('colorRadios')


setWidthBtn.addEventListener('click', setNewWidth)
clearBtn.addEventListener('click', clearGrid)
blackRadio.addEventListener('click', changeColorMethod)
rainbowRadio.addEventListener('click', changeColorMethod)
opacityRadio.addEventListener('click', changeColorMethod)

let colorType = 'hoverBlack'

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

function addHoverColor(element, colorTypeV = colorType) {
    switch(colorTypeV) {
        case 'hoverBlack':
            this.style['background-color'] ='black';
            break;
        case 'hoverRainbow':
            this.style['background-color'] = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            break;
        case 'hoverOpacity':
            if (this.classList.contains('hoverOpacity')) {
                if (this.style.opacity < 1) {
                    this.style.opacity = Number(this.style.opacity) + 0.1
                }
            } else {
                this.style['background-color'] = 'black';
                this.style.opacity = 0.1
            }
            break;            
    }
   this.classList.add(colorTypeV)    
    
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

    const colorOptionClasses = ['hoverBlack', 'hoverRainbow', 'hoverOpacity']

    colorOptionClasses.forEach(option => {
        let coloredBoxes = document.querySelectorAll(`.${option}`)
        coloredBoxes.forEach(box => {
            box.classList.remove(`${option}`)
            box.style['background-color'] = `white`;
            box.style.opacity = 1;
        })       
    })
}

function changeColorMethod() {
    clearGrid()
    colorType = this.value;
}

createGrid(16, gridContainer)