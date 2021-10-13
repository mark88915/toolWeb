var turn1 = 0;
var turn2 = 0;
var turn3 = 0;
var turn4 = 0;
var turn5 = 0;
var turn6 = 0;
var turn7 = 0;
var turn8 = 0;
var turn9 = 0;
var turn10 = 0;
var turn11 = 0;
var turn12 = 0;
var turn13 = 0;
var turn14 = 0;

function calculate(){
    let thisOne;

    turn1 = 0;
    turn2 = 0;
    turn3 = 0;
    turn4 = 0;
    turn5 = 0;
    turn6 = 0;
    turn7 = 0;
    turn8 = 0;
    turn9 = 0;
    turn10 = 0;
    turn11 = 0;
    turn12 = 0;
    turn13 = 0;
    turn14 = 0;
    
    for(let i = 1; i <= 14; i++){
        for(let j = 1; j <= 6; j++){
            if(i==1){
                thisOne = document.getElementById("turn1-"+j).value;
                turn1 += checkPercent(thisOne);
            }else if(i==2){
                thisOne = document.getElementById("turn2-"+j).value;
                turn2 += checkPercent(thisOne);
            }else if(i==3){
                thisOne = document.getElementById("turn3-"+j).value;
                turn3 += checkPercent(thisOne);
            }else if(i==4){
                thisOne = document.getElementById("turn4-"+j).value;
                turn4 += checkPercent(thisOne);
            }else if(i==5){
                thisOne = document.getElementById("turn5-"+j).value;
                turn5 += checkPercent(thisOne);
            }else if(i==6){
                thisOne = document.getElementById("turn6-"+j).value;
                turn6 += checkPercent(thisOne);
            }else if(i==7){
                thisOne = document.getElementById("turn7-"+j).value;
                turn7 += checkPercent(thisOne);
            }else if(i==8){
                thisOne = document.getElementById("turn8-"+j).value;
                turn8 += checkPercent(thisOne);
            }else if(i==9){
                thisOne = document.getElementById("turn9-"+j).value;
                turn9 += checkPercent(thisOne);
            }else if(i==10){
                thisOne = document.getElementById("turn10-"+j).value;
                turn10 += checkPercent(thisOne);
            }else if(i==11){
                thisOne = document.getElementById("turn11-"+j).value;
                turn11 += checkPercent(thisOne);
            }else if(i==12){
                thisOne = document.getElementById("turn12-"+j).value;
                turn12 += checkPercent(thisOne);
            }else if(i==13){
                thisOne = document.getElementById("turn13-"+j).value;
                turn13 += checkPercent(thisOne);
            }else if(i==14){
                thisOne = document.getElementById("turn14-"+j).value;
                turn14 += checkPercent(thisOne);
            }
        }
    }

    document.getElementById("turn1ToT").innerHTML = getTurnToT(1);
    document.getElementById("turn2ToT").innerHTML = getTurnToT(2);
    document.getElementById("turn3ToT").innerHTML = getTurnToT(3);
    document.getElementById("turn4ToT").innerHTML = getTurnToT(4);
    document.getElementById("turn5ToT").innerHTML = getTurnToT(5);
    document.getElementById("turn6ToT").innerHTML = getTurnToT(6);
    document.getElementById("turn7ToT").innerHTML = getTurnToT(7);
    document.getElementById("turn8ToT").innerHTML = getTurnToT(8);
    document.getElementById("turn9ToT").innerHTML = getTurnToT(9);
    document.getElementById("turn10ToT").innerHTML = getTurnToT(10);
    document.getElementById("turn11ToT").innerHTML = getTurnToT(11);
    document.getElementById("turn12ToT").innerHTML = getTurnToT(12);
    document.getElementById("turn13ToT").innerHTML = getTurnToT(13);
    document.getElementById("turn14ToT").innerHTML = getTurnToT(14);

    const aSpecialArt = 13+(8/9);

    document.getElementById("turn1SA").innerHTML = Math.floor(getTurnToT(1)/aSpecialArt);
    document.getElementById("turn2SA").innerHTML = Math.floor(getTurnToT(2)/aSpecialArt);
    document.getElementById("turn3SA").innerHTML = Math.floor(getTurnToT(3)/aSpecialArt);
    document.getElementById("turn4SA").innerHTML = Math.floor(getTurnToT(4)/aSpecialArt);
    document.getElementById("turn5SA").innerHTML = Math.floor(getTurnToT(5)/aSpecialArt);
    document.getElementById("turn6SA").innerHTML = Math.floor(getTurnToT(6)/aSpecialArt);
    document.getElementById("turn7SA").innerHTML = Math.floor(getTurnToT(7)/aSpecialArt);
    document.getElementById("turn8SA").innerHTML = Math.floor(getTurnToT(8)/aSpecialArt);
    document.getElementById("turn9SA").innerHTML = Math.floor(getTurnToT(9)/aSpecialArt);
    document.getElementById("turn10SA").innerHTML = Math.floor(getTurnToT(10)/aSpecialArt);
    document.getElementById("turn11SA").innerHTML = Math.floor(getTurnToT(11)/aSpecialArt);
    document.getElementById("turn12SA").innerHTML = Math.floor(getTurnToT(12)/aSpecialArt);
    document.getElementById("turn13SA").innerHTML = Math.floor(getTurnToT(13)/aSpecialArt);
    document.getElementById("turn14SA").innerHTML = Math.floor(getTurnToT(14)/aSpecialArt);
}

function getTurnToT(turn, turnNum){
    switch(turn){
        case 1:
            return document.getElementById("turn1ToT").innerHTML = fourOutFiveIn(turn1);
        case 2:
            return document.getElementById("turn2ToT").innerHTML = fourOutFiveIn(turn1+turn2);
        case 3:
            return document.getElementById("turn3ToT").innerHTML = fourOutFiveIn(turn1+turn2+turn3);
        case 4:
            return document.getElementById("turn4ToT").innerHTML = fourOutFiveIn(turn1+turn2+turn3+turn4);
        case 5:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5);
        case 6:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6);
        case 7:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7);
        case 8:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8);
        case 9:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9);
        case 10:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9+turn10);
        case 11:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9+turn10+turn11);
        case 12:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9+turn10+turn11+turn12);
        case 13:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9+turn10+turn11+turn12+turn13);
        case 14:
            return fourOutFiveIn(turn1+turn2+turn3+turn4+turn5+turn6+turn7+turn8+turn9+turn10+turn11+turn12+turn13+turn14);
    }
}

function fourOutFiveIn(theNumber){
    return Math.round(theNumber*100)/100;
}

function checkPercent(percent){
    if(percent == "0"){
        return 0;
    }else if(percent == "1"){
        return 1;
    }else if(percent == "33%"){
        return 1+(1/3);
    }else if(percent == "66%"){
        return 1+(2/3);
    }else if(percent == "100%"){
        return 2;
    }else if(percent == "111%"){
        return 2+(1/9);
    }else if(percent == "133%"){
        return 2+(1/3);
    }else if(percent == "144%"){
        return 2+(1/3)+(1/9);
    }else if(percent == "200%"){
        return 3;
    }else if(percent == "211%"){
        return 3+(1/9);
    }
}

function reset(){
    elements = document.getElementsByTagName("select")
    for(let i=0; i < elements.length; i++){
        elements[i].selectedIndex= 0;
    }

    for(let i=1; i <= 14; i++){
        document.getElementById("turn"+i+"ToT").innerHTML = 0;
        document.getElementById("turn"+i+"SA").innerHTML = 0;
    }

    turn1 = 0;
    turn2 = 0;
    turn3 = 0;
    turn4 = 0;
    turn5 = 0;
    turn6 = 0;
    turn7 = 0;
    turn8 = 0;
    turn9 = 0;
    turn10 = 0;
    turn11 = 0;
    turn12 = 0;
    turn13 = 0;
    turn14 = 0;
}

function showDescription(){
    var blackOut = document.getElementById("blackOut");
    blackOut.style.display = 'block';

    
    var descriptionWindow = document.getElementById("descriptionContainer");
    descriptionWindow.style.display = 'block';
}

function closeDescription(){
    var blackOut = document.getElementById("blackOut");
    blackOut.style.display = 'none';

    var descriptionWindow = document.getElementById("descriptionContainer");
    descriptionWindow.style.display = 'none';
}

function allAccelerater(id){
    elements = document.getElementsByTagName("select");
    number = document.getElementById("whichCharacter").value;
    start = number*14;
    end = start+14;

    if(id == "thirtyThree"){
        if(number != 6){
            for(start; start < end; start++){
                elements[start].selectedIndex= 2;
            }
        }else{
            for(let i=0; i < elements.length-1; i++){
                elements[i].selectedIndex= 2;
            }
        }
    }else if(id == "sixtySix"){
        if(number != 6){
            for(start; start < end; start++){
                elements[start].selectedIndex= 3;
            }
        }else{
            for(let i=0; i < elements.length-1; i++){
                elements[i].selectedIndex= 3;
            }
        }
    }
}

/*
function showImage(){
    var img = document.getElementById("category1");
    img.style.display = 'block';
}

function dontShowImage(){
    var img = document.getElementById("category1");
    img.style.display = 'none';
}
*/