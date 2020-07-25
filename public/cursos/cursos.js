export default class Cursos{
    constructor(id, nome, cghora, professor, dinicio, dfim, contarid){
        this.id = id;
        this.nome = nome;
        this.cghora = cghora;
        this.professor = professor;
        this.dinicio = dinicio;
        this.dfim = dfim;
        this.arrCursos = [];
        this. contarid = 1;
    }

    cadastrarCurso(desc, hora, prof, inicio, fim){
        this.arrCursos.push({id: this.contarid, nome: desc, cghora: hora, professor: prof, dinicio: inicio, dfim: fim});
        this.contarid++
    }

    filtrarCursos(buscador){
        let arr = this.arrCursos.filter
    }
}