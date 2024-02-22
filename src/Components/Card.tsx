const CrewPage = ({name, description, imageUrl}: {name: string, description: string, imageUrl: string}) => {

    return (
        <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <img src={imageUrl}
                 alt="" className="w-40 my-4 "/>
            <p className="text-lg flex-grow">{description}</p>
        </div>
    );
}

export default CrewPage;