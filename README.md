# Builder

## Usage
(supposing ```move``` mode)
* To place an element from the source to the board, do a drag-and-drop gesture.
* It is possible to drag elements from inside the board.
* When dropping in an occupied square, the element in the square is repositioned if possible. If not possible, then the new element will be deleted if it comes from the board.
* It is possible to import and export in JSON format.

### Configuration
* ```config.js``` contains most of the possible configuration of the component.
* In this file, it is possible to modify the dimensions of the board as well as the number and nature of the elements of the source.
* The component must be given an interface to be available in the source. By default, there is a MySquare component serving this purpose, with properties of color and letter.
* By default the interaction mode is set to ```move```. It can be changed to ```replace``` mode, in which case all dropped elements will replace the incumbent.

### Used libraries
* Pure ReactJS.