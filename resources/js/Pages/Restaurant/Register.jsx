import { Head } from '@inertiajs/react';
import RestaurantRegistration from '../../components/restaurant/RestaurantRegistration';

export default function Register() {
    return (
        <>
            <Head title="Inscription Restaurant" />
            <div className="min-h-screen bg-gray-100">
                <div className="py-12">
                    <RestaurantRegistration />
                </div>
            </div>
        </>
    );
}
