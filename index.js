const $lis=document.querySelectorAll('ul li');
        $lis.forEach((node)=>{
            node.addEventListener('mousedown',function(event){
                event.preventDefault();
                const value=node.innerText.trim();
                const $result=document.querySelector('.result');
                const resultext=$result.innerText.trim();
                if(resultext=='0'||resultext=='undefined'||resultext=='Infinity'||resultext=='NaN'){
                    $result.innerText='';
                }
                if(resultext=='0'){
                    $result.innerText='';
                }
                if(value=='='){
                    let solution=eval(resultext);
                    $result.innerText=solution;
                    return true;}

                if(value=='C'){
                    $result.innerText='';
                    return true
                }
                $result.append(value);
            })
        })