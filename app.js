import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = new Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/detail/:item', (req, res) => {
  res.render('pages/detail');
});

app.get('/collection', (req, res) => {
  res.render('pages/collection');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
