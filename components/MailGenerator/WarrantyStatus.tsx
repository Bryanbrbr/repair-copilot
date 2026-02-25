"use client";

import type { WarrantyStatus as WarrantyStatusType } from "@/lib/warranty-calculator";
import { formatDateFR } from "@/lib/warranty-calculator";

interface WarrantyStatusProps {
  status: WarrantyStatusType;
}

export default function WarrantyStatus({ status }: WarrantyStatusProps) {
  return (
    <div
      className={`rounded-xl border-2 p-6 ${
        status.isUnderWarranty
          ? status.daysRemaining > 30
            ? "border-green-200 bg-green-50"
            : "border-amber-200 bg-amber-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">
          {status.isUnderWarranty
            ? status.daysRemaining > 30
              ? "✅"
              : "⚠️"
            : "❌"}
        </span>
        <div>
          <h3
            className={`font-semibold text-lg ${
              status.isUnderWarranty
                ? status.daysRemaining > 30
                  ? "text-green-800"
                  : "text-amber-800"
                : "text-red-800"
            }`}
          >
            {status.isUnderWarranty
              ? status.daysRemaining > 30
                ? "Probablement couvert par la garantie légale"
                : "Garantie légale bientôt à échéance"
              : "Garantie probablement expirée"}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {status.isUnderWarranty
              ? "(estimation indicative)"
              : "(à vérifier selon votre situation)"}
          </p>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              status.isUnderWarranty
                ? status.daysRemaining > 30
                  ? "text-green-700"
                  : "text-amber-700"
                : "text-red-700"
            }`}
          >
            {status.message}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs">
            <span
              className={`${
                status.isUnderWarranty ? "text-green-600" : "text-red-600"
              }`}
            >
              <strong>Date d&apos;achat :</strong>{" "}
              {formatDateFR(status.purchaseDate)}
            </span>
            <span
              className={`${
                status.isUnderWarranty ? "text-green-600" : "text-red-600"
              }`}
            >
              <strong>Fin de garantie :</strong>{" "}
              {formatDateFR(status.warrantyEndDate)}
            </span>
            {status.isUnderWarranty && (
              <span className="text-green-600">
                <strong>Jours restants :</strong> {status.daysRemaining}
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500 italic">
            Estimation indicative basée sur la date d&apos;achat. La date de
            délivrance effective du bien peut varier. En cas de doute,
            consultez un professionnel du droit.
          </p>
        </div>
      </div>
    </div>
  );
}
