# Configuração do EmailJS

Este guia irá ajudá-lo a configurar o EmailJS para o formulário de contato.

## Passo 1: Criar uma conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

## Passo 2: Configurar um serviço de email

1. No painel do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** que será gerado

## Passo 3: Criar um template de email

1. No painel do EmailJS, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com os seguintes campos:

### Campos disponíveis no formulário:
- `{{tipo_contato}}` - Tipo de contato (Cliente/Empresa ou Candidato)
- `{{nome}}` - Nome completo
- `{{email}}` - E-mail do remetente
- `{{telefone}}` - Telefone
- `{{assunto}}` - Assunto da mensagem
- `{{mensagem}}` - Mensagem
- `{{arquivo_nome}}` - Nome do arquivo anexado (se houver)
- `{{data_envio}}` - Data e hora do envio

### Exemplo de template:

**Assunto do Email:**
```
Nova mensagem de contato - {{assunto}}
```

**Corpo do Email:**
```
Olá,

Você recebeu uma nova mensagem através do formulário de contato:

Tipo de Contato: {{tipo_contato}}
Nome: {{nome}}
E-mail: {{email}}
Telefone: {{telefone}}
Assunto: {{assunto}}

Mensagem:
{{mensagem}}

Arquivo anexado: {{arquivo_nome}}

Data do envio: {{data_envio}}

---
Esta mensagem foi enviada automaticamente pelo site LabTech-RH.
```

4. Configure o **To Email** para o endereço que receberá os emails (ex: labtech.rh.contato@gmail.com)
5. Clique em **Save** e anote o **Template ID**

## Passo 4: Obter a Public Key

1. No painel do EmailJS, vá em **Account** > **General**
2. Localize a seção **API Keys**
3. Copie sua **Public Key**

## Passo 5: Configurar no código

1. Abra o arquivo `assets/js/script.js`
2. Localize a seção `EMAILJS_CONFIG` (linha ~52)
3. Substitua os valores:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'SUA_PUBLIC_KEY_AQUI',
    SERVICE_ID: 'SEU_SERVICE_ID_AQUI',
    TEMPLATE_ID: 'SEU_TEMPLATE_ID_AQUI'
};
```

### Exemplo:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcdefghijklmnop',
    SERVICE_ID: 'service_xyz123',
    TEMPLATE_ID: 'template_abc456'
};
```

## Passo 6: Testar o formulário

1. Abra o arquivo `contato.html` no navegador
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Verifique se o email foi recebido na caixa de entrada configurada

## Limites do plano gratuito

O plano gratuito do EmailJS inclui:
- 200 emails por mês
- Suporte para templates personalizados
- API completa

## Solução de problemas

### Erro: "EmailJS não configurado"
- Verifique se você substituiu todos os valores em `EMAILJS_CONFIG`
- Certifique-se de que não há espaços extras ou aspas incorretas

### Erro: "Invalid service ID" ou "Invalid template ID"
- Verifique se os IDs estão corretos no painel do EmailJS
- Certifique-se de copiar os IDs completos

### Erro: "Public key is invalid"
- Verifique se a Public Key está correta
- Certifique-se de usar a Public Key, não a Private Key

### Email não está sendo recebido
- Verifique a pasta de spam/lixo eletrônico
- Confirme que o "To Email" no template está correto
- Verifique os logs no painel do EmailJS em **Logs**

## Segurança

⚠️ **IMPORTANTE**: A Public Key pode ser exposta no código JavaScript. Isso é seguro porque:
- A Public Key tem permissões limitadas
- O EmailJS valida as requisições no servidor
- Você pode configurar restrições de domínio no painel do EmailJS

Para maior segurança, você pode:
1. Ir em **Account** > **Security**
2. Configurar **Allowed Origins** para permitir apenas seu domínio

## Suporte

Se precisar de ajuda adicional:
- Documentação oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Suporte do EmailJS: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
