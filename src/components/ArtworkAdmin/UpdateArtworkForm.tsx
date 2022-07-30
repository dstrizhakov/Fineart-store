import React, {FC, FormEvent, useState} from 'react';
import {Button, Select} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {useUpdateArtworkMutation} from "../../store/artworks/artworks.api";
import {IArtworks} from "../../models/models";


interface UpdateArtworkFormPropsType {
    artwork: IArtworks;
    handleClose: () => void;
}

const UpdateArtworkForm: FC<UpdateArtworkFormPropsType> = ({artwork, handleClose}) => {

    const [category, setCategory] = useState<string>(artwork.category);
    const [type, setType] = useState<string>(artwork.type);
    const [title, setTitle] = useState<string>(artwork.title);
    const [description, setDescription] = useState<string>(artwork.description);
    const [img, setImg] = useState<string>(artwork.img);
    const [size, setSize] = useState<string>(artwork.size);
    const [isAvailable, setIsAvailable] = useState<string>(artwork.isAvailable);
    const [price, setPrice] = useState<string>(artwork.price);
    const [currency, setCurrency] = useState<string>(artwork.currency);
    const [updateArtwork, {isError}] = useUpdateArtworkMutation()


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateArtwork({
            ...artwork,
            category,
            type,
            title,
            description,
            img,
            size,
            isAvailable,
            rating: 0,
            price,
            currency,
        } as IArtworks)

        handleClose();

        /* setCategory("");
         setType("");
         setTitle("");
         setDescription("");
         setImg("");
         setSize("");
         setIsAvailable("Available");
         setPrice("");
         setCurrency("USD");*/
    };

    return (
        <div className="flex justify-center my-14">
            <form className="" onSubmit={onSubmit}>
                <div>
                    <FormControl sx={{m: 2, minWidth: 180}} size="small">
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={category}
                            label="Category"
                            onChange={(e: any) => setCategory(e.target.value)}
                        >
                            <MenuItem value="abstraction">Abstraction</MenuItem>
                            <MenuItem value="landscape">Landscape</MenuItem>
                            <MenuItem value="nature">Nature</MenuItem>
                            <MenuItem value="flowers">Flowers</MenuItem>
                            <MenuItem value="city">City</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{m: 2, minWidth: 180}} size="small">
                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select
                            labelId="type-select-label"
                            id="type-select"
                            value={type}
                            label="Type"
                            onChange={(e: any) => setType(e.target.value)}
                        >
                            <MenuItem value="oil on canvas">Oil on canvas</MenuItem>
                            <MenuItem value="oil on cardboard">Oil on cardboard</MenuItem>
                            <MenuItem value="acrylic on canvas">Acrylic on canvas</MenuItem>
                            <MenuItem value="acrylic on cardboard">Acrylic on cardboard</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        sx={{mx: 2, minWidth: 393}} size="small"
                        id="title-textarea"
                        label="Title"
                        multiline
                        maxRows={4}
                        value={title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <TextField
                        sx={{m: 2, minWidth: 393}} size="small"
                        id="description-textarea"
                        label="Description"
                        multiline
                        rows={8}
                        value={description}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <TextField
                        sx={{mx: 2, minWidth: 393}} size="small"
                        id="size-textarea"
                        label="Size"
                        multiline
                        value={size}
                        onChange={(e) => setSize(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <TextField
                        sx={{m: 2, minWidth: 393}} size="small"
                        id="image-textarea"
                        label="Image link"
                        multiline
                        value={img}
                        onChange={(e) => setImg(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <FormControl sx={{mx: 2, minWidth: 180}} size="small">
                        <InputLabel id="availability-select-label">Availability</InputLabel>
                        <Select
                            labelId="availability-select-label"
                            id="availability-select"
                            value={isAvailable}
                            label="Availability"
                            onChange={(e: any) => setIsAvailable(e.target.value)}
                        >
                            <MenuItem value="Available">Available</MenuItem>
                            <MenuItem value="Unavailable">Unavailable</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        sx={{m: 2, minWidth: 180}} size="small"
                        id="price-textarea"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.currentTarget.value)
                        }
                    />
                    <FormControl sx={{m: 2, minWidth: 160}} size="small">
                        <InputLabel id="currency-select-label">Currency</InputLabel>
                        <Select
                            labelId="currency-select-label"
                            id="currency-select"
                            value={currency}
                            label="Currency"
                            onChange={(e: any) => setCurrency(e.target.value)}
                        >
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="RUR">RUR</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button startIcon={<FileUploadIcon/>} color="secondary" sx={{mx: 2, minWidth: 163}} size="large"
                        variant="outlined" type="submit">Update artwork</Button>
                {isError &&
                    <div className="m-4 p-2 text-center text-sm text-red-500 border">Возникла ошибка при загрузке на
                        сервер!</div>}
            </form>
        </div>
    );
};
export default UpdateArtworkForm;