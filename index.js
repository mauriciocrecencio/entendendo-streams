// qualquer import de algum modulo nativo do node, nos colocamos node: antes

const {Readable, Writable, Transform} = require('node:stream')

class OneToHundredStream extends Readable {
  index = 1


  // Toda stream de LEITURA tem o método _read obrigatório
  _read() {
  const i = this. index++
  if (i > 100) {
    this.push (null)
    } else {
    // Dentro de streams, o chunk não pode ser um formato primitivo (string, number, boolean)
    // Precisamos trabalhar com buffer, e buffer não aceita numbers, então precisamos converter pra String
    const buf = Buffer.from(String(i))
    this.push(buf)
    }
  }
}

class InverseNumberStream extends Transform {
  // Toda stream de TRANSFORM tem o método _transform obrigatório
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
    // 1 Param -> caso dê erro na hora de transformar
    // 2 Param -> é o dado transformado (Precisa ser buffer)
  }
}

class MultiplyByTenStream extends Writable {
  // Toda stream de ESCRITA tem o método _write obrigatório
  // Dentro de uma Stream de escrita não retorna NADA, ela processa o dado, nunca vai transformar o dado em outra coisa.

  _write(chunk, encoding, callback) {
    // CHUNK -> pedaço que a gente leu na Stream de LEITURA (tudo que foi enviado no this.push da linha 18)
    // CALLBACK -> função que a stream de escrita PRECISA chamar quando ela terminar de processar aquela informação
    console.log(Number(chunk.toString()) * 10)
    // PRECISA chamar
    callback()
  }
}

// Aqui estou LENDO dados de uma Stream que está me retornando números de 1 a 100
  new OneToHundredStream()
  // Stream de TRANSFORMAÇÃO obrigatoriamente precisa LER dados de uma stream e ESCREVER dados em uma stream
  // Comunicação entre DUAS streams
  .pipe(new InverseNumberStream())
  // Aqui estou ESCREVENDO esses dados dentro de uma Stream que processa dados (multiplica por 10)
  .pipe(new MultiplyByTenStream())
