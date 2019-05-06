
# Desenvolvedor Mobile Sênior

Este desafio possui diversas especificações que visam guiar você no processo. Porém o mais importante é a entrega final da feature. Então se optar por trade-offs não respeitando a documentação abaixo para entregar a feature fechada no prazo de 7 dias após o seu fork basta fazer o seu pull-request explicando suas decisões, se possível informando o que faria de melhor caso tivesse mais tempo para executar.

**Assim que você efetuar o fork aceitando o desafio, poderá entrar em contato com o WhastApp (21) 99749-4761 agendando a sua entrevista para conhecer de perto a iShareLife.**

## O que você precisa ter?

- Conhecimento avançado em React Native com Redux e Relay
- Conhecimento avançado em construção de componentes de UI (Desejável experiência com Storybook)
- Conhecimentos sólidos em metodologias de testes para componentes (Jest, Enzyme)
- Experiência com o uso de websockets e rest apis
- 5+ anos de experiência com desenvolvimento de aplicativos mobile (Nativo e/ou Híbrido)
- Experiência com gestão de times utilizando metodologias de desenvolvimento ágeis (XP, Kanban, Lean, etc)
- Alta capacidade analítica e pensar em soluções "fora da caixa"
- Inglês avançado para leitura e escrita
- Capacidade de desenhar soluções com trade-offs considerando as demandas do produto/negócio 
- Espírito empreendedor e de liderança
- Vontade de impactar a vida das pessoas com seus projetos

## O que você vai fazer?

Junto com a direção irá desenhar e implantar nossos padrões de desenvolvimento mobile utilizando frameworks e libs open-source para escalar a tecnologia da iDent. Após provas de conceito entregando nosso app MVP (Desenvolv seu próprio Netflix!) você poderá montar sua equipe e se tornar um líder no iDent sendo responsável por toda entrega de produto mobile incluindo componentes, arquitetura e padrões de interface.

# Desafio: App iDentChannel

Nosso Product Owner desenhou um MVP de consumo de vídeos de nosso canal do YouTube. Precisamos criar um app que exiba lançamentos (envios recentes) e playlists em React.

## Instruções

- Efetue um **fork** desse repositório e crie um **branch com o nome da vaga** que deseja se candidatar.
- Criar micro commits ou commits por features **detalhando a evolução do teste**.
- Após finalizar o desafio, crie um **Pull Request**.
- **7 dias para commit final** do código a partir do fork.
- Aguarde algum contribuidor realizar o code review.

## Requisitos

- Utilize React Native
- Crie **componentes reaproveitáveis** para cada elemento da interface que **julgar necessário**.
- Envio de **QR code no [Expo]** ou outra forma direta de rodar a aplicação (APK, TestFlight, etc)
- Readme com **instruções de deploy** e de opcionalmente de extras (testes/storybook) (Pode ser em português)
- Código e comentários em inglês

## Acesso à API e dados

- Crie uma API Key no [Google Cloud Console] para a [API do Youtube]
- O Channel do iDent é: https://www.youtube.com/user/iDentBrasil
- Lançamentos no layout = Envios recentes
- Todas as outras listas no layout = Playlists

## Layout

- Você poderá usar frameworks e UI Kits como base para a execução do projeto **([nativebase], [ui-kitten], [nachos], etc)**

Utilizamos o Adobe XD para mockup e especificação do front, abaixo você pode conferir os links que dão acesso a experiência e exports de assets necessários para a execução do projeto:

- **Link Protótipo - Tablet:**
https://xd.adobe.com/view/407cbfe1-7f1e-4cbf-6d4e-4201368638a0-364d/

- **Link Desenvolvimento - Tablet:**
https://xd.adobe.com/spec/dbef4033-19d8-4726-718f-36310db4e9c5-adde/

- **Link Protótipo - Mobile:**
https://xd.adobe.com/view/f6bc133e-59ab-4893-5ede-b35f00b278eb-808d/   

- **Link Desenvolvimento - Mobile:**
https://xd.adobe.com/spec/a3c87dfa-95ed-4cd2-6bbe-843d07782f73-d5f9/

- **Link Desenvolvimento - Componentes (Mindset):**
https://xd.adobe.com/spec/a028d8ba-8ea9-4858-6a0f-5a95fa6377db-d619/

## Extras

- Testar seus componentes com **[jest]**
- Criar um **[storybook]** de seus componentes
- Utilize o Oauth do Youtube para fazer os botões Thumbs UP/DOWN votarem nos vídeos.

## Dicas e FAQ

- Foco na sustentabilidade do código (documentação/reaproveitamento/testes).
- Nós recomendamos o Redux para ajudar na gestão do estado da aplicação.
- Tem alguma pergunta? **[Abra uma issue]**.

[storybook]: https://github.com/storybooks/storybook
[jest]: https://jest-everywhere.now.sh
[nativebase]: https://nativebase.io/
[ui-kitten]: https://akveo.github.io/react-native-ui-kitten
[nachos]: https://avocode.com/nachos-ui
[Google Cloud Console]: https://console.cloud.google.com/
[API do Youtube]: https://developers.google.com/youtube/v3/
[Abra uma issue]: https://github.com/iShareLife/challenges/issues/new
[Expo]: https://expo.io/

