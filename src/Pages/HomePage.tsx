import {Component} from 'react';
import Layout from "../Components/Layout.tsx";
import {NavLink} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <Layout content={
                <>
                    <div className="backdrop-blur-sm bg-white/30 w-full">
                        <header className="text-white py-4 px-8 flex flex-col items-center">
                            <h1 className="text-3xl font-bold">Grand Line</h1>
                            <p className="text-lg">La route vers un avenir durable</p>
                        </header>
                        <main className="container mx-auto py-12 overflow-y-scroll h-90">
                            <section className="mb-12 flex flex-col items-center">
                                <h2 className="text-2xl font-bold text-white">Voyagez dans l'univers de One Piece et de
                                    l'éco-conception :</h2>
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gray-100 p-8 rounded-lg flex flex-col">
                                    <h3 className="text-xl font-bold mb-4">Les personnages</h3>
                                    <p className="text-lg flex-grow">L'univers de One Piece est rempli de personnages
                                        uniques et attachants, aux personnalités et aux pouvoirs extraordinaires.

                                        De l'optimiste Luffy au cyborg excentrique Franky, chaque membre de l'équipage
                                        du Chapeau de paille apporte sa touche unique à l'aventure.

                                        Leur amitié indéfectible et leur courage face à l'adversité font de ces
                                        personnages des héros inoubliables pour tous les fans.</p>
                                    <NavLink to="/character" className="text-white flex flex-col items-center">
                                        <button type="button"
                                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4">En
                                            savoir plus !
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="bg-gray-100 p-8 rounded-lg flex flex-col">
                                    <h3 className="text-xl font-bold mb-4">Les équipages</h3>
                                    <p className="text-lg flex-grow">
                                        Les équipages de One Piece : une mer de diversité

                                        L'univers de One Piece regorge d'équipages de pirates aussi variés que
                                        fascinants.

                                        Des puissants Empereurs aux pirates débutants, chaque équipage possède ses
                                        propres ambitions, ses propres codes d'honneur et sa propre histoire.

                                        Leurs interactions et leurs rivalités créent une dynamique explosive qui rend le
                                        monde de One Piece si unique et captivant.
                                    </p>
                                    <NavLink to="/crew" className="text-white flex flex-col items-center">
                                        <button type="button"
                                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4">Rejoignez
                                            l'aventure !
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="bg-gray-100 p-8 rounded-lg flex flex-col">
                                    <h3 className="text-xl font-bold mb-4">Les fruits du démon</h3>
                                    <p className="text-lg flex-grow">
                                        Fruits du démon : des pouvoirs dingues dans un seul fruit !

                                        Transformations animales, pouvoirs élémentaires, force surhumaine... ces fruits
                                        rares donnent des capacités uniques !
                                    </p>
                                    <NavLink to="/fruit" className="text-white flex flex-col items-center">
                                        <button type="button"
                                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4">Venez
                                            en croquer un !
                                        </button>
                                    </NavLink>

                                </div>
                            </section>
                        </main>
                    </div>
                </>
            } isHomePage={true}>
            </Layout>
        );
    }
}

export default HomePage;