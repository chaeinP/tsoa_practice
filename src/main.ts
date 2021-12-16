import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import {RegisterRoutes} from './routes/routes'; // here

const app = express();
const port = 3000;

// app.use('/', (req: express.Request, res: express.Response) => res.send('HelloWorld'));
app.use('/docs', swaggerUi.serve, async (req: express.Request, res: express.Response) => {
  return res.send(swaggerUi.generateHTML(await import('../api/dist/swagger.json')));
});
RegisterRoutes(app); // and here
app.listen(port, () => console.log(`Server started listening to port ${port}`));
