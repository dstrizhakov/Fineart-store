import React, {FC, useEffect, useState} from 'react';
import {useDeleteArtworkMutation, useLazyGetAllArtworksQuery} from '../store/artworks/artworks.api';
import Artwork from "../components/Artwork";
import AddArtworkForm from "../components/ArtworkAdmin/AddArtworkForm/AddArtworkForm";
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {SelectChangeEvent} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Limitter from "../components/Limitter";
import Paginator from "../components/Paginator";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useAppSelector} from "../hooks/redux";


const ArtworksPage: FC = () => {
    const [limit, setLimit] = useState<string>("10")
    const [isAdmin, setIsAdmin] = useState(true);
    const [open, setOpen] = useState(false);
    const isAuth = useAppSelector(state => state.user.isAuth)

    /*const {isFetching, isError, data} = useGetAllArtworksQuery(parseInt(limit))*/

    const [fetchArtworks, {isLoading, isError, data}] = useLazyGetAllArtworksQuery()


    useEffect(() => {
        fetchArtworks(parseInt(limit))
    }, [limit])


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 750,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    const selectChange = (event: SelectChangeEvent):void => {
        const limit = event.target.value;
        setLimit(limit);
    };

    // const navigate = useNavigate();
    // const pushAddress = (artwork:IArtworks) =>{
    //     navigate(`/artworks/${artwork.id}`)
    // }



    return (
        <div className="my-14">
            <div className="flex items-center justify-center bg-slate-50 my-5">
                {/*<FormGroup>
                    <FormControlLabel control={<Switch
                        checked={isAdmin}
                        onChange={event => {
                            setIsAdmin(event.target.checked)
                        }}
                        color="warning"/>} label="isAdmin"/>
                </FormGroup>*/}
                <div className="flex justify-center items-center my-3">
                    <Limitter limit={limit} selectChange={selectChange}/>
                    <Paginator count={100} spacing={10}/>
                </div>
            </div>

            { isAuth && <div className="flex justify-center">
                <Fab onClick={handleOpen} size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                {/*<Button startIcon={<FileUploadIcon/>} color="secondary" sx={{mx: 2, minWidth: 163}} size="large"
                        variant="outlined" onClick={handleOpen}>Create new artwork</Button>*/}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                            <div className="bg-white">
                                <h2 className="text-center font-bold my-2">Create new artwork</h2>
                                <AddArtworkForm handleClose={handleClose} />
                            </div>
                    </Box>
                </Modal>
            </div>}

            <div className="flex">
                <div  className="font-bold flex flex-wrap justify-center my-3">
                    {data?.map(artwork => <Artwork key={artwork.id} artwork={artwork}/>)}
                </div>
            </div>

        </div>

    );
};

export default ArtworksPage;


