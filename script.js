
        function mostrarNotificacao(mensagem) {
            const notif = document.getElementById('notificacao');
            notif.textContent = mensagem;
            notif.style.display = 'block';
            notif.style.opacity = '0';
            notif.style.transition = 'opacity 0.4s';
            setTimeout(() => {
                notif.style.opacity = '1';
            }, 10);

            clearTimeout(notif._timeout);
            notif._timeout = setTimeout(() => {
                notif.style.opacity = '0';
                setTimeout(() => notif.style.display = 'none', 400);
            }, 2000);
        }

        document.querySelectorAll('.btn-comprar').forEach(btn => {
            btn.addEventListener('click', function () {
                mostrarNotificacao('Produto adicionado ao carrinho!');
            });
        });

    
        let carrinhoProdutos = JSON.parse(localStorage.getItem('carrinhoProdutos')) || [];

        // Atualiza o contador do carrinho
        function atualizarCarrinho() {
            document.getElementById('carrinho-contador').textContent = carrinhoProdutos.length;
        }

        // Anima o carrinho
        function animarCarrinho() {
            const carrinho = document.getElementById('carrinho-indicador');
            carrinho.classList.add('animar');
            setTimeout(() => {
                carrinho.classList.remove('animar');
            }, 350);
        }

        // Evento nos botões de compra
        document.querySelectorAll('.btn-comprar').forEach(btn => {
            btn.addEventListener('click', function () {
                // Busca o nome do produto no card
                const card = btn.closest('.produto-item');
                let nomeProduto = card.querySelector('h2, .título-sanduíche, .título-lanche, .título-sucos');
                if (nomeProduto) nomeProduto = nomeProduto.textContent.trim();
                else nomeProduto = "Produto";
                carrinhoProdutos.push(nomeProduto);
                localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoProdutos));
                atualizarCarrinho();
                animarCarrinho();
            });
        });

        // Inicializa o contador ao carregar a página
        atualizarCarrinho();

        // Abre a página do carrinho ao clicar no ícone
        document.getElementById('carrinho-indicador').addEventListener('click', function () {
            window.location.href = 'carrinho.html';
        });


document.getElementById('carrinho-indicador').addEventListener('click', function() {
    window.open('carrinho.html', '_blank');
});

function mostrarNotificacao(mensagem) {
    const notif = document.getElementById('notificacao');
    notif.innerHTML = `
        ${mensagem}
        <button id="fechar-notificacao" style="
            margin-left:16px;
            background:#fff;
            color:#8bae6e;
            border:none;
            border-radius:4px;
            padding:4px 12px;
            font-weight:bold;
            cursor:pointer;
            font-size:1rem;
        ">X</button>
    
    `;
    notif.style.display = 'block';
    notif.style.opacity = '0';
    notif.style.transition = 'opacity 0.4s';
    setTimeout(() => {
        notif.style.opacity = '1';
    }, 10);

    // Fecha ao clicar no X
    document.getElementById('fechar-notificacao').onclick = () => {
        notif.style.opacity = '0';
        setTimeout(() => notif.style.display = 'none', 400);
    };

    // Some automaticamente após 3 segundos, se não fechar manualmente
    clearTimeout(notif._timeout);
    notif._timeout = setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.style.display = 'none', 400);
    }, 3000);
}

// Aplica ao clicar nos botões de compra
document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', () => {
        mostrarNotificacao('Produto adicionado ao carrinho!');
        // Adicione dentro do evento de click do botão .btn-comprar
btn.addEventListener('click', function () {
    // ...código existente...
    const anim = document.createElement('span');
    anim.textContent = '+1';
    anim.style.position = 'absolute';
    anim.style.color = '#8bae6e';
    anim.style.fontWeight = 'bold';
    anim.style.left = btn.offsetLeft + btn.offsetWidth/2 + 'px';
    anim.style.top = btn.offsetTop + 'px';
    anim.style.fontSize = '1.5rem';
    anim.style.pointerEvents = 'none';
    anim.style.transition = 'all 0.8s cubic-bezier(.4,2,.6,1)';
    btn.parentElement.appendChild(anim);
    setTimeout(() => {
        anim.style.transform = 'translateY(-40px)';
        anim.style.opacity = '0';
    }, 10);
    setTimeout(() => anim.remove(), 900);
});
    });
});

document.getElementById('finalizar-pedido').addEventListener('click', function() {
    // Aqui você pode redirecionar para uma página de checkout ou mostrar uma mensagem
    alert('Pedido finalizado! Em breve entraremos em contato para confirmação.');
    // Se quiser, pode limpar o carrinho:
    localStorage.removeItem('carrinhoProdutos');
    window.location.href = 'index.html'; // Redireciona para a página inicial
});

// ...existing code...

// Adiciona animação ao carrinho
const carrinho = document.getElementById('carrinho-indicador');      

// ...existing code...

document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function () {
        // Notificação moderna
        mostrarNotificacao(`
            <span style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:1.5rem;">🛒</span>
                <span>Produto adicionado ao carrinho!</span>
            </span>
        `);

        // Animação "+1"
        const anim = document.createElement('span');
        anim.textContent = '+1';
        anim.style.position = 'absolute';
        anim.style.left = (btn.offsetLeft + btn.offsetWidth / 2) + 'px';
        anim.style.top = btn.offsetTop + 'px';
        anim.style.color = '#8bae6e';
        anim.style.fontWeight = 'bold';
        anim.style.fontSize = '1.5rem';
        anim.style.pointerEvents = 'none';
        anim.style.transition = 'all 0.8s cubic-bezier(.4,2,.6,1)';
        anim.style.zIndex = 1000;
        btn.parentElement.style.position = 'relative'; // Garante contexto
        btn.parentElement.appendChild(anim);
        setTimeout(() => {
            anim.style.transform = 'translateY(-40px)';
            anim.style.opacity = '0';
        }, 10);
        setTimeout(() => anim.remove(), 900);

        // Lógica do carrinho
        const card = btn.closest('.produto-item');
        let nomeProduto = card.querySelector('h2, .título-sanduíche, .título-lanche, .título-sucos');
        if (nomeProduto) nomeProduto = nomeProduto.textContent.trim();
        else nomeProduto = "Produto";
        carrinhoProdutos.push(nomeProduto);
        localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoProdutos));
        atualizarCarrinho();
        animarCarrinho();
    });
});

// ...existing code...
