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
    aoClicarEmPesquisar(){
        let buscador = document.getElementById("buscador").value;
        let arr = this.tarefas.filtrarPorPesquisa(buscador);
        this.listar(arr)
        this.limpForm()
    }
    aoClicarEmEditar(idbusca, desc, feitocad){

        document.getElementById("desc").value=desc
        let buttonHtml = document.getElementById("button");
        buttonHtml.innerHTML = `<button onclick="controller.aoClicarNoAlterar(${idbusca},${feitocad})">Alterar</button>`
        
    }
    aoClicarNoAlterar(idbusca,feitocad){
        let descricao = document.getElementById("desc").value;
        this.tarefas.editarTarefa(idbusca, descricao,feitocad);
        let buttonHtml = document.getElementById("button");
        buttonHtml.innerHTML = `<button onclick="controller.aoClicarNoCadastrar()">+</button>`
        this.limpForm()
        this.listar()


    }

    limpForm(){
        document.getElementById("desc").value=""
        document.getElementById("buscador").value=""
    }

    listar(array){
        let listaNaoFeitos = this.tarefas.buscarTodosNaoFeitos(array);
        let naofeitas = document.getElementById("naofeitas");
        naofeitas.innerHTML =""
        for(let i=0;i<listaNaoFeitos.length;i++){
            naofeitas.innerHTML += `<div>${listaNaoFeitos[i].id} | ${listaNaoFeitos[i].desc} | 
            <img width="15 px" src="./icons/trash.png" onclick="controller.tarefas.excluirTarefa(${listaNaoFeitos[i].id});controller.listar()"> | 
            <img width="15 px" src="./icons/checkok.png" onclick="controller.tarefas.concluirTarefa(${listaNaoFeitos[i].id});controller.listar()"> | 
            <img width="15 px" src="./icons/edit.png" onclick="controller.aoClicarEmEditar(${listaNaoFeitos[i].id},'${listaNaoFeitos[i].desc}',${listaNaoFeitos[i].feito});controller.listar()">
            </div>`
        }

        let listaFeitos = this.tarefas.buscarTodosFeitos(array);
        let feitas = document.getElementById("feitas");
        feitas.innerHTML =""
        for(let i=0;i<listaFeitos.length;i++){
            feitas.innerHTML += `<div>${listaFeitos[i].id} | ${listaFeitos[i].desc}| 
            <img width="15 px" src="./icons/trash.png" onclick="controller.tarefas.excluirTarefa(${listaFeitos[i].id});controller.listar()"> | 
            <img width="15 px" src="./icons/checkX.png" onclick="controller.tarefas.retornarTarefa(${listaFeitos[i].id});controller.listar()"> | 
            <img width="15 px" src="./icons/edit.png" onclick="controller.aoClicarEmEditar(${listaFeitos[i].id},'${listaFeitos[i].desc}',${listaFeitos[i].feito});controller.listar()">
            </div>`
        }

    }
    listarFiltrado(arr){
        let arrFiltrado = arr;
        let divText = document.getElementById("lista-pesquisados");
        divText.innerHTML =""
        for(let i=0;i<arrFiltrado.length;i++){
            divText.innerHTML += `<div>${arrFiltrado[i].id} | ${arrFiltrado[i].desc} | 
            <img width="15 px" src="./icons/trash.png" onclick="controller.tarefas.excluirTarefa(${arrFiltrado[i].id});controller.listar()"> </div>`
        }    
    }
}