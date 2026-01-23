import { createServer, Model } from 'miragejs';

createServer({
    models: {
        todos: Model
    },
    seeds(server) {
        //ver os dados salvos no localStorege
        const todosAsStrings = localStorage.getItem('MOCK_TODOS');
        if (todosAsStrings === null)return;

        const todos = JSON.parse(todosAsStrings);
        todos.models.forEach((todo: {}) => server.schema.create('todos', todo));
    },
    routes() {
        //get('/api/todos')
        //get('/api/todos/:id')
        this.namespace = 'api';

        //schema: tipo de banco de dados local (acessa o banco)
        //request: acessa o dados que esta no corpo da requisição
        this.get('/todos', (schema) => {
            return schema.all('todos');
        });

        this.post('/todos', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            const todo = schema.create('todos', attrs);

            //Fazer com que o dados fiquem salvos ao dar F5
            //salvando no local storege do navegador
            const todos = schema.all('todos');
            localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));
            return todo;
        });

        this.put('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const newAttrs = JSON.parse(request.requestBody);
            const todo = schema.find('todos', id);
            todo?.update(newAttrs);

            const todos = schema.all('todos');
            localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));
            return {};
        });

        this.delete('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const todo = schema.find('todos', id);
            todo?.destroy();

            const todos = schema.all('todos');
            localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));
            return {};
        });
    },

})