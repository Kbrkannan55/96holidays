import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Packages.css'; // Ensure you import your CSS
import Grid1 from '../../Images/Grid1.jpg';
import Grid2 from '../../Images/Grid2.jpg';
import Grid3 from '../../Images/Grid3.jpg';
import Grid4 from '../../Images/Grid4.jpg';
import Grid5 from '../../Images/Grid5.jpg';
import Grid6 from '../../Images/Grid6.jpg';
import Grid7 from '../../Images/Grid7.jpg';
import Grid8 from '../../Images/Grid8.jpg';
import { Link } from 'react-router-dom';

const itemData = [
    { img: Grid1, title: 'Tamil Nadu Packages' },
    { img: Grid8, title: 'Kerala Packages' },
    { img: Grid4, title: 'Karnataka Packages' },
    { img: Grid1, title: 'Goa Packages' },
    { img: Grid6, title: 'Himachal Pradesh Packages' },
    { img: Grid7, title: 'Maharashtra Packages' },
    { img: Grid5, title: 'Delhi Packages' },
    { img: Grid3, title: 'Rajasthan Packages' },
    { img: Grid5, title: 'Uttarakhand Packages' },
    { img: Grid6, title: 'Punjab Packages' },
];

const Packages = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: '#f9f9f9', // Light background
            }}
        >
            <Box sx={{ width: '90%', maxWidth: '1200px', overflow: 'hidden' }}>

                <h5 className="packages-header" style={{ justifyContent: 'center' }}>
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
                </h5>

                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <Link to='/packagedetails'>
                            <ImageListItem key={item.img} sx={{ position: 'relative', overflow: 'hidden' }}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    className="package-image"
                                />
                                <div className="image-title">{item.title}</div>
                            </ImageListItem></Link>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
};

export default Packages;
