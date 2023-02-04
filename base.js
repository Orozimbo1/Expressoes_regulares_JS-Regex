const texto = `
João trouxe flores para sua amada namorada em 10 de janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
Maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo.
Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooooãooooooooo, o cafe tá prontinho aqui. Veeeeeeem!"
`
const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Marido.png',
    'lista de compras.txt'
]

const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';
const html2 = `<p
 class="teste expressôes regulares">
Olá mundo</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWYZ abcdefghijklmnopqrstuvwyz @! 0123456789 !$';

const cpfs = `
Os cpfs são:
123.123.123-00 098.765.432-10 321.654.987-01


102.938.475-56
`;

const ips = `

Os Ips são:
0.0.0.0

255.255.255.255

168.233.0.25

344.0999.1982.0

66565.1525.0909.9
`;

module.exports = {
    texto,
    arquivos,
    html,
    html2,
    alfabeto,
    cpfs,
    ips
}