import mongoose from 'mongoose';
export interface ScoreAttribute {
    data: {
        score: {
            player1: 1;
        };
    };
}
export declare type ScoreDocument = mongoose.Document & ScoreAttribute;
export declare const ScoreModel: mongoose.Model<ScoreDocument, {}>;
export default ScoreModel;
//# sourceMappingURL=game.d.ts.map