import './about.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';


export default function About() {
  return (
    <body>
    <Header active={2}/>

          <section class="branchesSection">
        <h2 class="sectionTitle">Our <span class="Red">Branches</span></h2>
        <p class="sectionSubtitle">Find an Empire Cinema near you</p>
        <div class="branchesGrid">

            <div class="branchCard">
                <div class="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div class="branchInfo">
                    <h3>Empire Saida</h3>
                    <p class="branchLocation">Riad El Solh Street, Saida, Lebanon</p>
                    <a class="btn btnBranch" href="https://www.google.com/maps/search/Saida+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

            <div class="branchCard mainBranch">
                <div class="mainBranchTag">Main Branch</div>
                <div class="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div class="branchInfo">
                    <h3>Empire Beirut</h3>
                    <p class="branchLocation">Hamra District, Beirut, Lebanon</p>
                    <a class="btn btnBranch" href="https://www.google.com/maps/search/Hamra+Beirut+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

            <div class="branchCard">
                <div class="branchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div class="branchInfo">
                    <h3>Empire Sour</h3>
                    <p class="branchLocation">Al Mina Street, Sour (Tyre), Lebanon</p>
                    <a class="btn btnBranch" href="https://www.google.com/maps/search/Tyre+Lebanon" target="_blank">Open Location</a>
                </div>
            </div>

        </div>
    </section>

    <section class="pricesSection">
        <h2 class="sectionTitle">Ticket <span class="Red">Prices</span></h2>
        <p class="sectionSubtitle">Choose your perfect seat — the closer, the more immersive</p>

        <div class="screenBar">
            <span>◀ SCREEN ▶</span>
        </div>

        <div class="pricesGrid">

            <div class="priceTier platinum">
                <div class="tierGlow"></div>
                <div class="tierRows">Rows A – C</div>
                <div class="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div class="tierInfo">
                    <h3>Platinum</h3>
                    <p class="tierDesc">Front-row immersive experience — feel every scene</p>
                    <div class="tierPrice">$8<span>/seat</span></div>
                    <ul class="tierPerks">
                        <li>Closest to the screen</li>
                        <li>Maximum immersion</li>
                        <li>Best for action films</li>
                    </ul>
                </div>
            </div>

            <div class="priceTier gold popular">
                <div class="tierGlow"></div>
                <div class="popularTag">Most Popular</div>
                <div class="tierRows">Rows D – G</div>
                <div class="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div class="tierInfo">
                    <h3>Gold</h3>
                    <p class="tierDesc">The sweet spot — perfect viewing angle & distance</p>
                    <div class="tierPrice">$12<span>/seat</span></div>
                    <ul class="tierPerks">
                        <li>Center viewing angle</li>
                        <li>Optimal for all genres</li>
                        <li>Most comfortable distance</li>
                    </ul>
                </div>
            </div>

            <div class="priceTier diamond">
                <div class="tierGlow"></div>
                <div class="tierRows">Rows H – J</div>
                <div class="seatIcons">
                    <span>🪑</span><span>🪑</span><span>🪑</span>
                </div>
                <div class="tierInfo">
                    <h3>Diamond</h3>
                    <p class="tierDesc">Premium rear seats — widest view of the full screen</p>
                    <div class="tierPrice">$15<span>/seat</span></div>
                    <ul class="tierPerks">
                        <li>Full panoramic view</li>
                        <li>Recliner seats</li>
                        <li>Priority access</li>
                    </ul>
                </div>
            </div>

        </div>

        <p class="pricesNote">* Prices may vary on weekends and special screenings.</p>
    </section>

    <section class="menuSection">
        <h2 class="sectionTitle">Snacks <span class="Red">Menu</span></h2>
        <p class="sectionSubtitle">Grab your favourite snacks before the show</p>

        <div class="menuCategories">

            <div class="menuCategory">
                <h3 class="categoryTitle">🍿 Popcorn</h3>
                <div class="menuGrid">
                    <div class="menuCard">
                        <p class="menuItem">Small Popcorn</p>
                        <p class="menuPrice">$3.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Medium Popcorn</p>
                        <p class="menuPrice">$5.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Large Popcorn</p>
                        <p class="menuPrice">$7.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Caramel Popcorn</p>
                        <p class="menuPrice">$6.00</p>
                    </div>
                </div>
            </div>

            <div class="menuCategory">
                <h3 class="categoryTitle">🥤 Drinks</h3>
                <div class="menuGrid">
                    <div class="menuCard">
                        <p class="menuItem">Small Soda</p>
                        <p class="menuPrice">$2.50</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Large Soda</p>
                        <p class="menuPrice">$4.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Mineral Water</p>
                        <p class="menuPrice">$2.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Fresh Juice</p>
                        <p class="menuPrice">$3.50</p>
                    </div>
                </div>
            </div>

            <div class="menuCategory">
                <h3 class="categoryTitle">🌮 Snacks</h3>
                <div class="menuGrid">
                    <div class="menuCard">
                        <p class="menuItem">Nachos & Cheese</p>
                        <p class="menuPrice">$5.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Hot Dog</p>
                        <p class="menuPrice">$4.50</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Candy Bag</p>
                        <p class="menuPrice">$3.00</p>
                    </div>
                    <div class="menuCard">
                        <p class="menuItem">Chips</p>
                        <p class="menuPrice">$2.50</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <Footer />
    </body>
  )
}