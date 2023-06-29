import React from "react";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright text-center py-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="text-muted">{t("FOOTERCONTENT")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;