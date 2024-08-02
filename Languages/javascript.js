const codeblocks = document.querySelectorAll("code.lang-js");

const d3_numerics = /(?<!['"`])\b\d+\b(?!['"`])/g;
const d3_generalKeywords = /(?<!['"`])\b(let|new|const|var|delete|satisfies|import|export|from|try|catch|finally|async|await|as|JSON|if|else|return|true|false|null|undefined|function)\b(?!['"`:])/g;
const d3_stringKeywords = /('[^']*'|"[^"]*"|`[^`]*`)/g;
const d3_funcInvoke = /(\w+)\(/g;
const d3_punctuations = /(?<!['"`])(\,|\.|:|(?<!&gt);$)(?!['"`])/g;
const d3_operators = /(===|==|\+\+|--|\+=|-=|\/=|\*=|(?<!span\sclass)=(?!&gt;))|!|&gt;=|&lt;=|&&|\?\?|\||%|\\n|\\t|\\s|\\w|\\d|\+|-|\*|\/(?!span)/g;
const d3_builtIn = /(Record|[Oo]bject|console|Math|NodeJS|[Nn]umber|string(?!ify)|number|boolean|BigInt|Symbol|&lt;|(?<!=)&gt;)/g;
const d3_parameters = /(?<=\bfunction\s+\w*\(|\(\s*)([^)]+)(?=\s*\)\s*=>|\s*\)\s*\{)/g;

const braceColors = ['braceLevel0', 'braceLevel1', 'braceLevel2'];
let braceStack = [];

function highlightBraces(line) {
    return line.replace(/[{}()\[\]]/g, (match) => {
        if (match === '{' || match === '(' || match === '[') {
            const colorClass = braceColors[braceStack.length % 3];
            braceStack.push(colorClass);
            return `<span class='${colorClass}'>${match}</span>`;
        } else if (match === '}' || match === ')' || match === ']') {
            const colorClass = braceStack.pop();
            return `<span class='${colorClass}'>${match}</span>`;
        }
    });
}

function highlightParameters(line) {
    return line.replace(d3_parameters, (match, p1) => {
        const params = p1.split(',').map(param => param.trim());
        const highlightedParams = params.map(param => `<span class='d3Parameters'>${param}</span>`);
        return `${highlightedParams.join(',')}`;
    });
}


for (const codeblock of codeblocks) {
    let highlightedCode = "";

    for (let line of codeblock.textContent.split('\n')) {
        const code = line
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(d3_stringKeywords, "<span class='d3Strings'>$&</span>")
            .replace(d3_builtIn, "<span class='d3BuiltIn'>$&</span>")
            .replace(d3_operators, "<span class='d3Operators'>$&</span>")
            .replace(d3_generalKeywords, "<span class='d3generalKeywords'>$1</span>")
            .replace(d3_funcInvoke, "<span class='d3FuncInvoke'>$1</span>(")
            .replace(d3_numerics, "<span class='d3Numerics'>$&</span>")
            .replace(d3_punctuations, "<span class='d3Punctuations'>$&</span>")
    
        const highlightedLine = highlightBraces(highlightParameters(code));
    
        highlightedCode += highlightedLine + "\n";
    }

    codeblock.innerHTML = highlightedCode;
}