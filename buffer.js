// Buffer são estruturas de dados que representa informações binárias
// Buffer é a representação de um espaço na memória do computador usado especificamente para transitar dados de uma maneira muito rápida
// Os Buffers são criados para utilizarmos rapidamente e logo são removidos

// Por que Buffer?
// Pois é muito mais performático trabalharmos com dados binários do que uma string (com acentos, por exemplo)

const buf =  Buffer.from('hello')
// O 'hello' aqui fica representado de uma maneira binária, um hexadecimal
// É muito mais performático pois para salvarmos string na memória do computador é necessário diversas tratativas nessa string
// pois a memória do computador só entende binário