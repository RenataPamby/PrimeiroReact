import { createServer, Model } from 'miragejs';

createServer({
    models: {
        todos: Model
    },
    routes() {
        //get('/api/todos')
        //get('/api/todos/:id')
        this.namespace = 'api';

        
        this.get('/todos', () => {

            return [
                {id: '1', label: 'todo 1', complite: true}
            ]
        });
    },

})