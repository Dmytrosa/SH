import Hero from "./Hero.js";
import HeroService from "./HeroService.js";

class HeroController {
    async create(req, res) {
        try {
            const hero = await HeroService.create(req.body, req.files)
            res.json(hero).status(200)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const Heros = await HeroService.getAll();
            return res.json(Heros);
        } catch (e) {
            res.status(500).json(e)
        }
    }
async getSome(req, res) {
    try {
      const { page, count } = req.query;
      if (!page || !count) {
        return res.status(400).json({ error: "Не вистачає параметрів page та count." });
      }
      const totalHeroesCount = await Hero.countDocuments();
  
      const skip = (Number(page) - 1) * Number(count);
      const heroes = await Hero.find().skip(skip).limit(Number(count));
      return res.json({ heroes, totalHeroesCount });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Помилка сервера" });
    }
  }
  
    async getOne(req, res) {
        try {
            const hero = await HeroService.getOne(req.params.id)
            return res.json(hero)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedHero = await HeroService.update(req.body);
            return res.json(updatedHero);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const hero = await HeroService.delete(req.params.id);
            return res.json(hero)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new HeroController();