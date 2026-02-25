"use client";

import { useState } from "react";
import type { GeneratedMail } from "@/lib/mail-templates";

interface MailPreviewProps {
  mail: GeneratedMail;
}

export default function MailPreview({ mail }: MailPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  const handleCopyBody = async () => {
    try {
      await navigator.clipboard.writeText(mail.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback pour les navigateurs qui ne supportent pas l'API Clipboard
      const textarea = document.createElement("textarea");
      textarea.value = mail.body;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopySubject = async () => {
    try {
      await navigator.clipboard.writeText(mail.subject);
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = mail.subject;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    }
  };

  const handleCopyAll = async () => {
    const fullText = `Objet : ${mail.subject}\n\n${mail.body}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = fullText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--color-primary)] px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            ✉️{" "}
            {mail.type === "reclamation"
              ? "Mail de réclamation"
              : "Mail de relance"}
          </h3>
          <button
            onClick={handleCopyAll}
            className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium"
          >
            {copied ? "✓ Copié !" : "📋 Tout copier"}
          </button>
        </div>
      </div>

      {/* Objet du mail */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] bg-gray-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold text-[var(--color-text-light)] uppercase tracking-wider">
              Objet :
            </span>
            <p className="text-sm text-[var(--color-text)] font-medium mt-1 break-words">
              {mail.subject}
            </p>
          </div>
          <button
            onClick={handleCopySubject}
            className="text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium flex-shrink-0"
          >
            {copiedSubject ? "✓ Copié" : "Copier l'objet"}
          </button>
        </div>
      </div>

      {/* Corps du mail */}
      <div className="px-6 py-6">
        <pre className="whitespace-pre-wrap font-sans text-sm text-[var(--color-text)] leading-relaxed">
          {mail.body}
        </pre>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-[var(--color-border)] flex flex-col gap-3">
        <button
          onClick={handleCopyAll}
          className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold py-4 px-6 rounded-xl transition-colors text-center text-lg shadow-lg hover:shadow-xl"
        >
          {copied ? "✓ Lettre copiée !" : "📋 Copier la lettre"}
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleCopyBody}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-[var(--color-text)] font-medium py-3 px-4 rounded-lg transition-colors text-center text-sm"
          >
            {copied ? "✓ Copié" : "Copier le corps seul"}
          </button>
          <a
            href={`mailto:?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-[var(--color-text)] font-medium py-3 px-4 rounded-lg transition-colors text-center text-sm"
          >
            📧 Ouvrir dans ma messagerie
          </a>
        </div>
      </div>

      {/* Conseil */}
      <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
        <p className="text-xs text-blue-700 leading-relaxed">
          <strong>💡 Conseil :</strong> Pour un maximum d&apos;efficacité,
          envoyez ce mail depuis une adresse email professionnelle ou sérieuse.
          Conservez une copie de tous vos échanges. Si vous n&apos;obtenez pas de
          réponse sous 15 jours, utilisez le mail de relance.
        </p>
      </div>
    </div>
  );
}
