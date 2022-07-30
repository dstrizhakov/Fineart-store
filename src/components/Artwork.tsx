import React, {FC, ReactEventHandler, useEffect, useState} from 'react';
import {IArtworks} from "../models/models";
import {Button, Rating} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useDeleteArtworkMutation, useUpdateArtworkMutation} from "../store/artworks/artworks.api";
import ButtonGroup from "@mui/material/ButtonGroup";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import AddArtworkForm from "./ArtworkAdmin/AddArtworkForm/AddArtworkForm";
import UpdateArtworkForm from "./ArtworkAdmin/UpdateArtworkForm";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";

interface ArtworkPropsType {
    artwork: IArtworks,
}

const Artwork: FC<ArtworkPropsType> = ({artwork}) => {
    const [value, setValue] = useState<number | null>(0)
    const [update, setUpdate] = useState(false);
    const [open, setOpen] = useState(false);
    const [deleteArtwork, {error}] = useDeleteArtworkMutation()

    const isAuth = useAppSelector(state => state.user.isAuth)

    useEffect(() => {
        setValue(artwork.rating)
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 800,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    const ratingClickHandler = (newValue: number | null) => {
        setValue(newValue)
    }
    const handleRemove:any = async (e:React.MouseEvent) => {
        await deleteArtwork(artwork);
    }
    const handleUpdate:any = (e: React.MouseEvent) => {
        setUpdate(true)
        handleOpen()
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const pushAddress = (artwork:IArtworks) =>{
        navigate(`/artworks/${artwork.id}`)
    }

    return (
        <div className="md:flex max-w-md mx-2 my-4 bg-white rounded-l shadow-md overflow-hidden md:max-w-4xl">
            {update && <div>
                <div className="flex justify-center">
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className="bg-white">
                                <h2 className="text-center font-bold ">Update artwork</h2>
                                <UpdateArtworkForm artwork={artwork} handleClose={handleClose}/>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>}
            <div className="w-full">
                <img onClick={(e)=> pushAddress(artwork)} className=" px-1 h-200 w-full object-contain md:h-full md:w-200" src={artwork.img}
                     alt="ой, картинки нет"/>
            </div>
            <div className="w-full">
                <h1 className="mx-5 my-2 text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold">{artwork.title}</h1>
                <div className="md:flex flex-col h-auto font-thin px-5 py-4 ">
                    <div className=" mt-2 text-slate-500">
                        <div>Description: {artwork.description}</div>
                        <div>Category: {artwork.category}</div>
                        <div>Type: {artwork.type}</div>
                        <div>Size: {artwork.size}</div>
                        <div
                            className='block mt-1 text-lg leading-tight font-medium text-black '>Price: {artwork.price}
                            <span>{artwork.currency}</span></div>
                    </div>

                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            ratingClickHandler(newValue)
                        }}
                    />
                    {artwork.isAvailable === "Available"
                        ? <div className="my-5">
                            <Button startIcon={<ShoppingCartIcon />} variant="contained">Buy artwork</Button>
                        </div>
                        : <div className="my-5">
                            <Button startIcon={<ShoppingCartIcon />} disabled variant="outlined" >Sold</Button>
                        </div>
                    }
                    {isAuth&& <ButtonGroup color="secondary" variant="outlined" aria-label="outlined button group">
                        <Button onClick={(e)=> handleUpdate(artwork)} startIcon={<UpdateIcon />}>Update</Button>
                        <Button onClick={(e)=> handleRemove(artwork)} startIcon={<DeleteIcon />}>Delete</Button>
                    </ButtonGroup> }

                </div>
            </div>
        </div>
    )
};

export default Artwork;