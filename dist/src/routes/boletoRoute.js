"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => res.status(200).send({
    message: 'rota boleto',
}));
router.get('/:barCode', (req, res) => res.status(200).send({
    message: 'rota boleto',
    barCode: req.params.barCode,
}));
exports.default = router;
