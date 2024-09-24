
const Ingresso = require('../Models/modelEventos')

async function criarIngresso(req, res){
    try {
        const {ID_evento, nomeUtilizador, idade, tipo} = req.body;
        const novoIngresso = new Ingresso({ ID_evento, nomeUtilizador, idade, tipo });
        await novoIngresso.save();
        res.status(201).json({ mensagem: "Ingresso criado com sucesso", criado: novoIngresso });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao criar ingresso", erro: erro.message });
    };
};

async function listarIngressos(req,res){
    try {
      return await Ingresso.find();
    } catch (erro) {
      console.error('Erro ao listar ingressos:', erro);
      throw erro;
    };
};

async function atualizarIngressos(req, res){
    try {
      const { id } = req.params;
      const {ID_evento, nomeUtilizador, idade, tipo} = req.body;
      const ingressoAtualizado = await Ingresso.findByIdAndUpdate(
        id,
        { ID_evento, nomeUtilizador, idade, tipo },
        { new: true, runValidators: true },
      );
      if (ingressoAtualizado) {
        res.status(200).json({ mensagem: 'Ingresso atualizado com sucesso', atualizado: ingressoAtualizado });
      } else {
        res.status(404).json({ mensagem: 'Ingresso não encontrado' });
      };
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao atualizar ingresso', erro: erro.message });
    };
};

async function deletarIngressos(req, res){
    try {
      const { id } = req.params;
      const ingressoDeletado = await Ingresso.findByIdAndDelete(id);
      if (ingressoDeletado) {
        res.status(200).json({ mensagem: "Ingresso deletado com sucesso", deletado: ingressoDeletado });
      } else {
        res.status(404).json({ mensagem: "Ingresso não encontrado" });
      };
    } catch (erro) {
      res.status(500).json({ mensagem: "Erro ao deletar ingresso", erro: erro.message });
    };
};

module.exports = {criarIngresso,listarIngressos,atualizarIngressos,deletarIngressos}