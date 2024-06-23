import { Router } from 'express';

const router = Router();

router.get('/product', (req, res) => {
  res.json({ message: 'product' });
});
router.get('/product/:id', (req, res) => {
  console.log(req);
  res.json({ message: 'product get' });
});
router.put('/product/:id', (req, res) => {
  res.json({ message: 'product put' });
});
router.post('/product', (req, res) => {
  res.json({ message: 'product post' });
});
router.delete('/product/:id', (req, res) => {
  res.json({ message: 'product delete' });
});

/**
 * Update
 */
router.get('/update', (req, res) => {
  res.json({ message: 'update' });
});
router.get('/update/:id', (req, res) => {
  res.json({ message: 'update get' });
});
router.put('/update/:id', (req, res) => {
  res.json({ message: 'update put' });
});
router.post('/update', (req, res) => {
  res.json({ message: 'update post' });
});
router.delete('/update/:id', (req, res) => {
  res.json({ message: 'update delete' });
});

/**
 * Update Point
 */
router.get('/updatepoint', (req, res) => {
  res.json({ message: 'updatepoint' });
});
router.get('/updatepoint/:id', (req, res) => {
  res.json({ message: 'updatepoint get' });
});
router.put('/updatepoint/:id', (req, res) => {
  res.json({ message: 'updatepoint put' });
});
router.post('/updatepoint', (req, res) => {
  res.json({ message: 'updatepoint post' });
});
router.delete('/updatepoint/:id', (req, res) => {
  res.json({ message: 'updatepoint delete' });
});

export default router;
