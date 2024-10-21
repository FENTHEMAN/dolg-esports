import { getTranslations } from "next-intl/server";

import styles from "./RootView.module.css";

export const RootView = async () => {
    const t = await getTranslations("Root");

    return <main className={styles.page}>{t("title")}</main>;
};
