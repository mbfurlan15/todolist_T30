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
        let arrNaoFeitos = this.arrTarefas.filter(function (f){
            if (f.feito == false) return f
        })//[]
/*         for(let i=0; i<this.arrTarefas.length;i++){
            if(this.arrTarefas[i].feito==false){
                arrNaoFeitos.push(this.arrTarefas[i])
            }
        } */
        return arrNaoFeitos
    }

    buscarTodosFeitos(){
        let arrFeitos = this.arrTarefas.filter(function (f){
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

    //pensar melhor!
    editarTarefa(id){
        let salvar = this.contarid;
        this.contarid = id;

        //buscar posição do id e alimentar a variável posicao

        alterarDado(posicao, descricao)
        this.contarid = salvar
        }
    alterarDado(posicao, descricao){
    this.arrTarefas[posicao] = {id: this.contarid, desc: descricao,feito: this.feito};
    this.contarid++
    }    



    }
