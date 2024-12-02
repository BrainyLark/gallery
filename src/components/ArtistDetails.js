import { useParams } from "react-router-dom";

const ArtistDetails = () => {

    const { id } = useParams();

    return (
        <div className="flex bg-transparent min-h-screen items-center">
            <h1 className="text-5xl font-extralight font-serif mx-auto">Artist Detail: { id }</h1>
        </div>
    );
}

export default ArtistDetails;