# Passo a passo do Projeto:

## Iniciando o projeto:
* Abrir no terminal a pasta do projeto
* Digitar no terminal `npx create-next-app . --ts ` para iniciar o projeto já configurado com typescript
* Digitar no terminal `npm run dev` dentro da pasta do projeto

## Configurando o projeto
* Criar a pasta 'src' na raíz do projeto
* Mover a pasta 'pages' para 'src'
* Digitar `npm add sass` para instalar pacote e criar os arquivos de scss
* Configurar o `_document.tsx`

### Estilos globais:
* Criar `global.scss` em styles e importar ele em `_app.tsx`para salvar em todas páginas

### Criar a NAVBAR (Header)
* Criar a pasta 'images' dentro da pasta 'public'
* Salvar as imagens nessa pasta 
* Configurar as páginas e os links
* Caso dê erro no link com ancora: Usar `<Link legacyBehavior>`
* Instalar os icones do react: `npm install react-icons`

### Criar a HOME (Body)
* Criar componente Board

## Usando autenticação com NextAuth
