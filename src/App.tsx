import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {AppBar, Grid} from '@mui/material'
import Item from './component/item'
import data from '../data/data.json'
import {Item as ItemType} from './types/item'

function App() {
    return (
        <>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {/*TODO Going through all the items and renders them on a scroll render base*/}
                    {
                        data.map((item, index) => {
                            return  (<Grid><Item {...item}/></Grid>)
                        })
                    }

            </Grid>
        </>
    )
}

export default App
