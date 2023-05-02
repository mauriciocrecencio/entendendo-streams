// qualquer import de algum modulo nativo do node, nos colocamos node: antes

const {Readable} = require('node:stream')

class OneToHundredStream extends Readable {
  index = 1
  // Toda stream de leitura tem o método _read obrigatório
  _read() {
  const i = this. index++
  if (i > 100) {
  this.push (null)
  } else {
  // Dentro de streams, o chunk não pode ser um formato primitivo (string, number, boolean)
  // Precisamos trabalhar com buffer, e buffer não aceita numbers, então precisamos converter pra String
  const buf = Buffer.from(String(i))
  this.push (buf)
  }
}
}
  new OneToHundredStream()
  .pipe(process.stdout)