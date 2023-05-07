const http = require('node:http')
const { Transform } = require('node:stream')

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = []
  // Existe cenários onde precisamos da Stream completa para conseguir trabalhar com ela.
  // Nesse caso, podemos percorrer os chunks da nossa req dentro de um await
  // JSON é um caso onde precisamos dele completo, e não somente um pedaço
  for await( const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
    
  // TODAS as portas de entradas e saídas no Node são STREAMS
  // Ao invés de criarmos nossas streams de leitura e escrita como fizemos no exemplo anterior
  // estamos utilizando as streams internas do node para isso (REQ, RES)
  return req
    .pipe(new InverseNumberStream())
    .pipe(res)
})

server.listen(3334)