
// Importação dos módulos
const express = require('express');
const mongoose = require('mongoose');

// Inicialização do Express, utilização do JSON e criação da porta
const app = express();
app.use(express.json());
const port = 3000;

// Conexão com MongoDB
mongoose
  .connect("mongodb://localhost:27017/BIBLIOTECA")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

// Esquema dos livros
const esquemaLivro = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  genero: { type: String, required: true },
});

// Esquema para estudante
const esquemaEstudante = new mongoose.Schema({
    nome: { type: String, required: true },
    matricula: { type: String, required: true },
    curso: { type: String, required: true },
    ano: { type: Number, required: true },
});

// Esquema para alugueis
const esquemaAluguel = new mongoose.Schema({
    ID_livro: { type: String, required: true },
    ID_estudante: { type: String, required: true },
    dataEmprestimo: { type: String, required: true },
    dataDevolucao: { type: String, required: true },
});

// Criação dos documentos
const Livro = mongoose.model("Livro", esquemaLivro);
const Estudante = mongoose.model("Estudante", esquemaEstudante);
const Aluguel = mongoose.model("Aluguel", esquemaAluguel);

// Rotas para CRUD de LIVROS
app.get("/livros", async (req, res) => {
    try {
      const livros = await listarLivros();
      res.status(200).json(livros);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao obter livros", erro: erro.message });
    }
});

app.post("/livros", async (req, res) => {
    try {
      const { titulo, autor, ano, genero } = req.body;
      const novoLivro = await criarLivro(titulo, autor, ano, genero);
      res
        .status(201)
        .json({ mensagem: "Livro criado com sucesso", livro: novoLivro });
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao criar livro", erro: erro.message });
    }
});

app.put("/livros/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, autor, ano, genero } = req.body;
      const livroAtualizado = await atualizarLivro(
        id,
        titulo,
        autor,
        ano,
        genero
      );
      if (livroAtualizado) {
        res
          .status(200)
          .json({
            mensagem: "Livro atualizado com sucesso",
            livro: livroAtualizado,
          });
      } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao atualizar livro", erro: erro.message });
    }
});

app.delete("/livros/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const livroDeletado = await deletarLivro(id);
      if (livroDeletado) {
        res
          .status(200)
          .json({ mensagem: "Livro deletado com sucesso", livro: livroDeletado });
      } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar livro", erro: erro.message });
    }
});

// Rotas para CRUD de ESTUDANTES
app.get("/estudantes", async (req, res) => {
    try {
      const estudantes = await listarEstudantes();
      res.status(200).json(estudantes);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao obter estudantes", erro: erro.message });
    }
});

app.post("/estudantes", async (req, res) => {
    try {
      const { nome, matricula, curso, ano } = req.body;
      const novoEstudante = await criarEstudante(nome, matricula, curso, ano);
      res
        .status(201)
        .json({ mensagem: "Estudante criado com sucesso", estudante: novoEstudante });
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao criar estudante", erro: erro.message });
    }
});

app.put("/estudantes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, matricula, curso, ano } = req.body;
      const estudanteAtualizado = await atualizarEstudante(
        id,
        nome,
        matricula,
        curso,
        ano
      );
      if (estudanteAtualizado) {
        res
          .status(200)
          .json({
            mensagem: "Estudante atualizado com sucesso",
            estudante: estudanteAtualizado,
          });
      } else {
        res.status(404).json({ mensagem: "Estudante não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao atualizar estudante", erro: erro.message });
    }
});

app.delete("/estudantes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const estudanteDeletado = await deletarEstudante(id);
      if (estudanteDeletado) {
        res
          .status(200)
          .json({ mensagem: "Estudante deletado com sucesso", estudante: estudanteDeletado });
      } else {
        res.status(404).json({ mensagem: "Estudante não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar estudante", erro: erro.message });
    }
});

// Rotas para CRUD de ALUGUEIS
app.get("/alugueis", async (req, res) => {
    try {
      const alugueis = await listarAlugueis();
      res.status(200).json(alugueis);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao obter alugueis", erro: erro.message });
    }
});

app.post("/alugueis", async (req, res) => {
    try {
      const { ID_livro, ID_estudante, dataEmprestimo, dataDevolucao } = req.body;
      const novoAluguel = await criarAluguel(ID_livro, ID_estudante, dataEmprestimo, dataDevolucao);
      res
        .status(201)
        .json({ mensagem: "Aluguel criado com sucesso", aluguel: novoAluguel });
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao criar aluguel", erro: erro.message });
    }
});

app.put("/alugueis/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { ID_livro, ID_estudante, dataEmprestimo, dataDevolucao } = req.body;
      const aluguelAtualizado = await atualizarAluguel(
        id,
        ID_livro,
        ID_estudante,
        dataEmprestimo,
        dataDevolucao
      );
      if (aluguelAtualizado) {
        res
          .status(200)
          .json({
            mensagem: "Aluguel atualizado com sucesso",
            aluguel: aluguelAtualizado,
          });
      } else {
        res.status(404).json({ mensagem: "Aluguel não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao atualizar aluguel", erro: erro.message });
    }
});

app.delete("/alugueis/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const aluguelDeletado = await deletarAluguel(id);
      if (aluguelDeletado) {
        res
          .status(200)
          .json({ mensagem: "Aluguel deletado com sucesso", aluguel: aluguelDeletado });
      } else {
        res.status(404).json({ mensagem: "Aluguel não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar aluguel", erro: erro.message });
    }
});

// Funções LIVROS
async function criarLivro(titulo, autor, ano, genero) {
  try {
    const novoLivro = new Livro({ titulo, autor, ano, genero });
    return await novoLivro.save();
  } catch (erro) {
    console.error("Erro ao criar livro:", erro);
    throw erro;
  }
}

async function listarLivros() {
  try {
    return await Livro.find();
  } catch (erro) {
    console.error("Erro ao obter livros:", erro);
    throw erro;
  }
}

async function atualizarLivro(id, titulo, autor, ano, genero) {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(
      id,
      { titulo, autor, ano, genero },
      { new: true, runValidators: true }
    );
    return livroAtualizado;
  } catch (erro) {
    console.error("Erro ao atualizar livro:", erro);
    throw erro;
  }
}

async function deletarLivro(id) {
  try {
    const livroDeletado = await Livro.findByIdAndDelete(id);
    return livroDeletado;
  } catch (erro) {
    console.error("Erro ao deletar livro:", erro);
    throw erro;
  }
}

// Funções ESTUDANTES
async function criarEstudante(nome, matricula, curso, ano) {
    try {
      const novoEstudante = new Estudante({ nome, matricula, curso, ano });
      return await novoEstudante.save();
    } catch (erro) {
      console.error("Erro ao criar estudante:", erro);
      throw erro;
    }
}
  
async function listarEstudantes() {
    try {
      return await Estudante.find();
    } catch (erro) {
      console.error("Erro ao obter estudantes:", erro);
      throw erro;
    }
}
  
async function atualizarEstudante(id, nome, matricula, curso, ano) {
    try {
      const estudanteAtualizado = await Estudante.findByIdAndUpdate(
        id,
        { nome, matricula, curso, ano },
        { new: true, runValidators: true }
      );
      return estudanteAtualizado;
    } catch (erro) {
      console.error("Erro ao atualizar estudante:", erro);
      throw erro;
    }
}
  
async function deletarEstudante(id) {
    try {
      const estudanteDeletado = await Estudante.findByIdAndDelete(id);
      return estudanteDeletado;
    } catch (erro) {
      console.error("Erro ao deletar estudante:", erro);
      throw erro;
    }
}

// Funções ALUGUEIS
async function criarAluguel(ID_livro, ID_estudante, dataEmprestimo, dataDevolucao) {
    try {
      const novoAluguel = new Aluguel({ ID_livro, ID_estudante, dataEmprestimo, dataDevolucao });
      return await novoAluguel.save();
    } catch (erro) {
      console.error("Erro ao criar aluguel:", erro);
      throw erro;
    }
}
  
async function listarAlugueis() {
    try {
      return await Aluguel.find();
    } catch (erro) {
      console.error("Erro ao obter alugueis:", erro);
      throw erro;
    }
}
  
async function atualizarAluguel(id, ID_livro, ID_estudante, dataEmprestimo, dataDevolucao) {
    try {
      const aluguelAtualizado = await Aluguel.findByIdAndUpdate(
        id,
        { ID_livro, ID_estudante, dataEmprestimo, dataDevolucao },
        { new: true, runValidators: true }
      );
      return aluguelAtualizado;
    } catch (erro) {
      console.error("Erro ao atualizar aluguel:", erro);
      throw erro;
    }
}
  
async function deletarAluguel(id) {
    try {
      const aluguelDeletado = await Aluguel.findByIdAndDelete(id);
      return aluguelDeletado;
    } catch (erro) {
      console.error("Erro ao deletar aluguel:", erro);
      throw erro;
    }
}

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
