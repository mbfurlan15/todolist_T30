export default class Tarefas{
    constructor(id, desc, feito){
        this.id=id;
        this.desc=desc;
        this.feito=false;
        this.arrTarefas = [];
        this.contarid = 1;
    }
    cadastrar(descricao){
        this.arrTarefas.push({id: this.contarid, desc: descricao,feito: this.feito});
        this.contarid++
    }
    buscarTodosNaoFeitos(){
        let arrNaoFeitos = []
        for(let i=0; i<this.arrTarefas.length;i++){
            if(this.arrTarefas[i].feito==false){
                arrNaoFeitos.push(this.arrTarefas[i])
            }
        }
        return arrNaoFeitos
    }

    buscarTodosFeitos(){
        let arrFeitos = []
        for(let i=0; i<this.arrTarefas.length;i++){
            if(this.arrTarefas[i].feito==true){
                arrFeitos.push(this.arrTarefas[i])
            }
        }
        return arrFeitos
    }
    excluirTarefa(id){
        let arr = this.arrTarefas;
        for (let i = 0; i<arr.length; i++){
            if (id == arr[i].id){
                this.arrTarefas.splice(i,1)
            }else{}
        }
    }
    concluirTarefa(id){
        let arr = this.arrTarefas;
        for (let i = 0; i<arr.length; i++){
            if (id == arr[i].id){
                this.arrTarefas[i].feito= true
            }else{}
        }
    }
    retornarTarefa(id){
        let arr = this.arrTarefas;
        for (let i = 0; i<arr.length; i++){
            if (id == arr[i].id){
                this.arrTarefas[i].feito= false
            }else{}
        }
    }
    }
