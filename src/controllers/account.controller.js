const accountService = require('../services/account.service')

exports.register = async (req, res) => res.status(201).json(await accountService.register(req.body));
