let explicacao:string = "Um arquivo TS consegue compila javascript e typescript, porém, um arquivo JS apenas compila javascript"

let variavel = "Javascript"
console.log(variavel)

/*o typescript aceita tipagem na declaração de variáveis, isso faz com que o escopo da aplicação fique mais seguro e menos
vulnerável a compilações com erro de sintaxe*/
let string:string = "Typescript";
console.log(string);

/*Outra boa prática é definir o que esta sendo solicitado dentro de uma lista de argumentos,
para isso, podemos definir uma interface (ou até mesmo uma classe)*/

interface User {
    id: number,
    name: string
}

//Aqui definimos que a variável user será do tipo User
const user: User = {
    id: 3,
    name: "Jonas Dhein"
}

//o .table faz a representação mais apropriada para variáveis do tipo Object ou até mesmo Array
console.table(user);

/* Data Types */
const texto:string = "Texto"
const boolean:boolean = true
const booleanArray:boolean[] = [true, false, false]

const anyType:any[] = ["Jonas", 33, true] //any => Aceita qualquer tipo de dado, ou quando a gente não saiba qual tipo receber
console.table(anyType)

function showText(texto:string){
    console.log('Texto => ' + texto)
}

//Quando a função não retorna nada, igual ao showText, o idel seria dizer que a função é do tipo void
function showNumber(numero:number) : void {
    console.log('Número => ' + numero)
}

function calculate(num1:number, num2:number) : number{
    return num1 + num2
}

showText('GitHub')
showNumber(333)

const sum = calculate(33,44)
console.log('SOMA => ' + sum)

/* Tipos customizaveis: Podemos criar um novo tipo de variável que pode aceitar mais de um tipo de dado, que o TS valida */

type AllowTypes = string | string[] | number | number[]
//Union Types

const typeVar: AllowTypes = ["true", "false"]
console.log(typeVar)

// Enum => lista de tipos
enum NatureTypes {
    Human = 'human',
    Robot = 'robot',
    Animal = 'animal'
}

const natureEntity = {
    entityType: NatureTypes.Human
}

console.log(natureEntity)

//Interface
interface Entity{
    natureType: NatureTypes;
    name: string;
    code?: number;
    birthdate?: number;
}

//o ponto-vírgula é necessário na serapação dos atributos da entidade

//person implementa a interface Entity
const person:Entity = {
    natureType: NatureTypes.Human,
    name: 'Jonas',
    birthdate: 19890714
}

const android: Entity = {
    natureType: NatureTypes.Robot,
    name: 'TSBot',
    code: 200
}

const dog: Entity = {
    natureType: NatureTypes.Animal,
    name: 'Tiger',
    birthdate: 20070915
}
console.log(person, android, dog)


/* Generics */

//Exemplo sem definição de tipo
class Fila {
    private data:any = [];

    push(itemFila) { this.data.push(itemFila) }
    pop() { return this.data.shift() }
}

const queue = new Fila();
queue.push(0)
queue.push('1')
queue.push('2')
console.log(queue)
queue.pop()
console.log(queue)

class Fila2<T> {
    private data:T[] = [];

    push(itemFila: T) { this.data.push(itemFila) }
    pop(): T | undefined { return this.data.shift() }
}

const queue2 = new Fila2<number>();
queue2.push(0)
queue2.push(1)
console.log(queue2)
queue2.pop()
console.log(queue2)
