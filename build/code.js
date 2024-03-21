"use strict";
// ENCAPSULAMENTO + ABSTRAÇÃO -- HERANÇA + POLIMORFISMO
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(_email, _pass) {
        this._email = _email;
        this._pass = _pass;
    }
    get info() {
        return {
            email: this._email, // ENCAPSULAMENTO
            pass: this._pass // ENCAPSULAMENTO
        };
    }
    set info(value) {
        this._email = value.email;
        this._pass = value.pass;
    }
    login() {
        let conn;
        if (this._pass == '123') {
            conn = {
                token: '123',
                auth: true,
            };
            return this.connect(conn); //ABSTRAÇÃO
        }
        else {
            conn = {
                token: '',
                auth: false,
            };
            return this.connect(conn); //ABSTRAÇÃO
        }
    }
    logout() {
        console.log('Saindo...');
        setTimeout(() => {
            console.log('Até mais!');
        }, 3000);
    }
    connect(resp) {
        return resp.auth ? 'Conectado' : 'Erro ao conectar';
    }
}
class Pessoa extends Account {
    constructor(nome, sobrenome, email, pass) {
        super(email, pass);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.pass = pass;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, pass) {
        super(nome, sobrenome, email, pass);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.pass = pass;
    }
    action() {
        return 'Sou aluno!';
    }
    realizarProva() {
        return true;
    }
}
class Professor extends Pessoa {
    constructor(nome, sobrenome, email, pass) {
        super(nome, sobrenome, email, pass);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.pass = pass;
    }
    action() {
        return 'Sou professor!';
    }
    definirNotas() {
        return true;
    }
}
function returnTypePessoa(pessoa) {
    return pessoa.action();
}

let professor1 = new Professor('Hugo', 'Oliveira', 'hugo_c12@outlook.com', '123');
let aluno1 = new Aluno('Murilo', 'Oliveira', 'mu_c12@outlook.com', '123');
console.log(returnTypePessoa(professor1));
console.log(returnTypePessoa(aluno1));
console.log(professor1.login());
console.log(professor1.info);
professor1.logout();
