const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const cetagorieData = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(cetagorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cetagorieData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    res.status(200).json(cetagorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const cetagorieData = await Category.create(req.body);
    res.status(200).json(cetagorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategorieData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedCategorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cetagorieData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!cetagorieData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(cetagorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
