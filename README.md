As streams no Node talvez seja o motivo pela popularidade dele.
O Node trouxe simplicidade e performance na forma de lidar com as streams
No Node, TODA PORTA de entrada e saída é automaticamente uma Stream

- Em uma requisição ou resposta HTTP, é possível enviar e receber AOS POUCOS, não necessariamente a requisição inteira precisa ser concluída naquele momento

Em Node.js, um stream (fluxo) é uma sequência de dados que é lida ou escrita de forma assíncrona. Os streams fornecem uma forma eficiente de lidar com dados em pequenos trechos, em vez de ler ou escrever todos os dados de uma vez só, o que é especialmente útil ao lidar com grandes quantidades de dados ou operações I/O lentas.

Writable Stream -> Netflix / Spotify
  enviando uma informação aos poucos no front-end, por exemplo

Readable Stream -> 
  o usuário enviou um arquivo de 1gb e nos estamos lendo esse arquivo aos poucos