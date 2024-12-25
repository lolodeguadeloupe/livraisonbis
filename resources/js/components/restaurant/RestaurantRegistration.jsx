import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import 'flatpickr/dist/l10n/fr.js';
import { French } from 'flatpickr/dist/l10n/fr.js';

const RestaurantRegistration = () => {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        restaurantNom: '',
        adresse: '',
        rdv: null
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleDateChange = (selectedDates) => {
        setFormData(prevState => ({
            ...prevState,
            rdv: selectedDates[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/restaurants/register', formData);
            if (response.data.success) {
                alert('Inscription réussie !');
                setFormData({
                    prenom: '',
                    nom: '',
                    restaurantNom: '',
                    adresse: '',
                    rdv: null
                });
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            alert('Une erreur est survenue lors de l\'inscription');
        }
    };

    const flatpickrOptions = {
        locale: French,
        enableTime: true,
        dateFormat: "d/m/Y H:i",
        minDate: "today",
        time_24hr: true,
        minTime: "09:00",
        maxTime: "18:00",
        disable: [
            function(date) {
                return (date.getDay() === 0);
            }
        ]
    };

    return (
        <div className="container">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <h1 className="text-2xl text-blue-600 font-bold text-center mb-8">
                    Inscription Restaurant
                </h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                                Prénom du restaurateur
                            </label>
                            <input
                                type="text"
                                id="prenom"
                                value={formData.prenom}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                Nom du restaurateur
                            </label>
                            <input
                                type="text"
                                id="nom"
                                value={formData.nom}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="restaurantNom" className="block text-sm font-medium text-gray-700">
                            Nom du restaurant
                        </label>
                        <input
                            type="text"
                            id="restaurantNom"
                            value={formData.restaurantNom}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                            Adresse du restaurant
                        </label>
                        <textarea
                            id="adresse"
                            value={formData.adresse}
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="rdv" className="block text-sm font-medium text-gray-700">
                            Choisir une date et heure de rendez-vous
                        </label>
                        <Flatpickr
                            value={formData.rdv}
                            onChange={handleDateChange}
                            options={flatpickrOptions}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RestaurantRegistration;
