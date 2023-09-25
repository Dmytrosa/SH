import Hero from "./Hero.js";
import fileService from "./fileService.js";

class HeroService {
    async create(hero, pictures) {
        try {
          const pictureFileNames = fileService.saveFiles(pictures);
          const createdHero = await Hero.create({ ...hero, pictures: pictureFileNames });
          return createdHero;
        } catch (e) {
          throw e; 
        }
      }
    async getAll() {
        const hero = await Hero.find();
        return hero;
    }
    async getSome(page, count) {
        try {
            const skip = (page - 1) * count;
            const heroes = await Hero.find().skip(skip).limit(count);
            return heroes;
          } catch (e) {
            console.error(e);
            throw new Error("Помилка при отриманні даних героїв");
          }
        }
    async getOne(id) {
        if (!id) {
            throw new Error('ID not found')
        }
        const hero = await Hero.findById(id);
        return hero;
    }

    async update(hero) {
        if (!hero._id) {
            throw new Error('ID not found')
        }
        const updatedHero = await Hero.findByIdAndUpdate(hero._id, hero, {new: true})
        return updatedHero;
    }

    async delete(id) {
            if (!id) {
                throw new Error('ID not found')
            }
            const hero = await Hero.findByIdAndDelete(id);
            return hero;
    }
}


export default new HeroService();