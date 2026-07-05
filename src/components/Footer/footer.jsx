import './footer.css';

export default function Footer({msg}){
    return (
        <section className="footer">
            <div className="footerContent">
                <p>&copy; 2024 Empire Cinema. All rights reserved.</p>
                <div className="socialLinks">
                    <a className="facebook" href="#"><i className="fa-brands fa-facebook"></i></a>

                    <a className="twitter" href="#"><i className="fa-brands fa-x-twitter"></i></a>

                    <a className="instagram" href="#"><i className="fa-brands fa-instagram"></i></a>

                </div>
            </div>
        </section>
    )
}