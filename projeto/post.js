document.querySelector("button").addEventListener("click",()=>{
        fetch("http://192.168.1.45:3000/produtos",{
            method: 'post',
            body: JSON.stringify({
                id: 5,
                desc:"garrafa de agua",
                preco: 5,
                qtd: 50
            })
        }).then((resposta)=>{
            if(resposta.STATUS != 200){
                console.group(resposta.json())
        }
    })

})