import moment from "moment";
moment.updateLocale('ar', {
  months : 'يناير_فبراير_مارس_إبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  monthsShort : 'يناير_فبراير_مارس_إبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekdays : 'الأحد_الاثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  weekdaysShort : 'الأحد_الاثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'YYYY/MM/DD',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  meridiemParse: /ص|م/,
  isPM : function (input) {
    return 'م' === input;
  },
  meridiem : function (hour, minute, isLower) {
    if (hour < 12) {
      return 'ص';
    } else {
      return 'م';
    }
  },
  calendar : {
    sameDay: '[اليوم على الساعة] LT',
    nextDay: '[غدًا على الساعة] LT',
    nextWeek: 'dddd [على الساعة] LT',
    lastDay: '[أمس على الساعة] LT',
    lastWeek: 'dddd [على الساعة] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'في %s',
    past : 'منذ %s',
    s : 'ثوان',
    ss : '%d ثانية',
    m : 'دقيقة',
    mm : '%d دقائق',
    h : 'ساعة',
    hh : '%d ساعات',
    d : 'يوم',
    dd : '%d أيام',
    M : 'شهر',
    MM : '%d أشهر',
    y : 'سنة',
    yy : '%d سنوات'
  },
  preparse: function (string) {
    return string.replace(/[\u0660-\u0669]/g, function (match) {
      return String.fromCharCode(match.charCodeAt(0) - 0x0660);
    }).replace(/[\u06f0-\u06f9]/g, function (match) {
      return String.fromCharCode(match.charCodeAt(0) - 0x06f0);
    });
  }
})

export default moment;