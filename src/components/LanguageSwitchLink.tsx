import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

// https://github.com/i18next/next-i18next/tree/master/examples/ssg
const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as any);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href}>
      <button style={{ fontSize: "small" }} onClick={() => languageDetector.cache(locale)}>
        {locale}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
