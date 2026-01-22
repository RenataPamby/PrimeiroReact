import { createServer, Model } from 'miragejs';

createServer({
    models: {
        todos: Model
    },
    routes() {
        //get('/api/todos')
        //get('/api/todos/:id')
        this.namespace = 'api';


        this.get('/todos', (schema) => {
            return schema.all('todos');
        });

        this.post('/todos', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            const todo = schema.create('todo', attrs);
            return todo;
        });

        this.put('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const newAttrs = JSON.parse(request.requestBody);
            const todo = schema.find('todo', id);
            todo?.update(newAttrs);
            return {};
        });

        this.delete('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const todo = schema.find('todo', id);
            todo?.destroy;
            return {};
        });
    },

})