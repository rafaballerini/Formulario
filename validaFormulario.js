document.addEventListener("DOMContentLoaded",()=>{
    (()=>{

        
        // acesso ao formulario
        var formulario = document.querySelector("form");

        // campos do tipo text, email e o textarea
        var camposType_Text_Email_Textarea = Array.from(document.querySelectorAll("input[type='text'],input[type='email'],#experiencia"));


        // radio buttons
        var camposType_Radio = Array.from(document.querySelectorAll("input[type='radio']"));


        // o select
        var campoType_Select = document.querySelector("select");


        // funcao que verifica se os campos text, email, textarea e radio estao preenchidos
        // caso tenha, nao deixa o formulario enviar os dados
        // retorna um boleano e passa como parametro para a função mostraAlert
        const validaCampos = (even)=>{
            var campoText_Vazio = camposType_Text_Email_Textarea.some((elemento,index,array)=>{
                return elemento.value=="";
            })
            
            var campoRadio_Vazio = camposType_Radio.every((elemento,index,array)=>{
                return elemento.checked==false;
            })
            var select_Vazio = campoType_Select.value=="";

            if(campoText_Vazio || campoRadio_Vazio || select_Vazio){
                console.log(campoText_Vazio);
                even.preventDefault();
            }
            mostraAlert(campoText_Vazio,campoRadio_Vazio,select_Vazio);
            selecionaCamposVazios(campoRadio_Vazio);
        }




        // insere os campos vazios(nao preenchidos) na array camposVazios
        // traz o campo pai dos radios buttons para ser aplicado uma borda caso não tenha sido preenchido
        // os campos vazios sao passados para a funcao marcaCamposVazios
        const selecionaCamposVazios = (radio)=>{
            var camposVazios = [];
            var campoPaiRadios = camposType_Radio[0].closest(".campo");
            camposType_Text_Email_Textarea.forEach(e=>{
                if(e.value==""){
                    camposVazios.push(e);
                }
            })
            if(campoType_Select.value==""){
                camposVazios.push(campoType_Select);
            }
            if(radio){
                camposVazios.push(campoPaiRadios);
            }
            
            marcaCamposVazios(camposVazios,campoPaiRadios);
        }



        // recebe os campos vazios e chama a funcao aplicaBorda
        const marcaCamposVazios = (camposVazios,campoPaiRadios)=>{
            camposType_Text_Email_Textarea.forEach(e=>{
                aplicaBorda(e,false);
            })
            aplicaBorda(campoType_Select,false);
            if(campoPaiRadios){
                aplicaBorda(campoPaiRadios,false);
            }
            camposVazios.forEach(e=>{
                aplicaBorda(e);
            })
        }


        // aplica uma borda vermelha nos campos vazios
        // antes de aplicar, remove as bordas
        const aplicaBorda = (element,opcao)=>{
            if(opcao==false){
                element.style.border="none";
            }
            else{
                element.style.border="1px solid red";
            }
        }


        // exibe um alert caso tenha campos vazios
        const mostraAlert = (campoRadio_Vazio,campoText_Vazio,select_Vazio)=>{
            if(campoRadio_Vazio && campoText_Vazio && select_Vazio){
                alert("capos vazios");
            }
        }


        // evento de submit do formulario
        formulario.addEventListener("submit",(even)=>{
            validaCampos(even);
        });

    })();
})