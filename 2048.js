function playgame(arr,score,e){

var p = {
    first: 0,
    second: 0
};
$(function(){
    $(document).swipe({
        swipeLeft:function(e,direction,distance,duration,fingerCount){
            
if(e.keyCode===97){

var arr1 = new Array(4);
for(i = 0; i < arr1.length; i++)
    arr1[i] = new Array(4);

  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      arr1[i][j]=arr[i][j];
    }
  }
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!==0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
      for(var i=0;i<4;i++){
        for(var j=1;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
      for(var i=0;i<4;i++){
        for(var j=2;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(arr[i][j]==arr[i][j+1]){
                arr[i][j]=2*arr[i][j];
                score+=arr[i][j];
                arr[i][j+1]=0;
            }
        }
    }
  for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
      for(var i=0;i<4;i++){
        for(var j=1;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
      for(var i=0;i<4;i++){
        for(var j=2;j<3;j++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j+1;k<4;k++){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
    var flag=1;
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(arr[i][j]!=arr1[i][j]){
flag=0;
        }
      }
    }
printscore(score);

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        if(arr[i][j]==2048){
          render(arr);
        alert("Congratulation you have won!!!");
        
    }
    }
}
if(flag==0){
var f=Math.floor((Math.random() * 20));
if(f==8 || f==9){
var        flag1=0;
        do{
    var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
    arr[g][h]=4;
flag1=1;
    }
        }while(flag1!=1);
}
else{
       var flag2=0;
do{
   var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
       arr[g][h]=2;
       flag2=1;
       }
    }while(flag2!=1);
}
}
render(arr);
var flag3=0;
for(var i=0;i<4;i++){
  for(var j=0;j<4;j++){
    if(arr[i][j]==0){
      flag3=1;
    }
  }
}
if(flag3==0){
if(arr[0][0]!=arr[0][1] && arr[0][0]!=arr[1][0] && arr[0][1]!=arr[0][2] && arr[0][1]!=arr[1][1] && arr[0][2]!=arr[0][3] && arr[0][2]!=arr[1][2] && arr[0][3]!=arr[1][3] && arr[1][0]!=arr[1][1] && arr[1][0]!=arr[2][0] && arr[1][1]!=arr[1][2] && arr[1][1]!=arr[2][1] && arr[1][2]!=arr[1][3] && arr[1][2]!=arr[2][2] && arr[1][3]!=arr[2][3] && arr[2][0]!=arr[3][0] && arr[2][0]!=arr[2][1] && arr[2][1]!=arr[3][1] && arr[2][1]!=arr[2][2] && arr[2][2]!=arr[2][3] && arr[2][2]!=arr[3][2] && arr[2][3]!=arr[3][3] && arr[3][0]!=arr[3][1] && arr[3][1]!=arr[3][2] && arr[3][2]!=arr[3][3]){
  alert("Game Over")
}
}
}
},
    threshold:0
    swipeDown:function(e,direction,distance,duration,fingerCount){
if(e.keyCode==115){
  var arr1 = new Array(4);
for(i = 0; i < arr1.length; i++)
    arr1[i] = new Array(4);

  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      arr1[i][j]=arr[i][j];
    }
  }
    for(var j=0;j<4;j++){
        for(var i=3;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
         for(var j=0;j<4;j++){
        for(var i=2;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
       for(var j=0;j<4;j++){
        for(var i=1;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
    for(var j=0;j<4;j++){
        for(var i=3;i>=1;i--){
            if(arr[i][j]==arr[i-1][j]){
                arr[i][j]=2*arr[i][j];
                score+=arr[i][j];
                arr[i-1][j]=0;
            }
        }
    }
   for(var j=0;j<4;j++){
        for(var i=3;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
         for(var j=0;j<4;j++){
        for(var i=2;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
       for(var j=0;j<4;j++){
        for(var i=1;i>0;i--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i-1;k>=0;k--){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
     var flag=1;
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(arr[i][j]!=arr1[i][j]){
flag=0;
        }
      }
    }
printscore(score);

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        if(arr[i][j]==2048){
          render(arr);
        alert("Congratulation you have won!!!");
        
    }
    }
}
if(flag==0){
var f=Math.floor((Math.random() * 20));
if(f==8 || f==9){
var        flag1=0;
        do{
    var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
    arr[g][h]=4;
flag1=1;
    }
        }while(flag1!=1);
}
else{
       var flag2=0;
do{
   var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
       arr[g][h]=2;
       flag2=1;
       }
    }while(flag2!=1);
}
}
render(arr);
var flag3=0;
for(var i=0;i<4;i++){
  for(var j=0;j<4;j++){
    if(arr[i][j]==0){
      flag3=1;
    }
  }
}
if(flag3==0){
if(arr[0][0]!=arr[0][1] && arr[0][0]!=arr[1][0] && arr[0][1]!=arr[0][2] && arr[0][1]!=arr[1][1] && arr[0][2]!=arr[0][3] && arr[0][2]!=arr[1][2] && arr[0][3]!=arr[1][3] && arr[1][0]!=arr[1][1] && arr[1][0]!=arr[2][0] && arr[1][1]!=arr[1][2] && arr[1][1]!=arr[2][1] && arr[1][2]!=arr[1][3] && arr[1][2]!=arr[2][2] && arr[1][3]!=arr[2][3] && arr[2][0]!=arr[3][0] && arr[2][0]!=arr[2][1] && arr[2][1]!=arr[3][1] && arr[2][1]!=arr[2][2] && arr[2][2]!=arr[2][3] && arr[2][2]!=arr[3][2] && arr[2][3]!=arr[3][3] && arr[3][0]!=arr[3][1] && arr[3][1]!=arr[3][2] && arr[3][2]!=arr[3][3]){
  alert("Game Over")
}
}
}
},
    threshold:0
    swipeRight:function(e,direction,distance,duration,fingerCount){
if(e.keyCode==100){
  var arr1 = new Array(4);
for(i = 0; i < arr1.length; i++)
    arr1[i] = new Array(4);

  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      arr1[i][j]=arr[i][j];
    }
  }
    for(var i=0;i<4;i++){
        for(var j=3;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
         for(var i=0;i<4;i++){
        for(var j=2;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
       for(var i=0;i<4;i++){
        for(var j=1;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
    for(var i=0;i<4;i++){
        for(var j=3;j>=1;j--){
            if(arr[i][j]==arr[i][j-1]){
                arr[i][j]=2*arr[i][j];
                score+=arr[i][j];
                arr[i][j-1]=0;
            }
        }
    }
   for(var i=0;i<4;i++){
        for(var j=3;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
         for(var i=0;i<4;i++){
        for(var j=2;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
       for(var i=0;i<4;i++){
        for(var j=1;j>0;j--){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=j-1;k>=0;k--){
    if(arr[i][k]!=0){
        arr[p.first][p.second]=arr[i][k];
        arr[i][k]=0;
        break;
    }
}
            }
        }
    }
  var flag=1;
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(arr[i][j]!=arr1[i][j]){
flag=0;
        }
      }
    }   
printscore(score);

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        if(arr[i][j]==2048){
          render(arr);
        alert("Congratulation you have won!!!");
        
    }
    }
}
if(flag==0){
var f=Math.floor((Math.random() * 20));
if(f==8 || f==9){
var        flag1=0;
        do{
    var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
    arr[g][h]=4;
flag1=1;
    }
        }while(flag1!=1);
}
else{
       var flag2=0;
do{
   var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
       arr[g][h]=2;
       flag2=1;
       }
    }while(flag2!=1);
}
}
render(arr);
var flag3=0;
for(var i=0;i<4;i++){
  for(var j=0;j<4;j++){
    if(arr[i][j]==0){
      flag3=1;
    }
  }
}
if(flag3==0){
if(arr[0][0]!=arr[0][1] && arr[0][0]!=arr[1][0] && arr[0][1]!=arr[0][2] && arr[0][1]!=arr[1][1] && arr[0][2]!=arr[0][3] && arr[0][2]!=arr[1][2] && arr[0][3]!=arr[1][3] && arr[1][0]!=arr[1][1] && arr[1][0]!=arr[2][0] && arr[1][1]!=arr[1][2] && arr[1][1]!=arr[2][1] && arr[1][2]!=arr[1][3] && arr[1][2]!=arr[2][2] && arr[1][3]!=arr[2][3] && arr[2][0]!=arr[3][0] && arr[2][0]!=arr[2][1] && arr[2][1]!=arr[3][1] && arr[2][1]!=arr[2][2] && arr[2][2]!=arr[2][3] && arr[2][2]!=arr[3][2] && arr[2][3]!=arr[3][3] && arr[3][0]!=arr[3][1] && arr[3][1]!=arr[3][2] && arr[3][2]!=arr[3][3]){
  alert("Game Over")
}
}
}
},
    threshold:0
swipeUp:function(e,direction,distance,duration,fingerCount){
if(e.keyCode==119){
  var arr1 = new Array(4);
for(i = 0; i < arr1.length; i++)
    arr1[i] = new Array(4);

  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      arr1[i][j]=arr[i][j];
    }
  }
    for(var j=0;j<4;j++){
        for(var i=0;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
    for(var j=0;j<4;j++){
        for(var i=2;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }

    for(var j=0;j<4;j++){
        for(var i=0;i<=2;i++){
            if(arr[i][j]==arr[i+1][j]){
                arr[i][j]=2*arr[i][j];
                score+=arr[i][j];
                arr[i+1][j]=0;
            }
        }
    }
   for(var j=0;j<4;j++){
        for(var i=0;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
    for(var j=0;j<4;j++){
        for(var i=2;i<4;i++){
            if(arr[i][j]==0){
                p.first=i;
p.second=j;
for(var k=i+1;k<4;k++){
    if(arr[k][j]!=0){
        arr[p.first][p.second]=arr[k][j];
        arr[k][j]=0;
        break;
    }
}
            }
        }
    }
  var flag=1;
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(arr[i][j]!=arr1[i][j]){
flag=0;
        }
      }
    }   
    printscore(score);

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        if(arr[i][j]==2048){
          render(arr);
        alert("Congratulation you have won!!!");
        
    }
    }
}
if(flag==0){
var f=Math.floor((Math.random() * 20));
if(f==8 || f==9){
var        flag1=0;
        do{
    var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
    arr[g][h]=4;
flag1=1;
    }
        }while(flag1!=1);
}
else{
       var flag2=0;
do{
   var g=Math.floor((Math.random() * 4));
    var h=Math.floor((Math.random() * 4));
    if(arr[g][h]==0){
       arr[g][h]=2;
       flag2=1;
       }
    }while(flag2!=1);
}
}
render(arr);
var flag3=0;
for(var i=0;i<4;i++){
  for(var j=0;j<4;j++){
    if(arr[i][j]==0){
      flag3=1;
    }
  }
}
if(flag3==0){
if(arr[0][0]!=arr[0][1] && arr[0][0]!=arr[1][0] && arr[0][1]!=arr[0][2] && arr[0][1]!=arr[1][1] && arr[0][2]!=arr[0][3] && arr[0][2]!=arr[1][2] && arr[0][3]!=arr[1][3] && arr[1][0]!=arr[1][1] && arr[1][0]!=arr[2][0] && arr[1][1]!=arr[1][2] && arr[1][1]!=arr[2][1] && arr[1][2]!=arr[1][3] && arr[1][2]!=arr[2][2] && arr[1][3]!=arr[2][3] && arr[2][0]!=arr[3][0] && arr[2][0]!=arr[2][1] && arr[2][1]!=arr[3][1] && arr[2][1]!=arr[2][2] && arr[2][2]!=arr[2][3] && arr[2][2]!=arr[3][2] && arr[2][3]!=arr[3][3] && arr[3][0]!=arr[3][1] && arr[3][1]!=arr[3][2] && arr[3][2]!=arr[3][3]){
  alert("Game Over")
}
}
}
},
    threshold:0
    });
});
return;
}

function render(arr){
var a=document.querySelectorAll("main > div");
if(arr[0][0]==0){
  a[0].className='blank'; 
a[0].innerHTML="";
  } 
if(arr[0][0]==2){
a[0].className='two';
a[0].innerHTML="2";
}
if(arr[0][0]==4){
  a[0].className='four';
  a[0].innerHTML="4";  
}
if(arr[0][0]==8){
a[0].className='eight';
a[0].innerHTML="8";
}
if(arr[0][0]==16){
  a[0].className='sixteen'; 
  a[0].innerHTML="16"; 
}
if(arr[0][0]==32){
a[0].className='thirty-two';
a[0].innerHTML="32";
}
if(arr[0][0]==64){
  a[0].className='sixty-four';
  a[0].innerHTML="64";  
}
if(arr[0][0]==128){
a[0].className='one-twenty-eight';
a[0].innerHTML="128";
}
if(arr[0][0]==256){
  a[0].className='two-fifty-six';
  a[0].innerHTML="256";  
}
if(arr[0][0]==512){
a[0].className='five-hundred-twelve';
a[0].innerHTML="512";
}
if(arr[0][0]==1024){
  a[0].className='one-thousand-twenty-four';  
  a[0].innerHTML="1024";
}
if(arr[0][0]==2048){
a[0].className='two-thousand-forty-eight';
a[0].innerHTML="2048";
}
if(arr[0][1]==0){
  a[1].className='blank';  
  a[1].innerHTML="";
}
if(arr[0][1]==2){
a[1].className='two';
a[1].innerHTML="2";
}
if(arr[0][1]==4){
  a[1].className='four';
  a[1].innerHTML="4";  
}
if(arr[0][1]==8){
a[1].className='eight';
a[1].innerHTML="8";
}
if(arr[0][1]==16){
  a[1].className='sixteen';
  a[1].innerHTML="16";  
}
if(arr[0][1]==32){
a[1].className='thirty-two';
a[1].innerHTML="32";
}
if(arr[0][1]==64){
  a[1].className='sixty-four';
  a[1].innerHTML="64";  
}
if(arr[0][1]==128){
a[1].className='one-twenty-eight';
a[1].innerHTML="128";
}
if(arr[0][1]==256){
  a[1].className='two-fifty-six';
  a[1].innerHTML="256";  
}
if(arr[0][1]==512){
a[1].className='five-hundred-twelve';
a[1].innerHTML="512";
}
if(arr[0][1]==1024){
  a[1].className='one-thousand-twenty-four'; 
  a[1].innerHTML="1024"; 
}
if(arr[0][1]==2048){
a[1].className='two-thousand-forty-eight';
a[1].innerHTML="2048";
}

if(arr[0][2]==0){
  a[2].className='blank'; 
a[2].innerHTML="";
  } 
if(arr[0][2]==2){
a[2].className='two';
a[2].innerHTML="2";
}
if(arr[0][2]==4){
  a[2].className='four';
  a[2].innerHTML="4";  
}
if(arr[0][2]==8){
a[2].className='eight';
a[2].innerHTML="8";
}
if(arr[0][2]==16){
  a[2].className='sixteen'; 
  a[2].innerHTML="16"; 
}
if(arr[0][2]==32){
a[2].className='thirty-two';
a[2].innerHTML="32";
}
if(arr[0][2]==64){
  a[2].className='sixty-four';
  a[2].innerHTML="64";  
}
if(arr[0][2]==128){
a[2].className='one-twenty-eight';
a[2].innerHTML="128";
}
if(arr[0][2]==256){
  a[2].className='two-fifty-six';
  a[2].innerHTML="256";  
}
if(arr[0][2]==512){
a[2].className='five-hundred-twelve';
a[2].innerHTML="512";
}
if(arr[0][2]==1024){
  a[2].className='one-thousand-twenty-four';  
  a[2].innerHTML="1024";
}
if(arr[0][2]==2048){
a[2].className='two-thousand-forty-eight';
a[2].innerHTML="2048";
}

if(arr[0][3]==0){
  a[3].className='blank'; 
a[3].innerHTML="";
  } 
if(arr[0][3]==2){
a[3].className='two';
a[3].innerHTML="2";
}
if(arr[0][3]==4){
  a[3].className='four';
  a[3].innerHTML="4";  
}
if(arr[0][3]==8){
a[3].className='eight';
a[3].innerHTML="8";
}
if(arr[0][3]==16){
  a[3].className='sixteen'; 
  a[3].innerHTML="16"; 
}
if(arr[0][3]==32){
a[3].className='thirty-two';
a[3].innerHTML="32";
}
if(arr[0][3]==64){
  a[3].className='sixty-four';
  a[3].innerHTML="64";  
}
if(arr[0][3]==128){
a[3].className='one-twenty-eight';
a[3].innerHTML="128";
}
if(arr[0][3]==256){
  a[3].className='two-fifty-six';
  a[3].innerHTML="256";  
}
if(arr[0][3]==512){
a[3].className='five-hundred-twelve';
a[3].innerHTML="512";
}
if(arr[0][3]==1024){
  a[3].className='one-thousand-twenty-four';  
  a[3].innerHTML="1024";
}
if(arr[0][3]==2048){
a[3].className='two-thousand-forty-eight';
a[3].innerHTML="2048";
}


if(arr[1][0]==0){
  a[4].className='blank'; 
a[4].innerHTML="";
  } 
if(arr[1][0]==2){
a[4].className='two';
a[4].innerHTML="2";
}
if(arr[1][0]==4){
  a[4].className='four';
  a[4].innerHTML="4";  
}
if(arr[1][0]==8){
a[4].className='eight';
a[4].innerHTML="8";
}
if(arr[1][0]==16){
  a[4].className='sixteen'; 
  a[4].innerHTML="16"; 
}
if(arr[1][0]==32){
a[4].className='thirty-two';
a[4].innerHTML="32";
}
if(arr[1][0]==64){
  a[4].className='sixty-four';
  a[4].innerHTML="64";  
}
if(arr[1][0]==128){
a[4].className='one-twenty-eight';
a[4].innerHTML="128";
}
if(arr[1][0]==256){
  a[4].className='two-fifty-six';
  a[4].innerHTML="256";  
}
if(arr[1][0]==512){
a[4].className='five-hundred-twelve';
a[4].innerHTML="512";
}
if(arr[1][0]==1024){
  a[4].className='one-thousand-twenty-four';  
  a[4].innerHTML="1024";
}
if(arr[1][0]==2048){
a[4].className='two-thousand-forty-eight';
a[4].innerHTML="2048";
}

if(arr[1][1]==0){
  a[5].className='blank'; 
a[5].innerHTML="";
  } 
if(arr[1][1]==2){
a[5].className='two';
a[5].innerHTML="2";
}
if(arr[1][1]==4){
  a[5].className='four';
  a[5].innerHTML="4";  
}
if(arr[1][1]==8){
a[5].className='eight';
a[5].innerHTML="8";
}
if(arr[1][1]==16){
  a[5].className='sixteen'; 
  a[5].innerHTML="16"; 
}
if(arr[1][1]==32){
a[5].className='thirty-two';
a[5].innerHTML="32";
}
if(arr[1][1]==64){
  a[5].className='sixty-four';
  a[5].innerHTML="64";  
}
if(arr[1][1]==128){
a[5].className='one-twenty-eight';
a[5].innerHTML="128";
}
if(arr[1][1]==256){
  a[5].className='two-fifty-six';
  a[5].innerHTML="256";  
}
if(arr[1][1]==512){
a[5].className='five-hundred-twelve';
a[5].innerHTML="512";
}
if(arr[1][1]==1024){
  a[5].className='one-thousand-twenty-four';  
  a[5].innerHTML="1024";
}
if(arr[1][1]==2048){
a[5].className='two-thousand-forty-eight';
a[5].innerHTML="2048";
}

if(arr[1][2]==0){
  a[6].className='blank'; 
a[6].innerHTML="";
  } 
if(arr[1][2]==2){
a[6].className='two';
a[6].innerHTML="2";
}
if(arr[1][2]==4){
  a[6].className='four';
  a[6].innerHTML="4";  
}
if(arr[1][2]==8){
a[6].className='eight';
a[6].innerHTML="8";
}
if(arr[1][2]==16){
  a[6].className='sixteen'; 
  a[6].innerHTML="16"; 
}
if(arr[1][2]==32){
a[6].className='thirty-two';
a[6].innerHTML="32";
}
if(arr[1][2]==64){
  a[6].className='sixty-four';
  a[6].innerHTML="64";  
}
if(arr[1][2]==128){
a[6].className='one-twenty-eight';
a[6].innerHTML="128";
}
if(arr[1][2]==256){
  a[6].className='two-fifty-six';
  a[6].innerHTML="256";  
}
if(arr[1][2]==512){
a[6].className='five-hundred-twelve';
a[6].innerHTML="512";
}
if(arr[1][2]==1024){
  a[6].className='one-thousand-twenty-four';  
  a[6].innerHTML="1024";
}
if(arr[1][2]==2048){
a[6].className='two-thousand-forty-eight';
a[6].innerHTML="2048";
}

if(arr[1][3]==0){
  a[7].className='blank'; 
a[7].innerHTML="";
  } 
if(arr[1][3]==2){
a[7].className='two';
a[7].innerHTML="2";
}
if(arr[1][3]==4){
  a[7].className='four';
  a[7].innerHTML="4";  
}
if(arr[1][3]==8){
a[7].className='eight';
a[7].innerHTML="8";
}
if(arr[1][3]==16){
  a[7].className='sixteen'; 
  a[7].innerHTML="16"; 
}
if(arr[1][3]==32){
a[7].className='thirty-two';
a[7].innerHTML="32";
}
if(arr[1][3]==64){
  a[7].className='sixty-four';
  a[7].innerHTML="64";  
}
if(arr[1][3]==128){
a[7].className='one-twenty-eight';
a[7].innerHTML="128";
}
if(arr[1][3]==256){
  a[7].className='two-fifty-six';
  a[7].innerHTML="256";  
}
if(arr[1][3]==512){
a[7].className='five-hundred-twelve';
a[7].innerHTML="512";
}
if(arr[1][3]==1024){
  a[7].className='one-thousand-twenty-four';  
  a[7].innerHTML="1024";
}
if(arr[1][3]==2048){
a[7].className='two-thousand-forty-eight';
a[7].innerHTML="2048";
}

if(arr[2][0]==0){
  a[8].className='blank'; 
a[8].innerHTML="";
  } 
if(arr[2][0]==2){
a[8].className='two';
a[8].innerHTML="2";
}
if(arr[2][0]==4){
  a[8].className='four';
  a[8].innerHTML="4";  
}
if(arr[2][0]==8){
a[8].className='eight';
a[8].innerHTML="8";
}
if(arr[2][0]==16){
  a[8].className='sixteen'; 
  a[8].innerHTML="16"; 
}
if(arr[2][0]==32){
a[8].className='thirty-two';
a[8].innerHTML="32";
}
if(arr[2][0]==64){
  a[8].className='sixty-four';
  a[8].innerHTML="64";  
}
if(arr[2][0]==128){
a[8].className='one-twenty-eight';
a[8].innerHTML="128";
}
if(arr[2][0]==256){
  a[8].className='two-fifty-six';
  a[8].innerHTML="256";  
}
if(arr[2][0]==512){
a[8].className='five-hundred-twelve';
a[8].innerHTML="512";
}
if(arr[2][0]==1024){
  a[8].className='one-thousand-twenty-four';  
  a[8].innerHTML="1024";
}
if(arr[2][0]==2048){
a[8].className='two-thousand-forty-eight';
a[8].innerHTML="2048";
}

if(arr[2][1]==0){
  a[9].className='blank'; 
a[9].innerHTML="";
  } 
if(arr[2][1]==2){
a[9].className='two';
a[9].innerHTML="2";
}
if(arr[2][1]==4){
  a[9].className='four';
  a[9].innerHTML="4";  
}
if(arr[2][1]==8){
a[9].className='eight';
a[9].innerHTML="8";
}
if(arr[2][1]==16){
  a[9].className='sixteen'; 
  a[9].innerHTML="16"; 
}
if(arr[2][1]==32){
a[9].className='thirty-two';
a[9].innerHTML="32";
}
if(arr[2][1]==64){
  a[9].className='sixty-four';
  a[9].innerHTML="64";  
}
if(arr[2][1]==128){
a[9].className='one-twenty-eight';
a[9].innerHTML="128";
}
if(arr[2][1]==256){
  a[9].className='two-fifty-six';
  a[9].innerHTML="256";  
}
if(arr[2][1]==512){
a[9].className='five-hundred-twelve';
a[9].innerHTML="512";
}
if(arr[2][1]==1024){
  a[9].className='one-thousand-twenty-four';  
  a[9].innerHTML="1024";
}
if(arr[2][1]==2048){
a[9].className='two-thousand-forty-eight';
a[9].innerHTML="2048";
}

if(arr[2][2]==0){
  a[10].className='blank'; 
a[10].innerHTML="";
  } 
if(arr[2][2]==2){
a[10].className='two';
a[10].innerHTML="2";
}
if(arr[2][2]==4){
  a[10].className='four';
  a[10].innerHTML="4";  
}
if(arr[2][2]==8){
a[10].className='eight';
a[10].innerHTML="8";
}
if(arr[2][2]==16){
  a[10].className='sixteen'; 
  a[10].innerHTML="16"; 
}
if(arr[2][2]==32){
a[10].className='thirty-two';
a[10].innerHTML="32";
}
if(arr[2][2]==64){
  a[10].className='sixty-four';
  a[10].innerHTML="64";  
}
if(arr[2][2]==128){
a[10].className='one-twenty-eight';
a[10].innerHTML="128";
}
if(arr[2][2]==256){
  a[10].className='two-fifty-six';
  a[10].innerHTML="256";  
}
if(arr[2][2]==512){
a[10].className='five-hundred-twelve';
a[10].innerHTML="512";
}
if(arr[2][2]==1024){
  a[10].className='one-thousand-twenty-four';  
  a[10].innerHTML="1024";
}
if(arr[2][2]==2048){
a[10].className='two-thousand-forty-eight';
a[10].innerHTML="2048";
}

if(arr[2][3]==0){
  a[11].className='blank'; 
a[11].innerHTML="";
  } 
if(arr[2][3]==2){
a[11].className='two';
a[11].innerHTML="2";
}
if(arr[2][3]==4){
  a[11].className='four';
  a[11].innerHTML="4";  
}
if(arr[2][3]==8){
a[11].className='eight';
a[11].innerHTML="8";
}
if(arr[2][3]==16){
  a[11].className='sixteen'; 
  a[11].innerHTML="16"; 
}
if(arr[2][3]==32){
a[11].className='thirty-two';
a[11].innerHTML="32";
}
if(arr[2][3]==64){
  a[11].className='sixty-four';
  a[11].innerHTML="64";  
}
if(arr[2][3]==128){
a[11].className='one-twenty-eight';
a[11].innerHTML="128";
}
if(arr[2][3]==256){
  a[11].className='two-fifty-six';
  a[11].innerHTML="256";  
}
if(arr[2][3]==512){
a[11].className='five-hundred-twelve';
a[11].innerHTML="512";
}
if(arr[2][3]==1024){
  a[11].className='one-thousand-twenty-four';  
  a[11].innerHTML="1024";
}
if(arr[2][3]==2048){
a[11].className='two-thousand-forty-eight';
a[11].innerHTML="2048";
}

if(arr[3][0]==0){
  a[12].className='blank'; 
a[12].innerHTML="";
  } 
if(arr[3][0]==2){
a[12].className='two';
a[12].innerHTML="2";
}
if(arr[3][0]==4){
  a[12].className='four';
  a[12].innerHTML="4";  
}
if(arr[3][0]==8){
a[12].className='eight';
a[12].innerHTML="8";
}
if(arr[3][0]==16){
  a[12].className='sixteen'; 
  a[12].innerHTML="16"; 
}
if(arr[3][0]==32){
a[12].className='thirty-two';
a[12].innerHTML="32";
}
if(arr[3][0]==64){
  a[12].className='sixty-four';
  a[12].innerHTML="64";  
}
if(arr[3][0]==128){
a[12].className='one-twenty-eight';
a[12].innerHTML="128";
}
if(arr[3][0]==256){
  a[12].className='two-fifty-six';
  a[12].innerHTML="256";  
}
if(arr[3][0]==512){
a[12].className='five-hundred-twelve';
a[12].innerHTML="512";
}
if(arr[3][0]==1024){
  a[12].className='one-thousand-twenty-four';  
  a[12].innerHTML="1024";
}
if(arr[3][0]==2048){
a[12].className='two-thousand-forty-eight';
a[12].innerHTML="2048";
}

if(arr[3][1]==0){
  a[13].className='blank'; 
a[13].innerHTML="";
  } 
if(arr[3][1]==2){
a[13].className='two';
a[13].innerHTML="2";
}
if(arr[3][1]==4){
  a[13].className='four';
  a[13].innerHTML="4";  
}
if(arr[3][1]==8){
a[13].className='eight';
a[13].innerHTML="8";
}
if(arr[3][1]==16){
  a[13].className='sixteen'; 
  a[13].innerHTML="16"; 
}
if(arr[3][1]==32){
a[13].className='thirty-two';
a[13].innerHTML="32";
}
if(arr[3][1]==64){
  a[13].className='sixty-four';
  a[13].innerHTML="64";  
}
if(arr[3][1]==128){
a[13].className='one-twenty-eight';
a[13].innerHTML="128";
}
if(arr[3][1]==256){
  a[13].className='two-fifty-six';
  a[13].innerHTML="256";  
}
if(arr[3][1]==512){
a[13].className='five-hundred-twelve';
a[13].innerHTML="512";
}
if(arr[3][1]==1024){
  a[13].className='one-thousand-twenty-four';  
  a[13].innerHTML="1024";
}
if(arr[3][1]==2048){
a[13].className='two-thousand-forty-eight';
a[13].innerHTML="2048";
}

if(arr[3][2]==0){
  a[14].className='blank'; 
a[14].innerHTML="";
  } 
if(arr[3][2]==2){
a[14].className='two';
a[14].innerHTML="2";
}
if(arr[3][2]==4){
  a[14].className='four';
  a[14].innerHTML="4";  
}
if(arr[3][2]==8){
a[14].className='eight';
a[14].innerHTML="8";
}
if(arr[3][2]==16){
  a[14].className='sixteen'; 
  a[14].innerHTML="16"; 
}
if(arr[3][2]==32){
a[14].className='thirty-two';
a[14].innerHTML="32";
}
if(arr[3][2]==64){
  a[14].className='sixty-four';
  a[14].innerHTML="64";  
}
if(arr[3][2]==128){
a[14].className='one-twenty-eight';
a[14].innerHTML="128";
}
if(arr[3][2]==256){
  a[14].className='two-fifty-six';
  a[14].innerHTML="256";  
}
if(arr[3][2]==512){
a[14].className='five-hundred-twelve';
a[14].innerHTML="512";
}
if(arr[3][2]==1024){
  a[14].className='one-thousand-twenty-four';  
  a[14].innerHTML="1024";
}
if(arr[3][2]==2048){
a[14].className='two-thousand-forty-eight';
a[14].innerHTML="2048";
}

if(arr[3][3]==0){
  a[15].className='blank'; 
a[15].innerHTML="";
  } 
if(arr[3][3]==2){
a[15].className='two';
a[15].innerHTML="2";
}
if(arr[3][3]==4){
  a[15].className='four';
  a[15].innerHTML="4";  
}
if(arr[3][3]==8){
a[15].className='eight';
a[15].innerHTML="8";
}
if(arr[3][3]==16){
  a[15].className='sixteen'; 
  a[15].innerHTML="16"; 
}
if(arr[3][3]==32){
a[15].className='thirty-two';
a[15].innerHTML="32";
}
if(arr[3][3]==64){
  a[15].className='sixty-four';
  a[15].innerHTML="64";  
}
if(arr[3][3]==128){
a[15].className='one-twenty-eight';
a[15].innerHTML="128";
}
if(arr[3][3]==256){
  a[15].className='two-fifty-six';
  a[15].innerHTML="256";  
}
if(arr[3][3]==512){
a[15].className='five-hundred-twelve';
a[15].innerHTML="512";
}
if(arr[3][3]==1024){
  a[15].className='one-thousand-twenty-four';  
  a[15].innerHTML="1024";
}
if(arr[3][3]==2048){
a[15].className='two-thousand-forty-eight';
a[15].innerHTML="2048";
}

}

var score1=0;
function printscore(score){
score1+=score;
document.getElementById('score').innerHTML="Score: " + score1;
}

