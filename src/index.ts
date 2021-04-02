import app from './modules/app';

const port = app.get("port") || 3090;
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;