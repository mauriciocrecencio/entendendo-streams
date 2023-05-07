const { Readable } =  require('node:stream')

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

// Abrimos uma conexão com nosso servidor, e não fechou essa conexão.
// Está enviando dados aos poucos pro nosso servidor HTTP
// Conseguimos abrir um input de dados e não fechar até terminarmos de enviar nossas informações
fetch('http://localhost:3334', {
  // A Stream só funciona com métodos onde enviamos algum conteúdo (POST, PUT)
  // Método GET não faz sentido, pois estamos buscando alguma informação
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half' 
})