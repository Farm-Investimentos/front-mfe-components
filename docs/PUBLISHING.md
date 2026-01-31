
## Como gerar uma nova versão do pacote

  

1. Após realizar o *merge* na branch **develop**, acesse a aba **[Actions](https://github.com/Farm-Investimentos/front-mfe-components/actions)** do repositório.

  

2. Localize o workflow **Upgrade version** que possui o evento **workflow_dispatch**. Em **Use workflow from**, mantenha a branch **develop** selecionada.

  

3. Na opção **Make a choice**, selecione o tipo de *semantic version* que melhor representa a sua alteração. Consulte este guia para entender como funciona o versionamento semântico: [https://semver.org/lang/pt-BR/](https://semver.org/lang/pt-BR/).

  

4. Em seguida, clique em **Run workflow** para executar o processo.

  

5. Um *Pull Request* será gerado automaticamente atualizando o **package.json** com a nova versão. Basta revisá-lo, fazer o *merge* e seguir para a próxima etapa.

  

6. Com a versão já atualizada, é necessário publicar o pacote. Esse processo é automatizado por um workflow que cria um *Pull Request* da branch **develop** para a branch **main**.

Na aba **Actions**, procure pelo workflow **PR develop to main** e execute-o.

  

7. Após o *Pull Request* ser criado, faça o *merge* na branch **main**.

Quando o workflow finalizar, a nova versão do pacote estará disponível. Basta conferi-la no **NPM**.

  

8. Para atualizar a **Live Doc**, é necessário seguir um processo semelhante ao da publicação no NPM, utilizando o workflow correspondente.

  

9. Acesse a aba **Actions**, execute o workflow **PR main to docs**. Esse workflow irá abrir automaticamente um Pull Request da branch **main** para a branch **docs**. Revise esse Pull Request e faça o *merge* na branch **docs**; a publicação da documentação será disparada automaticamente pelo workflow **publish docs** ao receber o *push* nessa branch.