import { useState } from 'react';
import type { ReactElement } from 'react';

const HIGHLIGHT_COMMENT = /highlight|important/i;

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

interface Rule { type: string; re: RegExp; }

const RULES_GENERIC: Rule[] = [
  { type: 'comment', re: /(\/\/.*$|#.*$|\/\*[\s\S]*?\*\/)/gm },
  { type: 'string', re: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/g },
  { type: 'keyword', re: /\b(import|from|export|const|let|var|function|def|class|return|if|else|for|while|try|catch|except|with|async|await|new|this|self)\b/g },
  { type: 'builtin', re: /\b(true|false|null|undefined|None|True|False)\b/g },
  { type: 'number', re: /\b\d+(\.\d+)?\b/g },
];

function tokenizeLine(line: string, rules: Rule[]): string {
  const tokens: { start: number; end: number; type: string; text: string }[] = [];
  for (const rule of rules) {
    const re = new RegExp(rule.re.source, rule.re.flags);
    let m;
    while ((m = re.exec(line)) !== null) {
      tokens.push({ start: m.index, end: m.index + m[0].length, type: rule.type, text: m[0] });
    }
  }
  tokens.sort((a, b) => a.start - b.start || b.end - a.end);
  const filtered: typeof tokens = [];
  let lastEnd = 0;
  for (const t of tokens) {
    if (t.start >= lastEnd) { filtered.push(t); lastEnd = t.end; }
  }
  let result = '';
  let pos = 0;
  for (const t of filtered) {
    if (t.start > pos) result += escapeHtml(line.slice(pos, t.start));
    result += `<span class="token ${t.type}">${escapeHtml(t.text)}</span>`;
    pos = t.end;
  }
  if (pos < line.length) result += escapeHtml(line.slice(pos));
  return result;
}

function highlightCode(code: string): string {
  return code.split('\n').map((line) => {
    const isHighlight = HIGHLIGHT_COMMENT.test(line);
    const highlighted = tokenizeLine(line, RULES_GENERIC);
    return isHighlight ? `<span class="code-line-highlight">${highlighted}</span>` : highlighted;
  }).join('\n');
}

export default function CodeBlock({ code, language = '' }: { code: string; language?: string }): ReactElement {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const html = highlightCode(code);

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-lang">{language}</span>
        <button className={`code-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="code-block-content">
        <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
      </div>
    </div>
  );
}
