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
    buscarTodosNaoFeitos(array){
        if (array==null) {array=this.arrTarefas }else {array = array};
        let arrNaoFeitos = array.filter(function (f){
            if (f.feito == false) return f
        })//[]
/*         for(let i=0; i<this.arrTarefas.length;i++){
            if(this.arrTarefas[i].feito==false){
                arrNaoFeitos.push(this.arrTarefas[i])
            }
        } */
        return arrNaoFeitos
    }

    buscarTodosFeitos(array){
        if (array==null) {array=this.arrTarefas }else {array = array};
        let arrFeitos = array.filter(function (f){
            if (f.feito == true) return f
        })/*[]
        for(let i=0; i<this.arrTarefas.length;i++){
            if(this.arrTarefas[i].feito==true){
                arrFeitos.push(this.arrTarefas[i])
            }
        }*/
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
    filtrarPorPesquisa(buscador){
        var filtrado = this.arrTarefas.filter(function (f){
            if (f.desc.toUpperCase().indexOf(buscador.toUpperCase().trim())>-1) return f
        })
        return filtrado
    }

    
    editarTarefa(idbusca, descricao, feitocad){
        let salvar = this.contarid;
        this.contarid = idbusca;
        
        let posicao = this.buscarPorID(idbusca)

        this.arrTarefas[posicao] = {id: this.contarid, desc: descricao,feito: feitocad};
    
        this.contarid = salvar
        }
    buscarPorID(idbusca){
        let posicao
        for (let i=0; i<this.arrTarefas.length;i++){
            if (this.arrTarefas[i].id == idbusca) posicao= i
        } return posicao
    }
    }
