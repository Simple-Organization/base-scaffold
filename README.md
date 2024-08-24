# New project

## Usage with `git clone --depth 1`

```shell
git clone --depth 1 https://github.com/Simple-Organization/base-scaffold.git new-project
```

Remember to delete the current `.git`

```shell
# linux
rm -rf .git

# windows
rmdir /s /q .git
```

## Usage with `degit`

```shell
npx degit https://github.com/Simple-Organization/base-scaffold.git new-project
```

With `degit` you don't need to delete the current `.git`
