import './footer.css';

export default function Footer({msg}){
    return (
        <section class="footer">
            <div class="footerContent">
                <p>&copy; 2024 Empire Cinema. All rights reserved.</p>
                <div class="socialLinks">
                    <a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a>

                    <a class="twitter" href="#"><i class="fa-brands fa-x-twitter"></i></a>

                    <a class="instagram" href="#"><i class="fa-brands fa-instagram"></i></a>

                </div>
            </div>
        </section>
    )
}