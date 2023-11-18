# Boilerplate para Desenvolvimento Web

## Introdução

Boilerplate para desenvolvimento web configurado com as melhores práticas e ferramentas modernas. Ele inclui uma configuração robusta com Webpack, Babel, SASS, ESLint, Prettier e outros plugins essenciais para otimizar e melhorar o fluxo de trabalho no desenvolvimento front-end.

## Recursos

- **Webpack**: Empacotamento eficiente de ativos e scripts.
- **Babel**: Suporte para ES6+.
- **SASS**: Estilização avançada com CSS.
- **ESLint & Prettier**: Garantia de qualidade e formatação de código.
- **TerserWebpack**: Minificação de JavaScript.
- **Plugins Adicionais**: Diversos outros plugins e carregadores para otimização de imagens, tratamento de GLSL, etc.

## Instalação

Para utilizar este boilerplate, clone o repositório e instale as dependências:

```bash
git clone [link-do-repositorio]
```
```bash
cd floema
```
```bash
yarn install
ou
npm install
```

## Uso

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
yarn start
ou 
npm run start
```

Isto lançará o projeto em `http://localhost:8080` (ou outra porta, se configurado).

### Build de Produção

Para criar um build de produção:

```bash
yarn build
ou
npm run build
```

Os arquivos de produção estarão localizados no diretório `dist`.

## Configuração

Com base na sua configuração do Webpack para o projeto "Boilerplate", a seção de configuração no README pode ser estruturada da seguinte forma:

---

## Configuração do Webpack

Este projeto "Boilerplate" utiliza Webpack para a automação de tarefas e o empacotamento de recursos. A configuração é robusta, permitindo eficiência tanto no desenvolvimento quanto na produção.

### Arquivo de Configuração do Webpack

O arquivo principal de configuração do Webpack, `webpack.config.js`, contém as regras e definições necessárias para a construção do projeto. Ele é dividido em várias seções, cada uma tratando de diferentes aspectos do processo de build.

### Entrada e Saída (Entry & Output)

- **Entrada (Entry):** Define os pontos de entrada para o projeto, especificamente `index.js` e `index.scss`. Estes arquivos são os pontos iniciais para o empacotamento dos scripts e estilos.
- **Saída (Output):** Configura para onde os arquivos processados serão enviados após a construção.

### Módulos e Regras (Modules & Rules)

- **babel-loader:** Para transpilar código JavaScript ES6+ para compatibilidade.
- **css-loader, sass-loader:** Processa e empacota arquivos CSS e SASS.
- **file-loader:** Gerencia a importação de arquivos como imagens e fontes.
- **raw-loader e glslify-loader:** Para o manuseio de shaders GLSL.

### Plugins

- **DefinePlugin:** Define constantes globais usadas no código.
- **CopyWebpackPlugin:** Copia arquivos estáticos de um local para outro.
- **MiniCssExtractPlugin:** Extrai CSS em arquivos separados, otimizando o carregamento.
- **ImageMinimizerPlugin:** Otimiza imagens automaticamente para reduzir o tamanho do build.
- **CleanWebpackPlugin:** Limpa o diretório de saída antes de cada build.

### Otimização

- **TerserPlugin:** Minimiza e otimiza arquivos JavaScript, melhorando o desempenho na produção.

### Personalização

A configuração pode ser personalizada para atender às necessidades específicas do seu projeto. Por exemplo, para adicionar suporte ao TypeScript, instale e configure o `ts-loader`.

### Como Usar e Modificar

1. **Clone o Repositório:** Faça o clone do projeto para o seu ambiente local.
2. **Instale Dependências:** Execute `npm install` para instalar as dependências necessárias.
3. **Faça Modificações:** Altere a configuração do Webpack conforme necessário, ajustando loaders, plugins, e regras.
4. **Teste as Alterações:** Sempre teste suas mudanças em um ambiente de desenvolvimento antes de aplicá-las na produção.

Para mais informações e opções de configuração avançadas, consulte a [documentação oficial do Webpack](https://webpack.js.org/concepts/).

## Configuração do Webpack no Boilerplate

O Boilerplate utiliza Webpack para o empacotamento e otimização dos recursos. A configuração do Webpack é detalhada e abrangente, permitindo a personalização conforme as necessidades do seu projeto.

### Arquivo de Configuração Principal

O arquivo `webpack.config.js` é onde toda a magia do Webpack acontece. Ele inclui definições para entrada de arquivos, plugins, loaders, e otimizações.

### Entradas e Resoluções (Entry & Resolve)

- **Entrada (Entry):** O projeto define `index.js` e `index.scss` como pontos de entrada. Esses arquivos são os pontos iniciais para o empacotamento de scripts JS e estilos SASS.
- **Resoluções (Resolve):** As resoluções permitem ao Webpack localizar módulos em diretórios específicos, eliminando a necessidade de caminhos relativos longos.

### Plugins

- **DefinePlugin:** Utilizado para criar constantes globais.
- **CopyWebpackPlugin:** Copia arquivos do diretório `shared` para a saída.
- **MiniCssExtractPlugin:** Extrai CSS em arquivos separados para produção.
- **ImageMinimizerPlugin:** Otimiza imagens para reduzir o tamanho do arquivo.
- **CleanWebpackPlugin:** Limpa o diretório de saída antes de cada build.

### Loaders

- **babel-loader:** Para transpilar código JavaScript moderno.
- **css-loader, postcss-loader, sass-loader:** Para processar e empacotar arquivos CSS e SASS.
- **file-loader:** Para lidar com a importação de arquivos como imagens e fontes.
- **raw-loader e glslify-loader:** Para carregar e transformar shaders GLSL.

### Otimização

- **TerserPlugin:** Minimiza e otimiza os arquivos JavaScript para produção.

### Personalizando a Configuração

Você pode personalizar esta configuração para atender às necessidades específicas do seu projeto. Por exemplo, se desejar adicionar suporte ao TypeScript, você precisaria instalar o `ts-loader` e adicionar uma nova regra ao objeto `module.rules`.

### Dicas de Uso

- Sempre teste as configurações em um ambiente de desenvolvimento antes de mover para a produção.
- Consulte a [documentação oficial do Webpack](https://webpack.js.org/concepts/) para obter mais detalhes e opções de configuração.

## Contribuições

Contribuições são bem-vindas! 

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---