# Syntax Highlighter

A very newbie approach to make a syntax highlighter only available in JavaScript at the moment. May add new languages in future.

## Installation

You can use this in HTML files by including these two lines in your `<head>` tag:

```html
<link rel="stylesheet" href="https://d3fau4t.github.io/Syntax-Highlighter/Themes/peacock.css">
<script src="https://d3fau4t.github.io/Syntax-Highlighter/Languages/javascript.js" defer></script>
```

## Usage

You can use the highlighter by putting your code inside of:

```html
<pre>
    <code class="lang-js">Your code goes here in this block</code>
<pre>
```

**Note:** The class `lang-js` determines which codeblocks to highlight as the desired language. Check supported languages below to use a class tailored to the language

## Supported Languages

These are the languages currently supported and some other languages to support in the future depending upon my availability.

|Language                   |Extensions            |Class       |Status          |
|---------------------------|----------------------|------------|----------------|
|C                          |`.c`                  |lang-c      |🤔 Maybe        |
|C#                         |`.cs`                 |lang-csharp |🤔 Maybe        |
|CSS                        |`.css`                |lang-css    |🕛 Scheduled    |
|Hyper Text Markup Language |`.html`               |lang-html   |🕛 Scheduled    |
|JavaScript                 |`.js`, `.mjs`, `.cjs` |lang-js     |✅ Implemented  |
|JavaScript Object Notation |`.json`               |lang-json   |🕛 Scheduled    |
|Python                     |`.py`, `.pyw`, `.gyp` |lang-py     |🕛 Scheduled    |
|React-JS                   |`.jsx`                |lang-jsx    |🤔 Maybe        |
|React-TS                   |`.tsx`                |lang-tsx    |🤔 Maybe        |
|TypeScript                 |`.ts`                 |lang-ts     |🕛 Scheduled    |
|YAML Ain't Markup Language |`.yaml`, `.yml`       |lang-yaml   |🕛 Scheduled    |

## Credits

- A big thanks to [GitHub Pages](https://github.com/) for allowing to host these files for free.
