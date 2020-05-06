let x = 0,
    y = 0;
/*let queen = {
    direction: 'S',
    position: [4, 0]
};*/


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

function changedirection() {
    while (1) {
        let dir = prompt("Enter the direction");
        let no = dir.slice(-1)
        no = parseInt(no);
        let newdir = dir.slice(0, -1)
        newdir = newdir.toUpperCase();

        switch (newdir) {
            case 'N':
                console.log(y - no);
                if (y - no < 0) {
                    console.log("Outside boundary");
                    continue;
                } else {
                    y -= no;
                    break;
                }

                case 'S':
                    if (y + no >= 8) {
                        console.log("Outside boundary");
                        continue;
                    } else {
                        y += no;
                        break;
                    }

                    case 'E':

                        if (x + no >= 8) {
                            console.log("Outside boundary");
                            continue;
                        } else {
                            x += no;
                            break;
                        }

                        case 'W':
                            if (x - no < 0) {
                                console.log("Outside boundary");
                                continue;
                            } else {
                                x -= no;
                                break;
                            }
                            case 'NE':
                                if ((x + no >= 8) && (x - no < 0)) {
                                    console.log("Outside boundary");
                                    continue;
                                } else {
                                    x += no;
                                    y -= no;
                                    break;
                                }
                                case 'NW':
                                    if ((x - no < 0) && (y - no < 0)) {
                                        console.log("Outside boundary");
                                        continue;
                                    } else {
                                        x -= no;
                                        y -= no;
                                        break;
                                    }
                                    case 'SE':
                                        if ((x + no >= 8) && (y + no >= 8)) {
                                            console.log("Outside boundary");
                                            continue;
                                        } else {
                                            x += no;
                                            y += no;
                                            break;
                                        }
                                        case 'SW':
                                            if ((x - no < 0) && (y + no >= 8)) {
                                                console.log("Outside boundary");
                                                continue;
                                            } else {
                                                x -= no;
                                                y += no;
                                                break;
                                            }
                                            default:
                                                console.log("Wrong direction value pressed");

        }
        /*queen.position[0] = x;
        queen.position[1] = y;*/
        console.log(y, x);
        console.log("Current position of queen is ", positionLog[y][x]);
        let cont = prompt("Do you want to continue");
        if (cont == 'yes' || cont == 'YES') {
            continue;
        } else {
            break;
        }

    }

}

changedirection();
console.log(x, y);