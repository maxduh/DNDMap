var i=0;
var a1=0;
var a2=0;
var v1=0;
var v2=0;
var e1 = document.getElementById("audio1");
var e2 = document.getElementById("audio2");
var ep1 = document.getElementById("plate1");
var ep2 = document.getElementById("plate2");
const clamp = (num) => Math.min(Math.max(num, 0), 1);
var volumeE = document.getElementById("volume");
let volume=100;
var d1 =  document.getElementById("d1");
var d2 =  document.getElementById("d2");

var s1 =  document.getElementById("s1");
var s2 =  document.getElementById("s2");

var pb1 =  document.getElementById("pb1");
var pb2 =  document.getElementById("pb2");

var rt1=0;
var rt2=0;





volumeE.oninput = function() {
    volume = this.value;
  }

function Set(q){
    if(q==1){
        s1.src=d1.value;
        e1.load();
        e1.play();
        e1.currentTime = 0;
        a1=2;
        a2=1;
    }else if(q==2){
        s2.src=d2.value;
        e2.load();
        e2.play();
        e2.currentTime = 0;
        a1=1;
        a2=2;
        
    }else if(q==10){
        a1=1;
        
    }
    else if(q==20){
        a2=1;
        
    }
    else{

        a1=1;
        a2=1;
    }
    
}

function Update(){
    if(a1==2){
        if(v1<1){
        v1+=0.005}else{
            v1=1
            a1=3
        }
    }else if(a1==1){
        if(v1>-0.75){
            v1-=0.005
            if(v1<0){
                e1.pause();
                e1.currentTime=0;
            }
        }else{
                v1=-0.75
                a1=0

            }
    }
    if(a2==2){
        if(v2<1){
        v2+=0.005}else{
            v2=1
            a2=3
        }
    }else if(a2==1){
        if(v2>-0.75){
            v2-=0.005
            if(v2<0){
                e2.pause();
                e2.currentTime=0;
            }
        }else{
                v2=-0.75
                a2=0
                
            }
    }

    if(v1>0){
        rt1+=v1*2;
    }
    ep1.style.transform = `rotate(${rt1}deg)`;
    if(v2>0){
        rt2+=v2*2;
    }
    if(rt1>360){rt1-=360}
    if(rt2>360){rt2-=360}
    ep2.style.transform = `rotate(${rt2}deg)`;
    e1.volume=clamp(v1)*(volume/100);
    e2.volume=clamp(v2)*(volume/100);
    pb1.style.width=  `${(e1.currentTime/e1.duration*100)}%`;
    pb2.style.width=  `${(e2.currentTime/e2.duration*100)}%`;
    setTimeout(Update, 33);
}

Update();
