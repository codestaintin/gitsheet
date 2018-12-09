export default {
  'install git': [{
    description: 'Install git on macOS with Homebrew',
    command: 'brew install git',
    keywords: ['install', 'macos', 'homebrew']
  },
  {
    description: 'Install git on Debian-based linux',
    command: 'sudo apt-get install git',
    keywords: ['install', 'apt-get', 'debian', 'linux']
  },
  {
    description: 'Install git on Windows with Chocolatey',
    command: 'choco install git',
    keywords: ['install', 'windows', 'choco']
  }],
  configuration: [{
    command: 'git config --global user.name [name]',
    description: 'Sets the name you want attached to your commit transaction',
    keywords: ['configuration', 'name', 'email', 'user']
  },
  {
    command: 'git config --global user.email [email address]',
    description: 'Sets the email you want atached to your commit transactions',
    keywords: ['configuration', 'name', 'email', 'user']
  },
  {
    command: 'git config --global color.ui auto',
    description: 'Enables helpful colorization of command line output',
    keywords: ['configuration', 'color', 'ui', 'customization']
  }],
  'create repo': [{
    command: 'git init [project-name]',
    description: 'Creates a new local repository with the specified name',
    keywords: ['new', 'project', 'create']
  },
  {
    command: 'git clone [url]',
    description: 'Downloads a project and its entire version history',
    keywords: ['download', 'remote', 'clone', 'checkout']
  }],
  'make changes': [{
    command: 'git status',
    description: 'Lists all new or modified files to be commited',
    keywords: ['change', 'modifications', 'commit']
  },
  {
    command: 'git diff',
    description: 'Shows file differences not yet staged',
    keywords: ['modifications', 'changes', 'diff']
  },
  {
    command: 'git add [file]',
    description: 'Add the specified file to the staging area',
    keywords: []
  },
  {
    command: 'git diff --staged',
    description: 'Shows file differences between staging and the last file version',
    keywords: ['modifications']
  },
  {
    command: 'git reset [file]',
    description: 'Unstages the file, but preserve its contents',
    keywords: []
  },
  {
    command: 'git commit -m [descriptive message]',
    description: 'Records staged snapshots in version history',
    keywords: []
  },
  {
    command: 'git reset [commit]',
    description: 'Undoes all commits afer [commit], preserving changes locally',
    keywords: []
  },
  {
    command: 'git reset --hard [commit]',
    description: 'Discards all history and changes back to the specified commit',
    keywords: []
  },
  {
    command: 'git reset –hard HEAD',
    description: 'Discards all local changes in the working directory',
    keywords: []
  }],
  branches: [{
    command: 'git branch',
    description: 'Lists all local branches in the current repository',
    keywords: []
  },
  {
    command: 'git branch [branch-name]',
    description: 'Creates a branch',
    keywords: []
  },
  {
    command: 'git merge [branch-name]',
    description: 'Merges the specified branch’s history into the current branch',
    keywords: []
  },
  {
    command: 'git checkout [branch-name]',
    description: 'Switches to the specified branch',
    keywords: []
  },
  {
    command: 'git checkout -b [branch-name]',
    description: 'Creates a branch and switch to it',
    keywords: []
  },
  {
    command: 'git checkout -m [new-branch-name]',
    description: 'Rename a branch',
    keywords: []
  },
  {
    command: 'git branch -d [branch-name]',
    description: 'Deletes the specified branch, locally',
    keywords: []
  }],
  stashing: [{
    command: 'git stash pop',
    description: 'Restores the most last stashed files and deletes the stashed changeset',
    keywords: []
  },
  {
    command: 'git stash',
    description: 'Temporarily stores all modified tracked files',
    keywords: []
  },
  {
    command: 'git stash list',
    description: 'Lists all stashed changesets',
    keywords: []
  },
  {
    command: 'git stash drop',
    description: 'Deletes the last stashed changeset',
    keywords: []
  }],
  synchronize: [{
    command: 'git push [alias] [branch]',
    description: 'Pushes all local changesets to the remote repository',
    keywords: []
  },
  {
    command: 'git pull',
    description: 'Downloads new remote history and incorporate changes',
    keywords: []
  },
  {
    command: 'git remote -v',
    description: 'Shows the name of remote repositories',
    keywords: []
  },
  {
    command: 'git fetch',
    description: 'Get the latest changes from the origin but not merge',
    keywords: []
  },
  {
    command: 'git remote rm [remote repo name]',
    description: 'Removes the remote repository',
    keywords: []
  }],
  tagging: [{
    command: 'git tag',
    description: 'Lists all tags',
    keywords: ['tag', 'version', 'release']
  },
  {
    command: 'git tag -l "[pattern]"',
    description: 'Lists tags with specified pattern',
    keywords: ['tag', 'version', 'release', 'pattern']
  },
  {
    command: 'git tag -a [version] -m [message]',
    description: 'Create annotated tag',
    keywords: ['tag', 'version', 'release', 'annotate']
  },
  {
    command: 'git tag [version]',
    description: 'Create a lightweight tag',
    keywords: ['tag', 'version', 'release', 'lightweight']
  },
  {
    command: 'git tag -a [version] [commit]',
    description: 'Tagging a commit',
    keywords: ['tag', 'version', 'release', 'later']
  },
  {
    command: 'git push [alias] [version]',
    description: 'Sharing a tag',
    keywords: ['tag', 'version', 'release', 'later']
  },
  {
    command: 'git checkout [version]',
    description: 'Checkout tags',
    keywords: ['tag', 'version', 'release']
  },
  {
    command: 'git commit --amend',
    description: 'Change the commit message',
    keywords: ['undo', 'message', 'commit']
  }],
  'moving & removing files': [{
    command: 'git rm [file]',
    description: 'Deletes the file from the working directory and stages the deletion',
    keywords: []
  },
  {
    command: 'git rm --cached [file]',
    description: 'Removes the file from version control but preserves the file locally',
    keywords: []
  },
  {
    command: 'git mv [from] [to]',
    description: 'Renames the file',
    keywords: []
  }],
  'history & diff': [{
    command: 'git log',
    description: 'Lists version history for the current branch',
    keywords: []
  },
  {
    command: ['git log --follow [file]'],
    description: 'Lists version history for a file, including renames',
    keywords: []
  },
  {
    command: 'git diff [first-branch]...[second-branch]',
    description: 'Shows content differences between two branches',
    keywords: []
  },
  {
    command: 'git show [commit]',
    description: 'Shows changes of the specified commit',
    keywords: []
  }]
};
