import React, { useState, useEffect, memo, useRef } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
  restart?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = memo(
  ({ language, code, restart = false }) => {
    const [copied, setCopied] = useState(false);
    const [displayedCode, setDisplayedCode] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const preRef = useRef<HTMLPreElement>(null);

    // Calculate height before starting animation
    useEffect(() => {
      if (preRef.current) {
        const tempPre = document.createElement("pre");
        tempPre.className = "text-sm text-gray-300 font-mono leading-relaxed";
        tempPre.style.visibility = "hidden";
        tempPre.style.position = "absolute";
        tempPre.style.width = "100%";
        tempPre.innerHTML = `<code>${code}</code>`;
        document.body.appendChild(tempPre);

        const height = tempPre.offsetHeight;
        document.body.removeChild(tempPre);
        setContentHeight(height);
      }
    }, [code]);

    useEffect(() => {
      let timer: number;
      if (currentIndex < code.length) {
        timer = window.setTimeout(() => {
          setDisplayedCode((prev) => prev + code[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 15);
      }
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [currentIndex, code]);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    };

    return (
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-medium">
              {language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4" style={{ height: contentHeight }}>
          <pre
            ref={preRef}
            className="text-sm text-gray-300 font-mono leading-relaxed"
          >
            <code>
              {displayedCode}
              {currentIndex < code.length && (
                <span className="animate-pulse bg-green-400 text-black">█</span>
              )}
            </code>
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
