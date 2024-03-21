// ENCAPSULAMENTO + ABSTRAÇÃO -- HERANÇA + POLIMORFISMO

interface acount{
    info:{email:string, pass:string},
    login(email:string, pass:string):void,
    logout():void,
}


class Account implements acount{
    constructor(private _email:string, private _pass:string){ // ENCAPSULAMENTO

    }

    get info():{email:string, pass:string}{ // ABSTRAÇÃO - RETURN email,pass
        return {
            email:this._email, // ENCAPSULAMENTO
            pass:this._pass // ENCAPSULAMENTO
        }
    }

    set info(value:{email:string, pass:string}){
        this._email = value.email;
        this._pass = value.pass;
    }

    private connect(resp:{token:string, auth:boolean}):string{
        return resp.auth ? 'Conectado':'Erro ao conectar'
    }

    login(): string { // ABSTRAÇÃO - utiliza um método privado.
        let conn:{token:string, auth:boolean};
        if(this._pass == '123'){
            conn = {
                token:'123',
                auth:true,
            }
            return this.connect(conn); //ABSTRAÇÃO
        }else{
            conn = {
                token:'',
                auth:false,
            }
            return this.connect(conn); //ABSTRAÇÃO
        }
    }

    logout(): void {
        console.log('Saindo...');
        setTimeout(() => {
            console.log('Até mais!');
        }, 3000);
    }
}

class Pessoa extends Account{ //HERANÇA
    constructor(public nome:string, public sobrenome:string, protected email:string, protected pass:string){
        super(email, pass);
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Aluno extends Pessoa{ // POLIMORFISMO
    constructor(public nome:string, public sobrenome:string, protected email:string, protected pass:string){
        super(nome, sobrenome, email, pass);
    }

    public action():string{
        return 'Sou aluno!';
    }

    public realizarProva():boolean{
        return true;
    }
}

class Professor extends Pessoa{ // POLIMORFISMO
    constructor(public nome:string, public sobrenome:string, protected email:string, protected pass:string){
        super(nome, sobrenome, email, pass);
    }

    public action():string{
        return 'Sou professor!';
    }

    public definirNotas():boolean{
        return true
    }
}

function returnTypePessoa<Type extends Professor|Aluno>(pessoa:Type):string{
    return pessoa.action()
}

let professor1 = new Professor('Hugo', 'Oliveira', 'hugo_c12@outlook.com', '123');
let aluno1 = new Aluno('Murilo', 'Oliveira', 'mu_c12@outlook.com', '123');

console.log(returnTypePessoa(professor1));
console.log(returnTypePessoa(aluno1));

console.log(professor1.login());
console.log(professor1.info);
professor1.logout();


