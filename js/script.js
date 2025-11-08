// ===============================================
// script.js — ajustes de comportamento 
// ===============================================

(function () {
    'use strict';

    // Atualiza ano automaticamente
    (function updateYear() {
        const elementoAno = document.getElementById('ano-atual');
        if (elementoAno) elementoAno.textContent = new Date().getFullYear();
    })();

    // Seletores do menu 
    const btnAbrirMenu = document.getElementById('abrir-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const btnFecharMenu = document.getElementById('fechar-menu');

    // Botão topo
    const btnTopo = document.getElementById('btn-topo');

    // Modal (IDs do index.html)
    const modal = document.getElementById('modal-produto');
    const btnFecharModal = document.getElementById('fechar-modal');
    const produtoCards = document.querySelectorAll('.card-produto-wrapper');

    // Funções de abertura/fechamento do menu (acessíveis)
    function abrirMenu() {
        if (!menuLateral) return;
        menuLateral.classList.add('aberto');
        menuLateral.setAttribute('aria-hidden', 'false');
        if (btnAbrirMenu) btnAbrirMenu.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-ativo');
        // lock scroll
        document.documentElement.style.overflow = 'hidden';
    }

    function fecharMenu() {
        if (!menuLateral) return;
        menuLateral.classList.remove('aberto');
        menuLateral.setAttribute('aria-hidden', 'true');
        if (btnAbrirMenu) btnAbrirMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-ativo');
        document.documentElement.style.overflow = '';
    }

    if (menuLateral && btnAbrirMenu && btnFecharMenu) {
        btnAbrirMenu.addEventListener('click', function (e) {
            const aberto = menuLateral.classList.contains('aberto');
            if (aberto) fecharMenu();
            else abrirMenu();
        });

        btnFecharMenu.addEventListener('click', function (e) {
            fecharMenu();
        });

        // fechar ao clicar em link
        menuLateral.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => fecharMenu());
        });

        // fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!menuLateral.contains(e.target) && !btnAbrirMenu.contains(e.target) && menuLateral.classList.contains('aberto')) {
                fecharMenu();
            }
        });

        // ESC fecha menu/modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                if (menuLateral.classList.contains('aberto')) fecharMenu();
                if (modal && modal.classList.contains('ativo')) {
                    modal.classList.remove('ativo');
                    modal.setAttribute('aria-hidden', 'true');
                }
            }
        });
    }

    // Botão voltar ao topo
    if (btnTopo) {
        window.addEventListener('scroll', () => {
            btnTopo.classList.toggle('visivel', window.scrollY > 300);
        });

        btnTopo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Modal de produto — preserva funcionalidade: abre ao clicar no card e fecha nos controles
    if (modal) {
        produtoCards.forEach(card => {
            card.addEventListener('click', (evento) => {
                evento.stopPropagation();
                modal.classList.add('ativo');
                modal.setAttribute('aria-hidden', 'false');
            });
        });

        if (btnFecharModal) {
            btnFecharModal.addEventListener('click', () => {
                modal.classList.remove('ativo');
                modal.setAttribute('aria-hidden', 'true');
            });
        }

        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                modal.classList.remove('ativo');
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Validações simples e confirmação dos formulários
     const todosOsFormularios = document.querySelectorAll('form');
    if (todosOsFormularios.length) {
        todosOsFormularios.forEach(form => {
            form.addEventListener('submit', function (evento) {
                // se form inválido, permita que o navegador mostre os erros nativos
                if (!form.checkValidity()) {
                    return;
                }
                evento.preventDefault();

                // tenta recuperar título do form
                let tituloForm = form.querySelector('h2')?.textContent ||
                                 form.querySelector('legend')?.textContent ||
                                 form.getAttribute('aria-label') ||
                                 "Formulário";

                alert(`🎉 Sucesso! O seu ${tituloForm} foi enviado para a Padaria do Bairro.`);
                form.reset();
            });
        });
    }

    // Pequeno enhancement: responsividade de vídeo — substitui atributos se necessário
    // (somente garante que vídeos não ultrapassem a largura)
    document.querySelectorAll('video').forEach(v => {
        v.setAttribute('playsinline', '');
        v.style.maxWidth = '100%';
        v.style.height = 'auto';
    });

    // IntersectionObserver para lazy-load de imagens (apenas se houver imagens sem loading attr)
    if ('IntersectionObserver' in window) {
        const imgs = document.querySelectorAll('img');
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // se tiver data-src, usa; se não, deixa como está (preserva tudo)
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        img.src = dataSrc;
                        img.removeAttribute('data-src');
                    }
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: '200px 0px' });

        imgs.forEach(i => {
            // observe todas; se já estiver carregada, ignore
            if (!i.complete) observer.observe(i);
        });
    }

})();
