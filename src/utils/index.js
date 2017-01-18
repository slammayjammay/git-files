const join = require('path').join
const relative = require('path').relative
const execSync = require('child_process').execSync

function getGitRoot() {
	return execSync('git rev-parse --show-toplevel').toString('utf8').trim()
}

const listFull = (command) => {
	return execSync(command)
		.toString('utf8')
		.split('\n')
		.filter(file => file !== '')
}

const listRelative = (command) => {
	let gitRootDir = getGitRoot()
	return listFull(command).map(file => {
		return relative(process.cwd(), join(gitRootDir, file))
	})
}

const listAbsolute = (command) => {
	let gitRootDir = getGitRoot()
	return listFull(command).map(file => join(gitRootDir, file))
}

module.exports = {
	listFull,
	listRelative,
	listAbsolute
}
