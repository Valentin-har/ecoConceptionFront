import Layout from "../Components/Layout.tsx";
import {useEffect, useState} from "react";
import {Character} from "../Model/Character.ts";
import Card from "../Components/Card.tsx";
import axios from "axios";

const CharacterPage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    async function getCharacters() {
        try {
            const response = await axios.get("http://localhost:8080/pirate");
            setCharacters(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des équipages :", error);
            return []; // En cas d'erreur, retourner un tableau vide ou traiter l'erreur selon vos besoins
        }
    }

    useEffect(() => {
        getCharacters()
    }, []);

    return (
        <Layout content={
            <>
                <div className="backdrop-blur-sm bg-white/30 w-full">
                    <header className="text-white py-4 px-8 flex flex-col items-center">
                        <h2 className="text-3xl font-bold">Les personnages</h2>
                        <button type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4">
                            Ajouter un personnage
                        </button>
                    </header>
                    <main className="container mx-auto py-12 overflow-y-scroll h-4/5">
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <>
                                {characters.map(character => (
                                    <Card name={character.pir_name} description={character.pir_description}
                                          imageUrl={character.pir_picture}></Card>
                                ))}
                            </>
                        </section>
                    </main>
                </div>
            </>
        } isHomePage={false}>
        </Layout>
    );
}

export default CharacterPage;

