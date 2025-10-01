/*
Author: Kaitlyn Armstrong
Date: 9/26/2025
Desc: This code is write to control paths based on local html file inputs. It is designed for a linear choose your own adventure game in which total wrong choices
    determine the final outcome, and gradual increases in wrong answers shape the world of the player. All buttons coded locally since wrong/right varies
Note: Yes I am well aware this is not techincally required for the project; however, I am a CS student and I need this for my portfolio cause the job market is scary 
    rn. This has kept me invested in the project and I hope you enjoy the outcome -Kaitlyn :) 
*/
let testNum;
let wrongAns;

function callPath(){
    //Initiated on open of page3.html
    testNum = parseInt(localStorage.getItem('testNum')) || 0; 
    wrongAns = parseInt(localStorage.getItem('wrongAns')) || 0;
}

function wrongChoice(){
    // Wrong button/choice selected
    wrongAns++;
    testNum++;
    localStorage.setItem('testNum', testNum);
    localStorage.setItem('wrongAns', wrongAns);
    redirect(false);
}

function correctChoice(){
    testNum++;
    localStorage.setItem('testNum', testNum);
    localStorage.setItem('wrongAns', wrongAns);
    redirect(true);
}

function redirect(flag){
    //Flag is to control where code goes after designated switch
    switch(testNum)
    {
        case 1: //After First Test Redirect
            if(flag === true) {window.location.href = 'page5.html';}
            else {window.location.href = 'page4.html';}
            break;
        case 2: //After Second Test Redirect
            if(flag === true){window.location.href = 'page8.html';}
            else
            {
                switch(wrongAns)
                {
                    case 1:
                        window.location.href = 'page7.html';
                        break;
                    case 2:
                        window.location.href = 'page6.html';
                        break;
                }
            }
            break;
        case 3: //After Third Test Redirect
            if(flag === true){window.location.href = 'page12.html';}
            else
            {
                switch(wrongAns)
                {
                    case 1:
                        window.location.href = 'page11.html';
                        break;
                    case 2:
                        window.location.href = 'page10.html';
                        break;
                    case 3:
                        window.location.href = 'page9.html';
                        break;
                }
            }
            break;
        case 4: //After Fourth Test Redirect
            if(flag === true) {window.location.href = 'page17.html';}
            else
            {
                switch(wrongAns)
                {
                    case 1:
                        window.location.href = 'page16.html';
                        break;
                    case 2:
                        window.location.href = 'page15.html';
                        break;
                    case 3:
                        window.location.href = 'page14.html';
                        break;
                    case 4:
                        window.location.href = 'page13.html';
                        break;
                }
            }
            break;
        case 5: //After Fifth Test Redirect / Redirect To Results
            switch(wrongAns)
            {
                case 0:
                    window.location.href = 'page21.html';
                    break;
                case 1:
                    window.location.href = 'page21.html';
                    break;
                case 2:
                    window.location.href = 'page20.html';
                    break;
                case 3:
                    window.location.href = 'page20.html';
                    break;
                case 4:
                    window.location.href = 'page19.html';
                    break;
                case 5:
                    window.location.href = 'page18.html';
                    break;
            }   
    }
}

function reset()
{
    localStorage.removeItem('testNum');
    localStorage.removeItem('wrongAns');
    testNum = null;
    wrongAns = null;
    localStorage.setItem('testNum', testNum);
    localStorage.setItem('wrongAns', wrongAns);
}