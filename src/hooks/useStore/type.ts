export type Language = 'en' | 'zh';
export type I18nKey = 'name' | 'age';

export const enum SecurityActions {
  injectI18nMap = 'inject-i18n-map',
  changeLanguage = 'change-language',
}

export type I18nMap = Partial<Record<Language, Record<I18nKey, string>>>;

export type ActionInjectI18n = {
  type: SecurityActions.injectI18nMap;
  data: I18nMap;
};

export type ActionChangeLanguage = {
  type: SecurityActions.changeLanguage;
  data: Language;
};

export type Action = ActionInjectI18n | ActionChangeLanguage;
