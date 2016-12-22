const chalk = require('chalk')
const utils = require('../utils')

const STAGED_COMMAND = 'git diff --cached --name-only'
const MODIFIED_COMMAND = 'git ls-files --modified'
const UNTRACKED_COMMAND = 'git ls-files --other --exclude-standard'
const DELETED_COMMAND = 'git ls-files --deleted'

function findFiles (pathType, listCommand) {
	if (pathType === 'full') {
		return utils.listFull(listCommand)
	} else if (pathType === 'absolute') {
		return utils.listAbsolute(listCommand)
	} else if (pathType === 'relative') {
		return utils.listRelative(listCommand)
	} else {
		throw new Error(error(pathType))
	}
}

function error(pathType) {
	return `${chalk.green(`'${pathType}'`)} is not a valid path type. Please specify ${chalk.green(`'full'`)} (default), ${chalk.green(`'relative'`)}, or ${chalk.green(`'absolute'`)}.`
}

module.exports = {
	staged: (pathType = 'full') => findFiles(pathType, STAGED_COMMAND),
	deleted: (pathType = 'full') => findFiles(pathType, DELETED_COMMAND),
	modified: (pathType = 'full') => findFiles(pathType, MODIFIED_COMMAND),
	untracked: (pathType = 'full') => findFiles(pathType, UNTRACKED_COMMAND)
}
