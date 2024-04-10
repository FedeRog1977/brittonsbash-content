# 3 Git And GitHub CLI

First off, the following guide gives a brief overview of some of the basics which are essential to operate as a sole hobbyist, developer, or collaborative developer. For a more comprehensive breakdown, see [git-scm.com](https://git-scm.com/), see [cli.github.com](https://cli.github.com/), read `man git` for Git instructions, read `man gh` for GitHub CLI instructions, browse `git --help` for Git help, and browse `gh --help` for GitHub CLI help. Note that if you require help regarding a specific command, you can follow the command with the `--help` flag. For example, `git branch --help`. Generally, the [Gitflow Workflow](https://nvie.com/posts/a-successful-git-branching-model/) model is used in the following context. Git comes with any Linux distribution. GitHub CLI, like any Git interface, must be installed.

## 3.1 GitHub CLI Setup

---

Usage:

```
gh <command> <subcommand> [flag(s)]
```

Install GitHub CLI (repair and update):

```
sudo pacman -Sy github-cli
```

Authenticate And Login:

1. Initialize login in command line: `gh auth login`
2. Navigate options accordingly, usually choosing to complete in-browser by selecting:
   - 'GitHub.com'
   - 'HTTPS' (preference dependent)
   - 'Y'
   - 'Login with a web browser'
3. Login in-browser using standard login followed by code generated in-command-line
4. Complete login in-command-line
5. Logout: `gh auth logout`

Create repository (use `--private` flag to make private):

```
gh repo create 'repo-name'
```

Clone repository to local files after creation (tend to be in appropriate `./` so omit `'directory'`):

```
gh repo clone 'repo-url' 'directory-name'
```

Clone repository (using Git):

```
git clone 'repo-url' 'directory-name'
```

Some other commands:

- Manage repositories: `gh repo`
- Open repository in-browser: `gh browse`
- Manage pull requests: `gh pr`
- Manage issues: `gh issue`
- Manage releases: `gh releases`
- Manage SSH keys: `gh ssh-key`
- Manage GPG keys: `gh gpg-key`
- Manage config in-line: `gh config <command> [flag(s)]`

Some other specific commands:

- Define account e-mail address (using Git): `git config --global user.email "'email-address'"`
- Define editor in-line (to use `nvim`): `git config --global core.editor "nvim"`

## Create Repo

---

From the local directory you wish to make a Git repository;

Create `.git` directory:

```
git init
```

Add a README file:

```
git add README.md
```

Commit this action:

```
git commit -m "message"
```

Create `master` or `main` branch, depending on your political stance:

```
git branch -M master
```

Add remote:

```
git remote add origin https://github.com/<username>/<repo-name>.git
```

Push changes:

```
git push -u origin master
```

Alternatively, you can create a repository from GitHub browser and clone it locally.

## Changing Remote

---

Check remote version:

```
git remote -v
```

Assuming you named your remote origin, remove remote:

```
git remote remove origin
```

Add remote:

```
git remote add origin https://github.com/<username>/<repo-name>.git
```

Fetch:

```
git fetch
```

You may be asked to re-authenticate.

## 3.2 Branching

---

Navigate into the newly cloned repository created by the clone in the standard manner, using `cd`. For example, `cd ./dotfiles` when the repo `dotfiles` has been created and cloned to the current `./`. From now on, we'll basically just be using Git commands.

Branching is useful for segmenting, typically, larger and more collaborative projects. For example, when adding a feature or fixing a bug, etc., in a large system, branches prefixed with `feature/`, `fix/`, etc., will be used to manage commits from various developers who are developing in their branch, name of which following the suffix. Changes from branches will then be merged in the main branch for deployment.

View branches:

```
git branch
```

Switch branch:

```
git checkout 'branch-name'
```

Create branch:

```
git checkout -b 'branch-name'
```

Delete branch:

```
git branch --delete 'branch-name'
```

Or:

```
git branch -d 'branch-name'
```

Or, to force:

```
git branch --delete --force 'branch-name'
```

Or:

```
git branch -D 'branch-name'
```

Rename branch, from 'branch-name':

```
git branch -m 'new-branch-name'
```

Before moving on, ensure the branch is up-to-date with the remote master branch:

```
git pull
```

## 3.3 Committing

---

Once you have finished making appropriate changes to files, adding new files, and/or removing files, either from a custom branch or just from `master`, primarily you can view the status of your repository, add and remove files from the repo in-line with your local store, and commit changes locally.

View status:

```
git status
```

If you have added new files to the local repository, add them from their appropriate locations or from the base of the repository's directory:

```
git add ./
```

If you remove files locally, you must also remove them from the repository, once again from their appropriate locations or from the base of the repository's directory:

```
git rm ./'file-name'
```

The same recursive `rm` syntax applies when removing a whole directory using Git:

```
git rm -r ./'directory-name'
```

Once you're happy with the `status` of your repository, commit changes (`-m` for in-line message):

```
git commit -m "message"
```

You can also open a text buffer, which we previously declared to open to `nvim`, without `-m`. Use `-a` to stage all modified and deleted files, omitting non-added new files if you desire:

```
git commit -a
```

When a text buffer opens, leave an appropriate commit message relevant to the changes you have made. In a professional context, there may be convention to adhere to. Some examples of commit purposes follow:

- `fix:` 'description'
- `feature:` 'description'
- `build:` 'description'
- `chore:` 'description'
- `ci:` 'description'
- `docs:` 'description'
- `style:` 'description'
- `refactor:` 'description'
- `perf:` 'description'
- `test:` 'description'

## 3.3.1 Stashing

Stashing can be used to record the current state of the directory, i.e. all modifications, additions and removals, and revert to the **HEAD** commit. Changes are 'stashed' and can be restored, potentially on top of new commits, in the future.

View modification stashes:

```
git statsh list
```

Inspect stashes:

```
git stash show
```

Restore:

```
git stash apply
```

## 3.3.2 Rebase

Rebase provides various useful options, particularly when working from branches in collaborative projects. Essentially, where a main branch may have progressed beyond the point of your branch in development, it allows you to work from the most recent main branch updates in your branch without altering your changes. It makes it appear as though your branch was created from a more recent commit by creating new commits aligned with main branch progress from your branch base. The general process follows:

1. Changes made by commits in the current branch which aren't in `<upstream>` are temporarily saved. This is like running `git log <upstream> ... HEAD`
2. The current branch is reset to `<upstream>`, or `<newbase>` given the use of `--onto`. This acts like `git reset --hard <upstream>` or `... <newbase>`
3. Commits which are temporarily stored are then reapplied to the current branch one-by-one

This process is often used in conjunction with others. For example, here is a line I ran in order to negate issues caused by a large file using `git filter-branch` and `git rebase`:

- Filter branch of directory: `git filter-branch --tree-filter 'rm -f MVCC.zip' HEAD`
- Restore master state: `git rebase origin/master`

* [Guide](https://docs.gitlab.com/ee/topics/git/git_rebase.html#:~:text=In%20Git%2C%20a%20rebase%20updates,you%20created%20your%20feature%20branch)

## 3.3.3 Reset

The most common practical error after which making you find yourself in need of a process such as this is when you have committed changes made to code on the `master` branch and staged the associated files for commit. This process negates errors such as this, as well as more generic examples. The `git reset` command resets your codebase to a previous defined state. Files remain unchanged post-`reset` however files will revert to the state of **not staged for commit**, with these changes being all differences between the `reset` point in history and the current point.

Reset to state (undo commit, return to not staged):

```
git reset <commit-tag>
```

Restore to state (un-not-staged files):

```
git restore ./
```

Or as in the example above, reset changes on `master`:

```
`git reset –-soft HEAD~`
`git reset HEAD ./
`git restore ./`
```

- [Guide](https://www.nobledesktop.com/learn/git/undo-changes#:~:text=The%20last%20commit%20that%20has,back%20to%20the%20staging%20area)

## 3.4 Pushing And Pulling

---

Once you have made your commit of changes, additions and/or removals, you can push your code directly to see immediate changes when working from the `master` branch:

```
git push
```

Or, you can push from a branch of your own and create a pull request when simply making branched changes or working collaboratively. Pull requests are essentially 'review requests' when working collaboratively:

```
git push --set-upstrem origin 'branch-name'
```

To recap a point from earlier, you can now review pull requests:

```
gh pr <subcommand>
```

For this command to be effective, you must use a `<subcommand>`. Some of the most common/useful ones follow:

- Create pull request: `create 'pr-name'`
- Close pull request: `close 'pr-name'`
- Checkout pull request locally: `checkout 'pr-name'`
- Comment on a pull request: `comment 'pr-name'`
- View changes on pull request: `diff 'pr-name'`
- Edit pull request: `edit 'pr-name'`
- List pull requests in repository: `list 'pr-name'`
- Merge pull request: `merge 'pr-name'`
- Mark pull request ready for review: `ready 'pr-name'`
- Reopen pull request: `reopen 'pr-name'`
- Add review to pull request: `review 'pr-name'`
- Show status of pull requests in repository: `status 'pr-name'`
- View pull request: `view 'pr-name'`

Check pull request data:

```sh
`gh pr view <pr-number> –json`
```

Follow the above command with any of the following:

```
additions
assignees
author
autoMergeRequest
baseRefName
body
changedFiles
closed
closedAt
comments
commits
createdAt
deletions
files
headRefName
headRefOid
headRepository
headRepositoryOwner
id
isCrossRepository
isDraft
labels
latestReviews
maintainerCanModify
mergeCommit
mergeStateStatus
mergeable
mergedAt
mergedBy
milestone
number
potentialMergeCommit
projectCards
projectItems
reactionGroups
reviewDecision
reviewRequests
reviews
state
statusCheckRollup
title
updatedAt
url
```


