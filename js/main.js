'use strict';

{
    const btn = document.getElementById('btn');

    //CCSのhoverをJSで表現
    // btn.addEventListener('mouseover',function(event){
    //     console.log('OK');
    //     btn.style.opacity=0.9;
    // });
    // btn.addEventListener('mouseout',function(event){
    //     console.log('out');
    //     btn.style.opacity = 1.0;
    // })

    btn.addEventListener('click',()=>{
        const result = ['大吉','中吉','凶']
        const n = Math.floor(Math.random()*result.length);
        btn.textContent = result[n];
        // switch(n){
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉'
        //         break;
        //     case 2:
        //         btn.textContent = '凶';
        //         break;
        // }
    });
}