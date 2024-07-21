# Gerenciamento de Artistas

## Visão Geral

Este projeto é um sistema de gerenciamento de artistas que permite listar, criar, editar e deletar artistas através de uma interface web. O backend é desenvolvido utilizando Django e Django Rest Framework (DRF), enquanto o frontend é desenvolvido utilizando React.

## Estrutura do Projeto

- **Backend:** Django e Django Rest Framework.
- **Frontend:** React.

## Funcionalidades

- Listagem de artistas.
- Visualização dos detalhes de um artista.
- Criação de novos artistas.
- Edição dos detalhes de um artista.
- Exclusão de artistas.

## Requisitos

- **Backend:**
  - Python 3.x
  - Django 3.x
  - Django Rest Framework

- **Frontend:**
  - Node.js
  - React

## Configuração do Ambiente

### Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/artist-management.git
    cd artist_management
    ```

2. Crie e ative um ambiente virtual:
    ```bash
    python -m venv env
    source env/bin/activate  # No Windows use `env\Scripts\activate`
    ```

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

4. Execute as migrações:
    ```bash
    python manage.py migrate
    ```

5. Crie um superusuário:
    ```bash
    python manage.py createsuperuser
    ```

6. Inicie o servidor:
    ```bash
    python manage.py runserver
    ```

### Frontend

1. Navegue até o diretório do frontend:
    ```bash
    cd artist-management-frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Testes

### Backend

1. Para rodar os testes:
    ```bash
    python manage.py test
    ```

### Frontend

1. Para rodar os testes:
    ```bash
    npm test
    ```

## Deploy

### Backend

- Instruções para deploy no Heroku ou outra plataforma.

### Frontend

- Instruções para deploy no Netlify ou outra plataforma.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
