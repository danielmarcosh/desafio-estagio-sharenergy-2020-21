const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente");

module.exports = {
  /**
   * Listar todos os Clientes no BD
   * @param {*} req
   * @param {*} res
   */
  async listarTodosClientes(req, res) {
    const clientes = await Cliente.find();

    return res.json(clientes);
  },
  /**
   * Buscar Cliente no BD
   * @param {*} req
   * @param {*} res
   */
  async buscarCliente(req, res) {
    const cliente = await Cliente.findById(req.params.id);

    return res.json(cliente);
  },
  /**
   * Criar novo Cliente no BD
   * @param {*} req
   * @param {*} res
   */
  async criarNovoCliente(req, res) {
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  },
};
