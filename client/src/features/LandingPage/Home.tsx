import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />

            <main>
                <h1>GREEN HERO</h1>
                <p>
                    En inbjudande kul text som får folk att vilja gå med
                </p>

                <section>
                    <p>
                        Vill du också var med
                    </p>
                    <Link to={"register"}><Button text="Skapa ett konto"/></Link>
                </section>
                <section>
                    <p>
                        Redan en i gänget?
                    </p>
                    <Link to={"login"}><Button text="Logga in"/></Link>
                </section>
            </main>

            <Footer />

        </div>
    );
};

export default Home;