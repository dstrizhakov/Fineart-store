import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {userActions} from "../store/users/user.slice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export function Navigation() {
    const {setIsAuth} = userActions;
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.user.isAuth)

    return (
        <div className="">
            <nav
                className="z-50 fixed top-0 left-0 right-0 flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-700 text-white">
                <h3 className="font-bold">Fineart <span className="font-normal">Store</span></h3>
                <span>
                    <FormGroup>
                        <FormControlLabel control={<Switch
                            checked={isAuth}
                            onChange={event => {
                                dispatch(setIsAuth(event.target.checked))
                            }}
                            color="warning"/>} label="isAdmin"/>
                    </FormGroup>
                </span>
                <span>
				<Link to="/" className="mr-2">Home</Link>
				<Link to="/artworks" className="mr-2">Artworks</Link>
				<Link to="/contact" className="mr-2">Upload</Link>
			</span>
            </nav>
        </div>

    )
}