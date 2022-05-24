    
    const items = [
        //Pães

    
        {
            id: 0,
            nome: 'Pão Caseiro Simples',
            img: 'img/paes/pao-simples.png',
            quantidade: 0,
            preco: 10,
            subtotal: 0
        },
        {
            id: 1,
            nome: 'Pão Recheado Com Queijo',
            img: 'img/paes/pao-queijo.png',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 2,
            nome: 'Pão Recheado com Presunto e Queijo',
            img: 'img/paes/pao-presunto_queijo.png',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
         {
             id: 3,
             nome: 'Pão Recheado com Goiabada',
            img: 'img/paes/pao-goiabada.png',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 4,
            nome: 'Pão Recheado com Abóbora',
            img: 'img/paes/pao-abobora.png',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 5,
            nome: 'Pão Recheado com Brigadeiro',
            img: 'img/paes/pao-brigadeiro.png',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },

        //Bolos e tortas

        {
            id: 6,
            nome: 'Bolo de Cenoura',
            img: 'img/bolos-e-tortas/bolo-cenoura.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 7,
            nome: 'Bolo Recheado com Cereja',
            img: 'img/bolos-e-tortas/bolo-cereja.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 8,
            nome: 'Bolo Vulcão de Chocolate',
            img: 'img/bolos-e-tortas/bolo-vulcao.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 9,
            nome: 'Torta de Chocolate',
            img: 'img/bolos-e-tortas/torta-chocolate.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 10,
            nome: 'Torta de Limão',
            img: 'img/bolos-e-tortas/torta-limao.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 11,
            nome: 'Torta de Frango',
            img: 'img/bolos-e-tortas/Torta-frango.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },

        //Salgados

        {
            id: 12,
            nome: 'Bolinha de Queijo',
            img: 'img/salgado/bolinha-queijo.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 13,
            nome: 'Coxinha',
            img: 'img/salgado/coxinha.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 14,
            nome: 'Enroladinho de Presunto',
            img: 'img/salgado/enrolado-presunto.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 15,
            nome: 'Esfirra',
            img: 'img/salgado/esfirra.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 16,
            nome: 'Quibe',
            img: 'img/salgado/quibe.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        },
        {
            id: 17,
            nome: 'Salgado de Frango',
            img: 'img/salgado/salgado-frango.jpg',
            quantidade: 0,
            preco: 5,
            subtotal: 0
        }
    ]
    
    inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        items.map((val) => {
            containerProdutos.innerHTML+= `
            <div class="pao">
                    <img src="`+val.img+`" alt="Imagem do pão caseiro simples">
                    <div class="conteudo-texto-pao">
                        <p>`+val.nome+`</p>
                    <p class="preco">R$12,00</p>
                    </div>
                    <div class="marcador" key="`+val.id+`">
                        <div class="marcador-flipper">
                            <div class="front">
                                <img src="img/frente.gif" alt="">
                            </div>
                            <div class="back">
                                <img src="img/tras.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            `;
            
        })
    }
    inicializarLoja();
    
    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = "";
        items.map((val) => {
            if (val.quantidade > 0) {
                containerCarrinho.innerHTML+=`<br>
                <div class="carrinho-js">
                <p class="num-quantidade">x`+val.quantidade+`</p>
                <img class="imagem-carrinho-conteudo" src="`+val.img+`">
                <p>`+val.nome+`</p><br>
                </div>
                </div>  
            ` ;
            }
        })
    }
    
    var links = document.getElementsByClassName('marcador');
    
    for(i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho(); return false;
        })
    }
   