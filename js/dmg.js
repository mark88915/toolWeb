var attackTarget = {
    singleTarget : {
        "physicalAttack" : 2,
        "magicalAttack" : 1.5,
        "low" : 3,
        "middle" : 3.4,
        "high" : 3.8,
        "super" : 4.2,
        "ultra" : 8
    },
    multiTarget : {
        "physicalAttack" : "notExist",
        "magicalAttack" : "notExist",
        "low" : 2.2,
        "middle" : 2.3,
        "high" : 2.4,
        "super" : 2.8,
        "ultra" : 7.2
    }
}

var attackBoost = {
    noBoost : {
        singleTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : 1,
            "middle" : 1,
            "high" : 1,
            "super" : 1,
            "ultra" : 1
        },
        multiTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : 1,
            "middle" : 1,
            "high" : 1,
            "super" : 1,
            "ultra" : 1
        }
    },
    boost : {
        singleTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : 1.4,
            "middle" : 1.2,
            "high" : 1.3,
            "super" : 1.3,
            "ultra" : 1.4
        },
        multiTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : "notExist",
            "middle" : 1.4,
            "high" : 1.4,
            "super" : 1.4,
            "ultra" : 1.4
        }
    },
    greatBoost : {
        singleTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : "notExist",
            "middle" : "notExist",
            "high" : 1.6,
            "super" : 1.6,
            "ultra" : 1.7
        },
        multiTarget : {
            "physicalAttack" : "notExist",
            "magicalAttack" : "notExist",
            "low" : "notExist",
            "middle" : "notExist",
            "high" : "notExist",
            "super" : "notExist",
            "ultra" : 1.7
        }
    }
}

function partOpenClose(id){
    var title = document.getElementById(id);
    var part = document.getElementById(id+'Part');

    var titleText = title.textContent;
    var newTitleText = "";

    if(part.style.display != 'none'){
        newTitleText = titleText.replace("???","???");
        title.textContent = newTitleText;
        part.style.display = 'none';
    }else{
        newTitleText = titleText.replace("???","???");
        title.textContent = newTitleText;
        part.style.display = 'block';
    }
}

function calculateDmg(){
    //??????
    let result = document.getElementById('result');

    //?????????
    let attackPoint = document.getElementById("attackP").value;
    //????????????
    let mainBuff = ((document.getElementById("mainBuff").value)/100)+1;

    //????????????
    let target = document.getElementById('skillTarget').value;
    //????????????
    let power = document.getElementById('skillPower').value;
    //????????????
    let boost = document.getElementById('skillBoost').value;
    //????????????
    let killer = document.getElementById('killer').value;

    //????????????
    let enemyDEF = document.getElementById('enemyDEF').value;
    //??????????????????
    let enemyEND = (document.getElementById('enemyEND').value/100)+1;
    //???????????????
    let PADebuff = document.getElementById('PADebuff').value/100;
    //????????????
    let elementDebuff = document.getElementById('elementDebuff').value/100;
    //???????????????
    let attackTargetDebuff = document.getElementById('attackTargetDebuff').value/100;
    
    //????????????
    let dmgPerSkill = document.getElementById('dmgPerSkill').value/100;
    //????????????
    let times = document.getElementById('times').value;
    //????????????
    let elementDmg = document.getElementById('elementDmg').value/100+1;
    
    //????????????
    let development = document.getElementById('developmentSkill').value/100;
    //????????????
    let ascend = document.getElementById('ascend').value;

    //combo
    let combo = (0.2*(document.getElementById('saCombo').value-1))+1;

    //??????
    let critical = document.getElementById('critical').value;
    //??????
    let penentration = document.getElementById('penentration').value;
    //??????
    let guard = document.getElementById('guard').value;
    //????????????
    let wargame = document.getElementById('wargaming').value;

    //??????
    let dmg = Math.floor(attackPoint*mainBuff);
    dmg = Math.floor(dmg*killer);

    //?????????
    let def = Math.floor(enemyDEF*enemyEND);
    if(penentration == "yes"){
        def = (Math.floor(def*0.5))/2;
    }else if(penentration == "no"){
        def = def/2;
    }

    if(attackBoost[boost][target][power]=='notExist'){
        result.innerHTML = '?????????????????????';
        return false;
    }else{
        dmg = Math.floor(dmg * attackBoost[boost][target][power]);
    }

    if(attackTarget[target][power] == 'notExist'){
        result.innerHTML = '?????????????????????';
        return false;
    }else{
        dmg = (dmg - def) * attackTarget[target][power];
    }

    dmg*=((dmgPerSkill*times)+1);

    dmg*=elementDmg;

    let resist = (1-PADebuff-elementDebuff<0) ? 0 : 1-PADebuff-elementDebuff;
    if(resist>0){
        dmg = resist*dmg;
    }else if(resist<0){
        dmg = resist*dmg;
    }

    if(attackTargetDebuff>0){
        dmg = (1+attackTargetDebuff)*dmg
    }else if(attackTargetDebuff<0){
        dmg = (1-attackTargetDebuff)*dmg;
    }

    if(critical == 1.5 && penentration == 'yes'){
        if(ascend == 0.06){
            dmg = (1+Number(development)+Number(ascend))*dmg;
        }else if(ascend == 0.03){
            dmg = (1+Number(development)+Number(ascend))*dmg;
        }else{
            dmg = (1+development)*dmg;
        }
    }else if(critical == 1.5 && penentration == 'no'){
        if(ascend == 0.06){
            dmg = (1+development+0.03)*dmg;
        }else if(ascend == 0.03){
            dmg = (1+development)*dmg;
        }else{
            dmg = (1+development)*dmg;
        }
    }else if(critical == 1 && penentration == 'yes'){
        if(ascend == 0.06){
            dmg = (1+development+0.03)*dmg;
        }else if(ascend == 0.03){
            dmg = (1+development+0.03)*dmg;
        }else{
            dmg = (1+development)*dmg;
        }
    }else{
        dmg = (1+development)*dmg;
    }

    dmg *= combo;

    if(critical == 1.5){
        dmg*=critical;
    }

    if(guard == 0.5){
        dmg*=guard;
    }

    if(wargame == 0.2){
        dmg*=wargame;
    }

    let minDmg = Math.floor(dmg*0.96);
    let maxDmg = Math.floor(dmg*1.04);

    result.innerHTML = "?????????????????????"+minDmg+"~"+maxDmg+"??????";
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

function reset(){
    document.getElementById('result').innerHTML = "";
}