export default class Generic {
  static async create(model, data) {
    return await model.create(data);
  }
  static async update(model, data, id) {
    return await model.update(data, { where: { businessId: id } });
  }
  static async deletes(model, id) {
    return await model.destroy({ where: { businessId: id } });
  }
  static async findAll(model) {
    return await model.findAll();
  }
  static async findById(model, id) {
    return await model.findOne({
      where: { businessId: id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  }
  static async findByUserById(model, id) {
    return await model.findOne({
      where: { userId: id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  }
  static async findByName(model, name) {
    return await model.findOne({ where: { name: name } });
  }
  static async findByPhoneNo(model, name) {
    return await model.findOne({ where: { name: name } });
  }
  static async createManyRows(model, record1, record2) {
    return await model.bulkCreate([record1, record2], { returning: true });
  }
}
