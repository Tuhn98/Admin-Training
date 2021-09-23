import React from "react";
import { useTranslation } from 'react-i18next';
export default function Team() {
  const { t } = useTranslation()
  return (
    <div className="team">
      <h1>{t('content.TEAM')}</h1>
    </div>
  );
}