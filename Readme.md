# component-autoboot

Plugin for [component] build: automatically requires `boot` module at the end of the output script.

## Install

    npm install component-autoboot

## Usage

If have just one script in your application or a webpage (and there is precious few reasons to have
more than one if you use component properly) you may catch yourself adding this snippet to HTML

```html
<script src="/build/build.min.js" />
<script>require('boot');</script>
````

This tiny plugin provides an alternative. Build your sources like this:

  component build --use component-autoboot


And `require("boot");` line is appended to your script. You can now load it and execute it in one
shot.

```html
<script src="/build/build.min.js" defer />
```

## License

MIT

[component]: https://github.com/component/component
