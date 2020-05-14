let q;
//Constructor
function Queen(direction, position) {
    this.direction = direction;
    this.position = position;
}
//Object
let white = new Queen("N", [0, 0]);
let black = new Queen("S", [0, 0]);

let positionLog =

    [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    ];

//System Queen
function blackqueen() {
    q = 2;
    //Random direction generator
    const dirgen = ['N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW']
    let c = Math.floor(Math.random() * 8);

    //Random steps generator (Generating from 1 to 8)

    let s = Math.floor(Math.random() * 8) + 1;
    console.log(`Black Queen Direction: ${dirgen[c]} value:${s}`);
    changedirection(dirgen[c], s);


}

//User Queen
function whitequeen() {
    q = 1;
    let dir = prompt("Enter the direction");
    //Storing direction value like 1,2
    let no = dir.slice(-1);
    no = parseInt(no);
    //Storing only direction like N,SE
    let newdir = dir.slice(0, -1);
    newdir = newdir.toUpperCase();
    console.log(`White Queen Direction: ${newdir} value:${no}`);
    changedirection(newdir, no);
}
//Checking both the queens are in same position or not
function check() {
    if ((white.position[0] == black.position[0]) && (white.position[1] == black.position[1])) {
        console.log("Both queen are in same place");
        return 1;
    } else {
        return 0;
    }
}

function game() {
    while (1) {
        whitequeen();
        if (check()) {
            break;
        }
        blackqueen();
        if (check()) {
            break;
        }
    }
}


function changedirection(newdir, no) {
    if (q == 1) {
        x = white.position[0];
        y = white.position[1];
    } else {
        x = black.position[0];
        y = black.position[1];
    }
    switch (newdir) {
        case 'N':
            console.log(y - no);
            if (y - no < 0) {
                console.log("Outside boundary");
                return;
            } else {
                y -= no;
                break;
            }

            case 'S':
                if (y + no >= 8) {
                    console.log("Outside boundary");
                    return;
                } else {
                    y += no;
                    break;
                }

                case 'E':

                    if (x + no >= 8) {
                        console.log("Outside boundary");
                        return;
                    } else {
                        x += no;
                        break;
                    }

                    case 'W':
                        if (x - no < 0) {
                            console.log("Outside boundary");
                            return;
                        } else {
                            x -= no;
                            break;
                        }
                        case 'NE':
                            if ((x + no >= 8) && (x - no < 0)) {
                                console.log("Outside boundary");
                                return;
                            } else {
                                x += no;
                                y -= no;
                                break;
                            }
                            case 'NW':
                                if ((x - no < 0) && (y - no < 0)) {
                                    console.log("Outside boundary");
                                    return;
                                } else {
                                    x -= no;
                                    y -= no;
                                    break;
                                }
                                case 'SE':
                                    if ((x + no >= 8) && (y + no >= 8)) {
                                        console.log("Outside boundary");
                                        return;

                                    } else {
                                        x += no;
                                        y += no;
                                        break;
                                    }
                                    case 'SW':
                                        if ((x - no < 0) && (y + no >= 8)) {
                                            console.log("Outside boundary");
                                            return;

                                        } else {
                                            x -= no;
                                            y += no;
                                            break;
                                        }
                                        default:
                                            console.log("Wrong direction value pressed");

    }
    //Checking white or black queen and then inserting the new position
    if (q == 1) { //White queen
        white.position[0] = x;
        white.position[1] = y;
        console.log(white.position[0], white.position[1]);
        console.log("Current position of White queen is ", positionLog[white.position[1]][white.position[0]]);
    } else { //Black Queen
        black.position[0] = x;
        black.position[1] = y;
        console.log(black.position[0], black.position[1]);
        console.log("Current position of Black queen is ", positionLog[black.position[1]][black.position[0]]);
    }

}
game();