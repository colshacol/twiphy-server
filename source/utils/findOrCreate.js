/**
 * Mongoose plugin for finding or creating documents
 * @param {Schema} schema 
 * @example 
 * entrySchema.plugin(findOrCreate);
 * Entry.findOrCreate({ longId: 'somereallylongid' });
 * // finds or creates an entry with that long id
 */

export default function findOrCreatePlugin (schema) {
  schema.statics.findOrCreate = async function findOrCreate(query) {
    let result = await this.findOne(query);
    if(!result) result = await (new (this)(query)).save();
    return result;
  }
}