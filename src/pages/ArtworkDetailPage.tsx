import React, {FC, useEffect} from 'react';
import {useGetArtworkQuery, useLazyGetArtworkQuery} from "../store/artworks/artworks.api";
import {IArtworks} from "../models/models";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import UpdateArtworkForm from "../components/ArtworkAdmin/UpdateArtworkForm";
import {Button, Rating} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonGroup from "@mui/material/ButtonGroup";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/*interface ArtworkDetailPagePropsType {
    artwork: IArtworks;
}*/

const ArtworkDetailPage: FC = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [getArtwork, {isLoading, isError, data:artwork}] =  useLazyGetArtworkQuery()


    useEffect(() => {
        getArtwork(parseInt(id || "1"))
    }, [id])

    const goBack = () => {
        navigate('/artworks')
    }

    return (
        <div className=" max-w-[1920px] mx-auto">
            <div className="mt-[80px] mx-3 my-2">
                <Button onClick={(event) => goBack()} startIcon={<ArrowBackIcon />} variant="text">Back</Button>
            </div>

            <div className="lg:flex max-w-md md:mx-2 md:p-5 bg-white overflow-hidden max-w-full ">
                <div className="lg:w-2/3">
                    <img className=" lg:p-6 md:p-6 border shadow-md object-cover" src={artwork?.img}
                         alt="ой, картинки нет"/>
                </div>
                <div className="lg:w-1/3 mx-auto">
                    <div className="lg:flex flex-col h-auto font-thin px-5 py-4 ">
                        <h1 className="mx-5 my-2 lg:text-2xl md:text-xl sm:text-l text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold">{artwork?.title}</h1>
                        <div className=" mt-2 lg:text-xl md:text-m sm:text-sm text-slate-500">
                            <div>Description: {artwork?.description}</div>
                            <div>Type: {artwork?.type}</div>
                            <div>Size: {artwork?.size}</div>
                            <div
                                className='block mt-1 text-xl leading-tight'>Price: {artwork?.price}
                                <span>{artwork?.currency}</span></div>
                            {artwork?.isAvailable === "Available"
                                ? <div className="my-5">
                                    <Button startIcon={<ShoppingCartIcon />} variant="contained">Buy artwork</Button>
                                </div>
                                : <div className="my-5">
                                    <Button startIcon={<ShoppingCartIcon />} disabled variant="outlined" >Sold</Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetailPage;