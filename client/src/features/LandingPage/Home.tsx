import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

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
                    <Button text="Skapa ett konto" style="homeBtn" />
                </section>
                <section>
                    <p>
                        Redan en i gänget?
                    </p>
                    <Button text="Logga in" style="homeBtn" />
                </section>
            </main>

            <Footer />

        </div>
    );
};

export default Home;