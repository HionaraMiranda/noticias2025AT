const posts = [
    {
        title: "Inteligência Artificial- Aliada ou Inimiga?",
        link: "posts/post1.html",
        description: "A Inteligência Artificial (IA) está cada vez mais presente na vida das pessoas, em áreas como saúde, educação, transporte, indústria, segurança e no nosso dia a dia. Mas, afinal como devemos ve-la?",
        image: "imagens/post1.jpg"
    },
    {
        title: "Bebê Reborn- A linha tênue entre o saudável e uma saúde mental comprometida",
        link: "posts/post2.html",
        description: "Essa nova febre de cuidar de brinquedos, que no máximo podem ser considerados um hobby, ultimamente tem passado dos limites. Limite esse que foi mais que ultrapassado essa semana quando uma 'MÃE' levou seu 'BEBÊ' para ser vacinado pelo SUS.",
        image: "imagens/post2.jpg"
    },
    {
        title: "Golpes virtuais mais comuns de 2025:Como proteger seus dados e evitar cair em ciladas online?",
        link: "posts/post3.html",
        description: "Se te pedirem PIX urgente, emprego dos sonhos, prêmio milagroso ou falarem 'sou do suporte', corre que é golpe! Conheça nesse post os principais golpes e os menos usados também, algumas dicas do que fazer para não cair neles e ainda dar um bom susto nos golpistas",
        image: "imagens/post3.jpg"
        
    },
    {
        title: "As famosas BETS- NÃO SE ILUDA! Quer ganhar DINHEIRO de verdade? Confira COMO",
        link: "posts/post4.html",
        description: "Ultimamente essas bets tão mais populares que fofoca de vizinho. E olha… aposta é tipo aquele amigo do rolê que fala: 'Confia, dá certo!' Às vezes acerta, mas na maioria das vezes é cilada. Mas relaxa, que nesse post eu vou te dar umas dicas pra largar esse vicio e ainda te ensino como fazer seu dinheiro trabalhar pra você — sem precisar sofrer gol no último minuto!",
        image: "imagens/post4.jpg"
    },
    {
        title: "Seu amigo pet- Dúvido que você sabia dessas 10 curiosidades sobre os felinos",
        link: "posts/post5.html",
        description: "Já se deparou com seu amiguinho te encarando ou a algum objeto fixamente?, Ou as 03:00 da manhã correm feito loucos?, ABRA ESSE POST que esses e outros misterios serão desvendados",
        image: "imagens/post5.jpg"
        
    }
];

const postsContainer = document.getElementById('posts');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <img src="${post.image}" alt="${post.title}" style="width:100%; max-width:200px;">
        <h2><a href="${post.link}">${post.title}</a></h2>
        <p>${post.description}</p>
        <a href="${post.link}">Ler mais...</a>
    `;

    postsContainer.appendChild(postElement);
});