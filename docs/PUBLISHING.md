
## Como gerar uma nova versão do pacote

  

1. Após realizar o *merge* na branch **develop**, acesse a aba **[Actions](https://github.com/Farm-Investimentos/front-mfe-components/actions)** do repositório.

  

2. Localize o workflow **Upgrade version** que possui o evento **workflow_dispatch**. Em **Use workflow from**, mantenha a branch **develop** selecionada.

  

3. Na opção **Make a choice**, selecione o tipo de *semantic version* que melhor representa a sua alteração. Consulte este guia para entender como funciona o versionamento semântico: [https://semver.org/lang/pt-BR/](https://semver.org/lang/pt-BR/).

  

4. Em seguida, clique em **Run workflow** para executar o processo.

  

5. Um *Pull Request* será gerado automaticamente atualizando o **package.json** com a nova versão. Basta revisá-lo, fazer o *merge* e seguir para a próxima etapa.

  

6. Com a versão já atualizada, é necessário publicar o pacote. Para isso, abra um *Pull Request* da branch **develop** para a branch **main**.

Esse processo é automatizado por um workflow. Na aba **Actions**, localize o workflow **PR develop to main**. Em **Use workflow from**, mantenha a branch **develop** selecionada e clique em **Run workflow**.

  

7. Após o *Pull Request* ser criado, faça o *merge* na branch **main**.

Quando o workflow finalizar, a nova versão do pacote estará disponível. Basta conferi-la no **NPM**.

  

8. Para atualizar a **Live Doc**, é necessário seguir um processo semelhante ao da publicação no NPM, utilizando o workflow correspondente.

  

9. Para atualizar a documentação, execute o workflow **PR main to docs**. Na aba **Actions**, localize o workflow **PR main to docs**. Em **Use workflow from**, mantenha a branch **develop** selecionada e clique em **Run workflow**. Aguarde a finalização do processo.