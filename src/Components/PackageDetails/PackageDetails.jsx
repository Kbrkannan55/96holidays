import React, { useState } from 'react';
import {
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import img1 from '../../Images/Banner-Image-1.jpg';
import img2 from '../../Images/Banner-Image-2.jpg';
import img3 from '../../Images/Banner-Image-3.jpg';
import img4 from '../../Images/Grid2.jpg';
import img5 from '../../Images/Grid2.jpg';
import img6 from '../../Images/Grid4.jpg';
import img7 from '../../Images/Grid6.jpg';
import img8 from '../../Images/fancy-image.jpg';
import img9 from '../../Images/Grid5.jpg';
import img10 from '../../Images/Cup2.jpg';
import './PackageDetails.css'

const packagesData = [
    {
        id: 1,
        destination: 'Hawaii',
        images: [img6, img2, img3],
        itinerary: [
            { day: 1, detail: 'Arrive in Hawaii and check in to your hotel.' },
            { day: 2, detail: 'Explore the beaches of Oahu.' },
            { day: 3, detail: 'Visit the Pearl Harbor Memorial.' },
        ],
    },
    {
        id: 2,
        destination: 'Paris',
        images: [img4, img5, img6],
        itinerary: [
            { day: 1, detail: 'Arrive in Paris and check in to your hotel.' },
            { day: 2, detail: 'Visit the Eiffel Tower.' },
            { day: 3, detail: 'Explore the Louvre Museum.' },
        ],
    },
    {
        id: 3,
        destination: 'New York',
        images: [img8, img2, img3],
        itinerary: [
            { day: 1, detail: 'Arrive in New York and check in to your hotel.' },
            { day: 2, detail: 'Visit Central Park.' },
            { day: 3, detail: 'See a Broadway show.' },
        ],
    },
    {
        id: 4,
        destination: 'Tokyo',
        images: [img9, img5, img6],
        itinerary: [
            { day: 1, detail: 'Arrive in Tokyo and check in to your hotel.' },
            { day: 2, detail: 'Explore Shibuya and Shinjuku.' },
            { day: 3, detail: 'Visit the Tokyo Skytree.' },
        ],
    },
    {
        id: 5,
        destination: 'Sydney',
        images: [img7, img2, img3],
        itinerary: [
            { day: 1, detail: 'Arrive in Sydney and check in to your hotel.' },
            { day: 2, detail: 'Visit the Sydney Opera House.' },
            { day: 3, detail: 'Explore Bondi Beach.' },
        ],
    },
    {
        id: 6,
        destination: 'Rome',
        images: [img5, img5, img6],
        itinerary: [
            { day: 1, detail: 'Arrive in Rome and check in to your hotel.' },
            { day: 2, detail: 'Visit the Colosseum.' },
            { day: 3, detail: 'Explore the Vatican City.' },
        ],
    },
    {
        id: 7,
        destination: 'London',
        images: [img2, img2, img3],
        itinerary: [
            { day: 1, detail: 'Arrive in London and check in to your hotel.' },
            { day: 2, detail: 'Visit Buckingham Palace.' },
            { day: 3, detail: 'See the British Museum.' },
        ],
    },
    {
        id: 8,
        destination: 'Dubai',
        images: [img1, img5, img6],
        itinerary: [
            { day: 1, detail: 'Arrive in Dubai and check in to your hotel.' },
            { day: 2, detail: 'Visit the Burj Khalifa.' },
            { day: 3, detail: 'Explore the Dubai Mall.' },
        ],
    },
    {
        id: 9,
        destination: 'Rio de Janeiro',
        images: [img3, img2, img3],
        itinerary: [
            { day: 1, detail: 'Arrive in Rio de Janeiro and check in to your hotel.' },
            { day: 2, detail: 'Visit Christ the Redeemer.' },
            { day: 3, detail: 'Relax on Copacabana Beach.' },
        ],
    },
    {
        id: 10,
        destination: 'Bangkok',
        images: [img4, img5, img6],
        itinerary: [
            { day: 1, detail: 'Arrive in Bangkok and check in to your hotel.' },
            { day: 2, detail: 'Explore the Grand Palace.' },
            { day: 3, detail: 'Visit Wat Pho.' },
        ],
    },
];

const PackageDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [visiblePackages, setVisiblePackages] = useState(9); // Initially show 9 packages

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPackages = packagesData.filter((pkg) =>
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePackageSelect = (pkg) => {
        setSelectedPackage(pkg);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedPackage(null);
    };

    const handleViewMore = () => {
        setVisiblePackages((prev) => prev + 3); // Show 3 more packages
    };

    return (
        <div className="package-details">
            <h1 style={{ fontFamily: 'cursive' }}>Explore Our Packages</h1>
            <TextField
                label="Search by Destination"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredPackages.length > 0 ? (
                <div>
                    <div className="package-grid">
                        {filteredPackages.slice(0, visiblePackages).map((pkg) => (
                            <div key={pkg.id} onClick={() => handlePackageSelect(pkg)} className="package-card">
                                <img src={pkg.images[0]} alt={pkg.destination} />
                                <div className="package-text">{pkg.destination}</div>
                            </div>

                        ))}
                    </div>

                    {visiblePackages < filteredPackages.length && (
                        <Button className="view-more-button" onClick={handleViewMore} style={{fontFamily:'cursive', backgroundColor:'orange',color:'white',marginTop:'15px'}}>
                            View More
                        </Button>
                    )}

                    <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
                        <DialogTitle className="dialog-title" style={{fontFamily:'cursive'}}>{selectedPackage?.destination}</DialogTitle>
                        <DialogContent className="dialog-content">
                            {selectedPackage?.itinerary.map((item, index) => (
                                <Accordion key={index} style={{fontFamily:'cursive'}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography style={{fontFamily:'cursive'}}>Day {item.day}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{fontFamily:'cursive'}}>{item.detail}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Typography variant="h6" style={{fontFamily:'cursive', marginTop:'5px'}}>Places You Will Visit</Typography>
                            <div className="additional-images">
                                {selectedPackage?.images.map((img, index) => (
                                    <img key={index} src={img} alt={`additional ${index}`} />
                                ))}
                            </div>
                        </DialogContent>
                        <DialogActions className="dialog-actions">
                            <Button onClick={handleCloseModal} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            ) : (
                <Typography>No packages found.</Typography>
            )}
        </div>
    );
};

export default PackageDetails;
