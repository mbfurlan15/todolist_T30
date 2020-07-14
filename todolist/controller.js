import Tarefas from "./tarefas.js"

export default class Controller{
    constructor(){
        this.tarefas= new Tarefas()
    }
    aoClicarNoCadastrar(){
        let descricao = document.getElementById("desc").value;
        this.tarefas.cadastrar(descricao)
        this.limpForm()
        this.listar()
    }
    limpForm(){
        document.getElementById("desc").value=""
    }

    listar(){
        let listaNaoFeitos = this.tarefas.buscarTodosNaoFeitos();
        let naofeitas = document.getElementById("naofeitas");
        naofeitas.innerHTML =""
        for(let i=0;i<listaNaoFeitos.length;i++){
            naofeitas.innerHTML += `<div>${listaNaoFeitos[i].id} | ${listaNaoFeitos[i].desc}</div>`
        }

        let listaFeitos = this.tarefas.buscarTodosFeitos();
        let feitas = document.getElementById("feitas");
        feitas.innerHTML =""
        for(let i=0;i<listaFeitos.length;i++){
            feitas.innerHTML += `<div>${listaFeitos[i].id} | ${listaFeitos[i].desc}</div>`
        }

    }
}