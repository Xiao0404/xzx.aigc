interface point {
    x:number;
    y:number;

}

interface threePoint extends point {
    z:number;

}

let obj:threePoint = {
    x:1,
    y:2,
    z:3
}

