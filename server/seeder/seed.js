/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Schema } from 'mongoose';
import categoryModel from '../models/category';
import gitCheatModel from '../models/gitSheet';
import cheatData from './cheatData';

const seeder = () => {
  // eslint-disable-next-line guard-for-in
  const query = categoryModel.estimatedDocumentCount();

  query.exec((err, count) => {
    if (!count) {
      console.log('Seeding...');
      for (const category in cheatData) {
        const newCategory = new categoryModel({ name: category });
        for (const cheat of cheatData[category]) {
          const newCheat = new gitCheatModel({ ...cheat, category: newCategory._id });
          newCheat.save();
          newCategory.gitCheats.push(newCheat);
        }
        newCategory.save();
      }
    }
  });
};

export default seeder;