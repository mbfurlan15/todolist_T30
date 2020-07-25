import Cursos from "./cursos.js"

export default class Controller{
    constructor(){
        this.cursos= new Cursos()
    }
    aoClicarNoCadastrar(){
        let desc = document.getElementById("nome").value;
        let hora = parseFloat(document.getElementById("cghora").value);
        let prof = document.getElementById("prof").value;
        let inicio = document.getElementById("d-inicio").value;
        let fim = document.getElementById("d-fim").value;
        this.cursos.cadastrarCurso(desc, hora, prof, inicio, fim)
        this.limpForm()
        //this.listar()
        this.listarCursos()
    }

    listarCursos (arr){
        if(arr ==null){ arr = this.cursos.arrCursos}else {arr=arr}
        let lista = document.getElementById("lista-cursos");
        lista.innerHTML =""
        for(let i=0;i<arr.length;i++){
            lista.innerHTML += `<div>${arr[i].id} | ${arr[i].nome} | ${arr[i].cghora}h | ${arr[i].professor} | ${arr[i].dinicio} | ${arr[i].dfim} | 
            <img width="15 px" src="./icons/trash.png" onclick=""> | 
            <img width="15 px" src="./icons/edit.png" onclick="">
            </div>`
        }
    }

    limpForm(){
        
        document.getElementById("nome").value=""
        document.getElementById("cghora").value=""
        document.getElementById("prof").value=""
        document.getElementById("d-inicio").value=""
        document.getElementById("d-fim").value=""
        //document.getElementById("buscador").value=""
    }
}
