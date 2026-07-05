import './about.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


export default function About() {
  return (
    <body>
    <Header active={2}/>

          <section className="branchesSection">
        <h2 className="sectionTitle">Our <span className="Red">Branches</span></h2>
        <p className="sectionSubtitle">Find an Empire Cinema near you</p>
        <div className="branchesGrid">

            <div className="branchCard">
                <div className="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="branchInfo">
                    <h3>Empire Saida</h3>
                    <p className="branchLocation">Riad El Solh Street, Saida, Lebanon</p>
                    <a className="btn btnBranch" href="https://www.google.com/maps/search/Saida+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

            <div className="branchCard mainBranch">
                <div className="mainBranchTag">Main Branch</div>
                <div className="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="branchInfo">
                    <h3>Empire Beirut</h3>
                    <p className="branchLocation">Hamra District, Beirut, Lebanon</p>
                    <a className="btn btnBranch" href="https://www.google.com/maps/search/Hamra+Beirut+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

            <div className="branchCard">
                <div className="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="branchInfo">
                    <h3>Empire Sour</h3>
                    <p className="branchLocation">Al Mina Street, Sour (Tyre), Lebanon</p>
                    <a className="btn btnBranch" href="https://www.google.com/maps/search/Tyre+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

        </div>
    </section>

    <section className="pricesSection">
        <h2 className="sectionTitle">Ticket <span className="Red">Prices</span></h2>
        <p className="sectionSubtitle">Choose your perfect seat — the closer, the more immersive</p>

        <div className="screenBar">
            <span>◀ SCREEN ▶</span>
        </div>

        <div className="pricesGrid">

            <div className="priceTier platinum">
                <div className="tierGlow"></div>
                <div className="tierRows">Rows A – C</div>
                <div className="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div className="tierInfo">
                    <h3>Platinum</h3>
                    <p className="tierDesc">Front-row immersive experience — feel every scene</p>
                    <div className="tierPrice">$8<span>/seat</span></div>
                    <ul className="tierPerks">
                        <li>Closest to the screen</li>
                        <li>Maximum immersion</li>
                        <li>Best for action films</li>
                    </ul>
                </div>
            </div>

            <div className="priceTier gold popular">
                <div className="tierGlow"></div>
                <div className="popularTag">Most Popular</div>
                <div className="tierRows">Rows D – G</div>
                <div className="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div className="tierInfo">
                    <h3>Gold</h3>
                    <p className="tierDesc">The sweet spot — perfect viewing angle & distance</p>
                    <div className="tierPrice">$12<span>/seat</span></div>
                    <ul className="tierPerks">
                        <li>Center viewing angle</li>
                        <li>Optimal for all genres</li>
                        <li>Most comfortable distance</li>
                    </ul>
                </div>
            </div>

            <div className="priceTier diamond">
                <div className="tierGlow"></div>
                <div className="tierRows">Rows H – J</div>
                <div className="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div className="tierInfo">
                    <h3>Diamond</h3>
                    <p className="tierDesc">Premium rear seats — widest view of the full screen</p>
                    <div className="tierPrice">$15<span>/seat</span></div>
                    <ul className="tierPerks">
                        <li>Full panoramic view</li>
                        <li>Recliner seats</li>
                        <li>Priority access</li>
                    </ul>
                </div>
            </div>

        </div>

        <p className="pricesNote">* Prices may vary on weekends and special screenings.</p>
    </section>

    <section className="menuSection">
        <h2 className="sectionTitle">Snacks <span className="Red">Menu</span></h2>
        <p className="sectionSubtitle">Grab your favourite snacks before the show</p>

        <div className="menuCategories">

            <div className="menuCategory">
                <h3 className="categoryTitle">🍿 Popcorn</h3>
                <div className="menuGrid">
                    <div className="menuCard">
                        <p className="menuItem">Small Popcorn</p>
                        <p className="menuPrice">$3.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Medium Popcorn</p>
                        <p className="menuPrice">$5.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Large Popcorn</p>
                        <p className="menuPrice">$7.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Caramel Popcorn</p>
                        <p className="menuPrice">$6.00</p>
                    </div>
                </div>
            </div>

            <div className="menuCategory">
                <h3 className="categoryTitle">🥤 Drinks</h3>
                <div className="menuGrid">
                    <div className="menuCard">
                        <p className="menuItem">Small Soda</p>
                        <p className="menuPrice">$2.50</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Large Soda</p>
                        <p className="menuPrice">$4.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Mineral Water</p>
                        <p className="menuPrice">$2.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Fresh Juice</p>
                        <p className="menuPrice">$3.50</p>
                    </div>
                </div>
            </div>

            <div className="menuCategory">
                <h3 className="categoryTitle">🌮 Snacks</h3>
                <div className="menuGrid">
                    <div className="menuCard">
                        <p className="menuItem">Nachos & Cheese</p>
                        <p className="menuPrice">$5.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Hot Dog</p>
                        <p className="menuPrice">$4.50</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Candy Bag</p>
                        <p className="menuPrice">$3.00</p>
                    </div>
                    <div className="menuCard">
                        <p className="menuItem">Chips</p>
                        <p className="menuPrice">$2.50</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <Footer />
    </body>
  )
}