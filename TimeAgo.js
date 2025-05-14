class TimeAgo {
  constructor(lang = "fr") {
    this.lang = lang;
    this.translations = {
      fr: {
        invalid: "Date invalide",
        justNow: "à l’instant",
        secondsAgo: "il y a quelques secondes",
        inSeconds: "dans quelques secondes",
        minuteAgo: "il y a une minute",
        inMinute: "dans une minute",
        minutesAgo: (n) => `il y a ${n} minutes`,
        inMinutes: (n) => `dans ${n} minutes`,
        hourAgo: "il y a une heure",
        inHour: "dans une heure",
        hoursAgo: (n) => `il y a ${n} heures`,
        inHours: (n) => `dans ${n} heures`,
        dayAgo: "hier",
        inDay: "demain",
        daysAgo: (n) => `il y a ${n} jours`,
        inDays: (n) => `dans ${n} jours`,
        monthsAgo: (n) => `il y a ${n} mois`,
        inMonths: (n) => `dans ${n} mois`,
        yearsAgo: (n) => `il y a ${n} ans`,
        inYears: (n) => `dans ${n} ans`,
      },
      en: {
        invalid: "Invalid date",
        justNow: "just now",
        secondsAgo: "a few seconds ago",
        inSeconds: "in a few seconds",
        minuteAgo: "a minute ago",
        inMinute: "in a minute",
        minutesAgo: (n) => `${n} minutes ago`,
        inMinutes: (n) => `in ${n} minutes`,
        hourAgo: "an hour ago",
        inHour: "in an hour",
        hoursAgo: (n) => `${n} hours ago`,
        inHours: (n) => `in ${n} hours`,
        dayAgo: "yesterday",
        inDay: "tomorrow",
        daysAgo: (n) => `${n} days ago`,
        inDays: (n) => `in ${n} days`,
        monthsAgo: (n) => `${n} months ago`,
        inMonths: (n) => `in ${n} months`,
        yearsAgo: (n) => `${n} years ago`,
        inYears: (n) => `in ${n} years`,
      },
    };
  }

  format(dateString) {
    const t = this.translations[this.lang] || this.translations["fr"];
    const now = new Date();
    const inputDate = new Date(dateString);
    if (isNaN(inputDate.getTime())) return t.invalid;

    const diffMs = inputDate - now;
    const diffSec = Math.round(diffMs / 1000);
    const diffAbs = Math.abs(diffSec);
    const isFuture = diffSec > 0;

    const minutes = Math.floor(diffAbs / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (diffAbs < 10) return isFuture ? t.inSeconds : t.justNow;
    if (diffAbs < 60) return isFuture ? t.inSeconds : t.secondsAgo;
    if (minutes === 1) return isFuture ? t.inMinute : t.minuteAgo;
    if (minutes < 60)
      return isFuture ? t.inMinutes(minutes) : t.minutesAgo(minutes);
    if (hours === 1) return isFuture ? t.inHour : t.hourAgo;
    if (hours < 24) return isFuture ? t.inHours(hours) : t.hoursAgo(hours);
    if (days === 1) return isFuture ? t.inDay : t.dayAgo;
    if (days < 30) return isFuture ? t.inDays(days) : t.daysAgo(days);
    if (months < 12) return isFuture ? t.inMonths(months) : t.monthsAgo(months);
    return isFuture ? t.inYears(years) : t.yearsAgo(years);
  }
}
