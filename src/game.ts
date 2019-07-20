import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema(
  {},
  {
    strict: false,
  }
);

export interface ScoreAttribute {
  data: {
    score: {
      player1: 1
    }
  }
}

export type ScoreDocument = mongoose.Document & ScoreAttribute;
export const ScoreModel = mongoose.model<ScoreDocument>(
  'score',
  ScoreSchema
);
export default ScoreModel;
