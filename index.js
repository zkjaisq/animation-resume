let message = `/*
    * 面试官你好，我叫张科家，想面试贵公司的前端工程师岗位
    * 只用文字介绍太单调的，让我们来玩一点炫酷的吧
    * 我就用一些代码来介绍吧。
    */

    /*首先准备一些样式的吧*/
    html{background:#eee;}

    /*给页面加个边框的吧*/
    .content{border:1px solid #aaa ;padding:2em;
    border-radius:5px;}

   
    
    /*加点特效的吧*/
    .content{transform: perspective(1500px) rotateY(10deg)}
   .content{animation: breath 0.5s linear infinite alternate-reverse;}

    /*添加代码高亮*/
    .token.selector{color: #690;}
    .token.property{color: #905;}
    .token.function{color: #dd4a68;}
    .token.comment{color: #999;}

    /*需要一个写字板*/
    .page{position: fixed;height: 100%;width: 50%;top:0;
        right: 0;display: flex;align-items: center;justify-content: center;padding: 16px;border-radius: 5px;}
   
    /*给写字板也加点3D的特效的吧*/
    .write{transform: perspective(1500px) rotateY(-5deg)}

    /*下面该开始正式的介绍的了,请看右边的写字板*/


    
    `

var code2 = `
    /*用一个库将markdown变成HTML*/
`

var introduce = `# 自我介绍
- - - 
我叫张科家,想面试贵公司的web前端开发过岗位
1995 年 10 月出生
湖北城市建设职业技学院学校毕业
自学前端，有过半年的工作经验。

# 项目介绍
- - -
 1.  [apple商城轮播]: http://zkejia.top/pingguo/pingguo.html
 2.  [canvas画板]: https://zkjaisq.github.io/canvas/canvas/canvas.html
 3.  [个人简历]: https://zkjaisq.github.io/resume2/dist/resume.html
 4.  [网易云音乐]: https://zkjaisq.github.io/163music/src/main.html
 5.  [简历编辑器]: https://zkjaisq.github.io/Vue_resume/src/index.html
 7.  [Rose动画]: https://zkjaisq.github.io/animation-resume/Rose/rose.html
 
# 联系方式
- - - 
 *  QQ 1551311205
 *  Email charityjia@gmail.com
 *  手机 18771964684
 
`
var style = `
        /*接下来让我们给简历添加点样式的吧*/
        h1{padding: 20px ;font-weight: normal;}
        p{padding: 15px;text-indent:2em;}
        li{padding: 10px;}
        .page hr{border: none;border-top: 1px solid rgba(0, 0, 0, 0.3);}
       

`



writeCode('', message, () => {
    writeMarkdown(introduce, () => {
        writeCode(message, code2, () => {
            markeddownTohtml(() => {
                writeCode(message + code2, style, () => {

                })
            })
        })

    })
})

function writeCode(prefix, code, fn) {
    let content = document.querySelector('.content')
    let codepaper = document.querySelector('.codepaper')
    let StyleSheet = document.querySelector('.styleSheet')
    let n = 0
    let id = setInterval(() => {
        n += 1
        content.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css);
        StyleSheet.innerHTML = prefix + code.slice(0, n)
        content.scrollTop = content.scrollHeight
        if (n > code.length) {
            window.clearInterval(id)
            fn && fn.call()

        }
    }, 0)
}

function markeddownTohtml(fn) {
    let div = document.createElement('div')
    div.className = 'html'
    let page = document.querySelector('.page')
    div.innerHTML = marked(introduce)
    page.appendChild(div)
    let write = document.querySelector('.write')
    write.replaceWith(div)
    fn && fn.call()

}



function writeMarkdown(code, fn) {
    let page = document.querySelector('.page')
    let domwrite = document.createElement('pre')
    domwrite.className = 'write'
    page.appendChild(domwrite)
    let n = 0
    let id = setInterval(() => {
        n += 1
        domwrite.innerHTML = code.slice(0, n)
        domwrite.scrollTop = domwrite.scrollHeight
        if (n > introduce.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}
