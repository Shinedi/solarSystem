 var canvas=document.getElementById("canvas");
        var star=canvas.getContext('2d');
        var attr=new Array('chartreuse','salmon','wheat','paleturquoise','khaki','blueviolet','rosybrown','lightcoral');
        var t=1;

        window.onload=function(){
            drawstar();
            setInterval(drawstar,80);
        };
        function drawstar(){
            star.clearRect(0,0,1575,775);
            t++;
            var now=new Date();
            var sec=now.getSeconds();
            //画太阳
            star.save(); //保存之前的状态
            //var g1 = context.createRadialGradient(800, 385, 20, 800, 385, 25);

            star.fillStyle="crimson";
            star.beginPath();
            star.arc(800,385,20,0,360*Math.PI/180,false);
            star.fill();
            star.closePath();
            //star.restore();//恢复save()之前的状态
            //画轨道
            for(var i=1;i<=8;i++)
            {
                star.save();
                star.strokeStyle="darkgrey";
                star.translate(800,385);
                star.beginPath();
                star.arc(0,0,i*45,0,360*Math.PI/180,false);
                star.stroke();
                star.closePath();
                star.restore();
            }

            //画行星
            for(var j=1;j<=8;j++)
            {
                star.save();
                star.fillStyle=attr[j-1];
                star.translate(800,385);
                star.rotate(Math.abs(j-9)*t*1*Math.PI/180);
                star.beginPath();
                star.arc(0,-45*j,15,0,360*Math.PI/180,false);
                star.closePath();
                star.fill();
                star.restore();
            }

        }