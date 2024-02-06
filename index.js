let Timer_Reset_Fix=5;
let Timer_Mili_Seconds=0;
let Timer_Seconds=0;
let Timer_Minutes=5;
document.getElementById('Minutes').innerHTML= String(Timer_Minutes).padStart(2,0);

let Pause_Timer=document.getElementById('Pause_Timer');
Pause_Timer.onclick=()=>{
    window.clearInterval(s);
    let Reset_Timer=document.getElementById('Reset_Timer');
    Reset_Timer.disabled = false;
    Reset_Timer.setAttribute('class','Toogle_Button');
    let statr=document.getElementById('Toogle_Button');
    statr.disabled=false;

    document.getElementById('Short-Break-Button').disabled=false;
    document.getElementById('Long-Break-Button').disabled=false;
    document.getElementById('Custom-Break-Button').disabled=false;
    
    document.getElementById('Down_Arrow').style.visibility="visible";
    document.getElementById('UP_Arrow').style.visibility="visible";
}
function Start_Timer()
{
    if(Timer_Seconds===0 && Timer_Minutes===0)
    {
        Timer_Minutes--;
        Timer_Seconds=59;
    }
    document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);
    let statr=document.getElementById('Toogle_Button');
    statr.disabled=true;
    document.getElementById('Reset_Timer').disabled=true;
    
    document.getElementById('Short-Break-Button').disabled=true;
    document.getElementById('Long-Break-Button').disabled=true;
    document.getElementById('Custom-Break-Button').disabled=true;

    document.getElementById('Down_Arrow').style.visibility="hidden";
    document.getElementById('UP_Arrow').style.visibility="hidden";



    s=setInterval(()=>{
            Timer_Mili_Seconds-=5;
            document.getElementById('MilliSeconds').innerHTML=String(Timer_Mili_Seconds).padStart(2,0);
            if(!(Timer_Mili_Seconds>1))
            {
                Timer_Seconds--;
                Timer_Mili_Seconds=100
                if(Timer_Minutes >1)
                {
                    if(Timer_Seconds==0){Timer_Seconds=59}
                }
            }
            document.getElementById('Seconds').innerHTML=String(Timer_Seconds).padStart(2,0);
            if(!(Timer_Seconds>0))
            {   

                debugger
                if(Timer_Minutes>0)
                {
                    Timer_Minutes--;
                    Timer_Seconds=59;
                    document.getElementById('Minutes').innerHTML= String(Timer_Minutes).padStart(2,0);
                }else{
                    clearInterval(s);
                    Timer_Mili_Seconds=0
                    Timer_Seconds=0;
                    document.getElementById('Seconds').innerHTML=String(Timer_Seconds).padStart(2,0);
                    document.getElementById('MilliSeconds').innerHTML=String(Timer_Mili_Seconds).padStart(2,0);
                    let Reset_Timer=document.getElementById('Reset_Timer');
                    Reset_Timer.disabled = false;
                    let Toogle_Button=document.getElementById('Toogle_Button');
                    Toogle_Button.disabled=true
                    let Pause_Timer=document.getElementById('Pause_Timer');
                    Pause_Timer.disabled=true;
                }
            }
            
    },50)
}
function Reset_Timer()
{
    Timer_Mili_Seconds="100";
    Timer_Seconds="00";
    Timer_Minutes=Timer_Reset_Fix;
    document.getElementById('MilliSeconds').innerHTML="00";
    document.getElementById('Seconds').innerHTML="00";
    document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);
    let Toogle_Button=document.getElementById('Toogle_Button');
    Toogle_Button.disabled=false;
    let Pause_Timer=document.getElementById('Pause_Timer');
    Pause_Timer.disabled=false;

    
    
    document.getElementById('Down_Arrow').style.visibility="visible";
    document.getElementById('UP_Arrow').style.visibility="visible";
}
function Short_Break()
{
    Timer_Minutes=5;
    document.getElementById('MilliSeconds').innerHTML="00";
    document.getElementById('Seconds').innerHTML="00";
    document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);
    document.getElementById('Short-Break-Span').style.display="block";
    document.getElementById('Long-Break-Span').style.display="none";
    document.getElementById('Custom-Break-Span').style.display="none";
    
    document.getElementById('UP_Arrow').style.display="none";
    document.getElementById('Down_Arrow').style.display="none";
}
function Long_Break()
{
    Timer_Reset_Fix=30;
    Timer_Minutes=30;
    document.getElementById('MilliSeconds').innerHTML="00";
    document.getElementById('Seconds').innerHTML="00";
    document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);
    document.getElementById('Short-Break-Span').style.display="none";
    document.getElementById('Long-Break-Span').style.display="block";
    document.getElementById('Custom-Break-Span').style.display="none";
  
    document.getElementById('UP_Arrow').style.display="none";
    document.getElementById('Down_Arrow').style.display="none";
      
}
function Custom_Break()
{
    Timer_Reset_Fix=1;
    Timer_Minutes=1;
    document.getElementById('MilliSeconds').innerHTML="00";
    document.getElementById('Seconds').innerHTML="00";
    document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);
    
    document.getElementById('UP_Arrow').style.display="block";
    document.getElementById('Down_Arrow').style.display="block";
    
    document.getElementById('UP_Arrow').disabled=false;
    document.getElementById('Down_Arrow').disabled=false;
    
    document.getElementById('Short-Break-Span').style.display="none";
    document.getElementById('Long-Break-Span').style.display="none";
    document.getElementById('Custom-Break-Span').style.display="block";
}
function Counter_UP()
{
    if(Timer_Minutes>=60)
    {
        document.querySelector('#UP_Arrow > svg').style.fill="#ddd";
    }else{
        Timer_Minutes++;
        Timer_Reset_Fix=Timer_Minutes;
        document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);

    }
    if(Timer_Minutes>1)
    {
        document.querySelector('#Down_Arrow > svg').style.fill="#36622B";
    }
}
function Counter_Down()
{
    if(Timer_Minutes==1)
    {
        document.querySelector('#Down_Arrow > svg').style.fill="#ddd";
    }else{
        Timer_Minutes--;
        Timer_Reset_Fix=Timer_Minutes;
        document.getElementById('Minutes').innerHTML=String(Timer_Minutes).padStart(2,0);

    }
    if(Timer_Minutes<60)
    {
        document.querySelector('#UP_Arrow > svg').style.fill="#36622B";
     }

}