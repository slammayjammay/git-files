# `git-files`
> Get all modified, deleted, staged, and untracked files

```js
const gitFiles = require('git-files')
console.log(gitFiles.all())
```

Specify the path type you want: `full` (default), `relative`, or `absolute`.


`full` paths give the file path from the root of the git directory, for example `src/js/index.js`.

`relative` gives the the file path relative to the current working directory.

`absolute` gives the entire file path from root.

Pass in the path type as a string.

```js
gitFiles.staged('full') // or gitFiles.staged()
gitFiles.untracked('absolute')
gitFiles.deleted('relative')
```
