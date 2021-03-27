import styles from '../styles/Footer.module.css';
const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row footer">
                    <div className="col-md-4">
                        <span>CrossFit 66</span> <br />
                        <span>Location: Yukon, OK 73099 </span><br />
                        <span>Phone: 405-514-6565 (Kristie)</span> <br />
                        <span>Phone: 405-514-1770 (Phillip)</span><br />
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-list">
                            <li><a href="/privacypolicy">PRIVACY POLICY</a></li>
                            <li><a href="/copyright-notice">COPYRIGHT NOTICE </a> </li>
                            <li><a href="/terms-of-service-conditions-of-use">TERMS OF SERVICE &amp; CONDITIONS OF USE </a></li>
                            <li><a href="/federal-trade-commission-compliance">FEDERAL TRADE COMMISSION COMPLIANCE</a></li>
                            <li><a href="/dmca-compliance"> DMCA COMPLIANCE</a> </li>
                            <li> <a href="/disclaimer"> DISCLAIMER </a></li>
                            <li> <a href="/anti-spam-policy"> ANTI-SPAM POLICY</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="textwidget custom-html-widget">
                            <a href="https://journal.crossfit.com/start.tpl?version=CFJ-graphic300x150" target="_blank" title="CrossFit Journal: The Performance-Based Lifestyle Resource" rel="noopener noreferrer"><img src="https://journal.crossfit.com/templates/images/graphic-300x150.jpg" width="300px" height="150px" alt="CrossFit Journal: The Performance-Based Lifestyle Resource" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
