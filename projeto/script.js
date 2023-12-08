fetch("http://192.168.1.45:3000/produtos")
.then((resposta)=>{
        if(resposta.status == 200){
            resposta.json().then((dados)=>{
                // daos é a lista de objetos que vem
                // da API
                const div = document.querySelector("#root");
                    dados.map((produto)=>{
                        const p = document.createElement("p")
                       
                        
                    })
            })

        }
    }
)