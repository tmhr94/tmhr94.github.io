# rikoroku.github.io
https://rikoroku.github.io/

## Development
```
$ cd rikoroku.github.io/hugo
$ hugo -t hugo-resume --themesDir ./themes/ server
```

## Release
```
$ cd rikoroku.github.io/hugo
$ hugo && cp -r public/* ../ && rm -fr public
$ git add . && git commit -m '[add] publishing to gh-pages' && git push origin master
```

### Generate content files
```
$ hugo new projects/[creations or contributions]/name-of-project.md
```

## StaticGen
[HUGO](https://github.com/gohugoio/hugo)

## HUGO's Theme
[hugo Resume](https://github.com/eddiewebb/hugo-resume)
