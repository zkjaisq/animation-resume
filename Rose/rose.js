var css = `
/*下面让我们来动态的花一朵玫瑰花的吧*/
/*首先我们需要一个画板的了*/
.contain{height: 50%;
    width: 100%;position: fixed;
   bottom: 0;
display: flex;
    justify-content: center;
    align-items: center;}

/*先画一个玻璃罩的吧*/
.glass{margin: 0 auto;height: 262px;
    width: 154px;
    border: 3px solid #8a9a9b;
    border-bottom: 15px solid #8a9a9b;
    border-top-left-radius: 154px;
    border-top-right-radius: 154px;;
    position: relative;
}
.glass::after{
    content: '';
    width: 5px;
    height: 80px;
    background-color: #8a9a9b;
  border-radius: 5px;
    position: absolute;
    top: 90px;
    left: 10px;
}
.glass::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 8px;
    bottom: 60px;left: 10px;
    background-color: #8a9a9b;
    border-radius: 5px;
}

/*再来画rose的枝和上面的刺*/
.glass .roseLeave{ width: 4px;
     height: 155px;background-color: #066406;
    position: absolute;bottom: 20px;
    left: calc(50% - 2px);
}
.glass .roseLeave > div{
    border:5px solid transparent;
     border-right-color: #066406;
     position: absolute;
 }
 .glass .roseLeave >:nth-child(1){
     top: 15px;right: 100%;;
 }
 .glass .roseLeave >:nth-child(2){
     top: 35px;left: 100%;
     transform: rotate(180deg);
 }
 .glass .roseLeave >:nth-child(3){
     top: 55px;right: 100%;;
 }
 .glass .roseLeave >:nth-child(4){
     top: 75px;left: 100%;
     transform: rotate(180deg);
 }
 .glass .roseLeave >:nth-child(5){
     top: 95px;right: 100%;;
 }
 .glass .roseLeave >:nth-child(6){
     top: 115px;left: 100%;
     transform: rotate(180deg);
 }
/*接下来画一花瓣的吧*/
.glass .code{
    width: 50px;height: 30px;
    background-color: #338f37;
    position: absolute;top:60px;
    right:calc(50% - 25px);border-radius: 100px;
}
.code > div{
    width: 30px;height: 48px;
    background-color: #b81b43;
    position: absolute;
   bottom: 0px;
}
.code div:nth-child(odd){
    left: 25px;
}
    .code div:nth-child(even){
    right: 25px;
}
.code div:nth-child(1){
    left: 10px;
    border-radius: 5px;
}
.code div:nth-child(2){
    border-radius: 0px 30px 0px 30px;
    background-color: rgb(201, 32, 75);
}
.code div:nth-child(3){
    border-radius: 30px 0px 30px 0px;
     background-color: rgb(201, 32, 75);
}
.code div:nth-child(4){
    transform-origin: bottom right;
    transform: rotate(-40deg);
    background-color: rgb(184, 27, 67);
    border-radius: 0px 30px 0px 30px;
       
}
.code div:nth-child(5){
    transform-origin: bottom left;
    transform: rotate(30deg);
    background-color: rgb(184, 27, 67);
    border-radius: 30px 0px 30px 0px;
     
}
.code div:nth-child(6){
    left: -15px;
    bottom: -140px;
    transform-origin: bottom right;
    transform: rotate(-60deg);
    background-color: rgb(158, 24, 58);
    border-radius: 0px 30px 0px 30px;
       
      
}
.code div:nth-child(7){
    transform-origin: bottom left;
    transform: rotate(60deg);
    background-color: rgb(158, 24, 58);
    border-radius: 30px 0px 30px 0px;
}

     
/*来画一个黑色的月亮*/
.glass .flower{
    width: 110px;height: 110px;
    border-radius: 50%;
    border: 1px solid rgba(245, 148, 184,0.47);
    box-shadow: 0px 0px 10px #f594b8;
    position: absolute;
    top: 20px;
    left: calc(50% - 55px);
       
}

/*太单调了加点动画的吧*/
.glass .flower{animation: breath 1s linear  infinite alternate;}
.bubble > div{animation: move 4s ease-in-out  infinite ;}`

function writeCode(code, fn) {
    let page = document.querySelector('.page')
    let styleTag = document.querySelector('.styleTag')
    let n = 0
    setTimeout(function run() {
        n += 1
        page.innerHTML = code.slice(0, n)
        styleTag.innerHTML = code.substring(0, n)
        page.scrollTop = page.scrollHeight
        if (n < code.length) {
            setTimeout(run, 10)
        }
    }, 10)
}
writeCode(css)