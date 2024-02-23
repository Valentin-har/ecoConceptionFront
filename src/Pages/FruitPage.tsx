import {useEffect, useState} from 'react';
import Layout from "../Components/Layout.tsx";
import Card from "../Components/Card.tsx";
import axios from "axios";
import {Fruit} from "../Model/Fruit.ts";
import AddDialog from "../Components/AddDialog.tsx";

const FruitPage = () => {
    const [fruits, setFruits] = useState<Fruit[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState<String>('');
    const [description, setDescription] = useState<String>('');
    const [imageUrl, setImageUrl] = useState<String>('');

    const handleNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleDescriptionChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const handleImageUrlChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value)
    }

    const handleSubmit = async () => {

        const data = {
            fruit_name : name,
            fruit_description: description,
            fruit_picture: imageUrl
        }

        try {
            const response = await axios.post('http://localhost:8080/fruit', data);
            console.log(response.data); // Réponse du serveur
            setShowModal(false)
        } catch (error) {
            console.error(error);
        }
    };
    async function getFruits() {
        try {
            const response = await axios.get("http://localhost:8080/fruit");
            setFruits(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des équipages :", error);
            return []; // En cas d'erreur, retourner un tableau vide ou traiter l'erreur selon vos besoins
        }
    }

    useEffect(() => {
        if(!showModal){
            getFruits()
        }
    }, [showModal]);

    return (
        <Layout content={
            <>
                {showModal && <AddDialog setShowModal={setShowModal} handleNameChange={handleNameChange} handleDescriptionChange={handleDescriptionChange} handleImageUrlChange={handleImageUrlChange} handleSubmit={handleSubmit}></AddDialog>}
                <div className="backdrop-blur-sm bg-white/30 w-full">
                    <header className="text-white py-4 px-8 flex flex-col items-center">
                        <h2 className="text-3xl font-bold">Les fruits du démon</h2>
                        <button
                            onClick={() => setShowModal(true)}
                            type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4">
                            Ajouter un fruit
                        </button>
                    </header>
                    <main className="container mx-auto py-12 overflow-y-scroll h-4/5">
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {fruits.map(fruit => (
                                <Card name={fruit.fruit_name} description={fruit.fruit_description}
                                      imageUrl={fruit.fruit_picture}></Card>
                            ))}
                        </section>
                    </main>
                </div>
            </>
        } isHomePage={false}>
        </Layout>
    );
}

export default FruitPage;