function AlertIt() {
    alert("Ссылка в данный момент недоступна");
}
let counter = 0;
function Show(id){
    // let id2 = 0;
    if(counter == 1)
    {
        for(let i = 1; i < 4; i++)
        {
            if(i == "1")
                id2 = "home";
            else if(i == "2")
                id2 = "rules";
            else if(i == "3")
                id2 = "roles"; 
            document.getElementById(i).style.display = 'none';
            document.getElementById(id2).style.borderBottom = 'none';
        }
        counter--;
    }
    if(id == "1")
        id2 = "home";
    else if(id == "2")
        id2 = "rules";
    else if(id == "3")
        id2 = "roles"; 
    document.getElementById(id).style.display = 'block';
    document.getElementById(id2).style.borderBottom = '3px solid rgb(139,45,184)';
    counter++;
}
let x = "";
let adCounter = 0;
function ShowAd(id3){
    for(let i = 4; i < 7; i++)
    {
        if(i == "4")
            id4 = "ad1";
        else if(i == "5")
            id4 = "ad2";
        else if(i == "6")
            id4 = "ad3"; 
        document.getElementById(id4).style.display = 'none';
        document.getElementById(i).style.backgroundColor = 'grey';
    }
    adCounter--;
    if(id3 == "4"){
        id4 = "ad1";
        x = "4";
    }
    else if(id3 == "5"){
        id4 = "ad2";
        x = "5"
    }
    else if(id3 == "6"){
        id4 = "ad3";
        x = "6"
    }
    document.getElementById(id4).style.display = 'block';
    document.getElementById(id3).style.backgroundColor = 'black';
    adCounter++;
}

function ShowAdPlus(){
    for(let i = 4; i < 7; i++)
    {
        if(i == "4")
            id4 = "ad1";
        else if(i == "5")
            id4 = "ad2";
        else if(i == "6")
            id4 = "ad3"; 
        document.getElementById(id4).style.display = 'none';
        document.getElementById(i).style.backgroundColor = 'grey';
    }
        adCounter--;
        if(x == "4"){
            id4 = "ad2";
            x = "5";
        }
        else if(x == "5"){
            id4 = "ad3";
            x = "6";
        }
        else if(x == "6"){
            id4 = "ad1";
            x = "4";
        }
    document.getElementById(id4).style.display = 'block';
    document.getElementById(x).style.backgroundColor = 'black';
    adCounter++;
}
function ShowAdMinus(){
    for(let i = 4; i < 7; i++)
    {
        if(i == "4")
            id4 = "ad1";
        else if(i == "5")
            id4 = "ad2";
        else if(i == "6")
            id4 = "ad3"; 
        document.getElementById(id4).style.display = 'none';
        document.getElementById(i).style.backgroundColor = 'grey';
    }
        adCounter--;
        if(x == "4"){
            id4 = "ad3";
            x = "6";
        }
        else if(x == "5"){
            id4 = "ad1";
            x = "4";
        }
        else if(x == "6"){
            id4 = "ad2";
            x = "5";
        }
    document.getElementById(id4).style.display = 'block';
    document.getElementById(x).style.backgroundColor = 'black';
    adCounter++;
}

window.onload = Show(1);
window.onload = ShowAd(4);