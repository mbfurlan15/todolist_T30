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
    }
