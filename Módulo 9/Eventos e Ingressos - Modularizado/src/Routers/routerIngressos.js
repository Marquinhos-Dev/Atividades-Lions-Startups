
const express = require('express');
const router = express.Router();
const controllerIngressos = require('../Controllers/controllerIngressos');

router.post('/',controllerIngressos.criarIngresso);
router.get('/',controllerIngressos.listarIngressos);
router.put('/',controllerIngressos.atualizarIngressos);
router.delete('/',controllerIngressos.deletarIngressos);

module.exports = router;