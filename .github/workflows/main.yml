name: Pipeline Angular
on: push
jobs:
  ci-angular:
    name: Ubuntu
    runs-on: ubuntu-latest
    steps:
      - run: echo "Angular rodando"
        name: Passo Angular
      - uses: actions/checkout@v5
        name: Fazendo clone e checkout
      - name: Zipar Angular
        run: zip -r projeto-angular.zip .
      - run: ls -la
        name: Listar os arquivos do meu repositório
